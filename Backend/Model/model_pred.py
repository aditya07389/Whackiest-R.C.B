import pandas as pd
import joblib
from geopy.geocoders import Nominatim
from geopy.distance import geodesic
import numpy as np

def get_coordinates(location_name):
    geolocator = Nominatim(user_agent="solar_wind_project")
    location = geolocator.geocode(location_name)
    if location:
        return location.latitude, location.longitude
    else:
        print("Location not found")
        return None, None

def get_region_bounds(latitude, longitude, offset=0.1):
    # Calculate region bounds for the given location
    return [latitude - offset, latitude + offset, longitude - offset, longitude + offset]

def encode_categorical(data, model_type='solar'):
    # Load the correct encoder based on the model type (solar or wind)
    encoder_filename = 'land_accessibility_encoder.joblib'
    label_encoder = joblib.load(encoder_filename)
    data['land_accessibility'] = label_encoder.transform(data['land_accessibility'])
    return data

def filter_close_locations(predictions, distance_threshold=10):
    """
    Filters out locations that are within a specified distance threshold (in km).
    """
    filtered = []
    for _, row in predictions.iterrows():
        lat, lon = row['latitude'], row['longitude']
        too_close = any(
            geodesic((lat, lon), (existing['latitude'], existing['longitude'])).km < distance_threshold
            for existing in filtered
        )
        if not too_close:
            filtered.append(row)
    return pd.DataFrame(filtered)

def reverse_geocode(lat, lon):
    geolocator = Nominatim(user_agent="solar_wind_project")
    location = geolocator.reverse((lat, lon), language="en")
    return location.address if location else "Unknown location"

def predict_best_locations(region_bounds, model_type='solar'):
    model_filename = f'{model_type}_scaler.joblib'
    model = joblib.load(model_filename)

    # Generate grid points
    latitudes = list(np.arange(region_bounds[0], region_bounds[1], 0.05))  # Adjust step as needed
    longitudes = list(np.arange(region_bounds[2], region_bounds[3], 0.05))
    grid = [(lat, lon) for lat in latitudes for lon in longitudes]

    # Create DataFrame with sample locations and required features
    df = pd.DataFrame(grid, columns=['latitude', 'longitude'])
    df['land_cover'] = 1  # Example value
    df['land_accessibility'] = 'Low'  # Example value

    # Encode categorical features
    df = encode_categorical(df, model_type)

    # Predict scores
    df['predicted_score'] = model.predict(df)

    # Sort by score
    df = df.sort_values(by='predicted_score', ascending=False)

    # Filter out locations that are too close
    filtered_df = filter_close_locations(df)

    # Add reverse geocoded names
    filtered_df['location_name'] = filtered_df.apply(
        lambda row: reverse_geocode(row['latitude'], row['longitude']), axis=1
    )

    return filtered_df.head(5)


def main(location_name, model_type='solar'):
    latitude, longitude = get_coordinates(location_name)
    if latitude is None or longitude is None:
        return

    print(f"Coordinates for {location_name}: Latitude={latitude}, Longitude={longitude}")
    
    region_bounds = get_region_bounds(latitude, longitude)
    print(f"Region bounds for {location_name}: {region_bounds}")

    top_5_locations = predict_best_locations(region_bounds, model_type=model_type)
    print(f"Top 5 {model_type.capitalize()} Locations with Scores and Names:")
    print(top_5_locations[['latitude', 'longitude', 'predicted_score', 'location_name']])


if __name__ == "__main__":
    location_name = input("Enter a location name: ")
    model_choice = input("Do you want solar or wind model? (Enter 'solar' or 'wind'): ").lower()
    
    if model_choice in ['solar', 'wind']:
        main(location_name, model_type=model_choice)
    else:
        print("Invalid model type! Please enter 'solar' or 'wind'.")

