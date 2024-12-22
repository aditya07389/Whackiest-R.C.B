from geopy.geocoders import Nominatim
from geopy.distance import geodesic

def get_coordinates(location_name):
    # Use Geopy to get coordinates from the location name
    geolocator = Nominatim(user_agent="solar_wind_model")
    location = geolocator.geocode(location_name)

    if location:
        return location.latitude, location.longitude
    else:
        print(f"Could not find coordinates for {location_name}")
        return None, None

def get_location_name(latitude, longitude):
    # Use Geopy to convert coordinates into a location name
    geolocator = Nominatim(user_agent="solar_wind_model")
    location = geolocator.reverse((latitude, longitude))
    
    if location:
        return location.address
    else:
        return "Unknown location"

def are_coordinates_too_close(coord1, coord2, threshold=10.0):
    # Check if two coordinates are closer than the threshold (in kilometers)
    distance = geodesic(coord1, coord2).kilometers
    return distance < threshold

