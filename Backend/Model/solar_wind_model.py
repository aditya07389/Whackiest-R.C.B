import pandas as pd
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Input
from tensorflow.keras.optimizers import Adam
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, MinMaxScaler
import joblib

def train_dl_model(csv_file, model_type='solar', epochs=50, batch_size=32):
    # Load the dataset
    if model_type == 'solar':
        required_columns = ['latitude', 'longitude', 'land_cover', 'land_accessibility', 'solar_suitability_score']
    elif model_type == 'wind':
        required_columns = ['latitude', 'longitude', 'land_cover', 'land_accessibility', 'wind_suitability_score']
    else:
        raise ValueError(f"Unsupported model type: {model_type}")
    
    data = pd.read_csv(csv_file)
    for column in required_columns:
        if column not in data.columns:
            raise ValueError(f"Column '{column}' missing in the dataset")

    data = data[required_columns].dropna()

    # Encode the categorical 'land_accessibility' feature
    label_encoder = LabelEncoder()
    data['land_accessibility'] = label_encoder.fit_transform(data['land_accessibility'])
    joblib.dump(label_encoder, f'{model_type}_land_accessibility_encoder.joblib')

    # Scale latitude, longitude, and other features
    scaler = MinMaxScaler()
    features = ['latitude', 'longitude', 'land_cover', 'land_accessibility']
    data[features] = scaler.fit_transform(data[features])
    joblib.dump(scaler, f'{model_type}_scaler.joblib')

    X = data[features]
    y = data[required_columns[-1]]  # Target column

    # Split data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Build the deep learning model
    model = Sequential([
        Input(shape=(len(features),)),
        Dense(64, activation='relu'),
        Dense(32, activation='relu'),
        Dense(1, activation='linear')
    ])
    model.compile(optimizer=Adam(learning_rate=0.001), loss='mse', metrics=['mae'])

    # Train the model
    model.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=epochs, batch_size=batch_size)

    # Save the model
    model.save(f'{model_type}_dl_model.h5')
    print(f"Deep Learning model saved as {model_type}_dl_model.h5")

# Example usage
# Train solar DL model
train_dl_model('India_GeoSpatial_Data(Solar).csv', model_type='solar', epochs=100)

# Train wind DL model
train_dl_model('India_GeoSpatial_Data(Wind).csv', model_type='wind', epochs=100)

