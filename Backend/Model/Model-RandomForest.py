import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer

# Load the dataset (replace with your file path)
dataset = pd.read_csv('India_GeoSpatial_Data(Solar).csv')

# Preprocessing: Handling categorical data (e.g., land accessibility)
# Assume the column 'land_accessibility' contains "low", "medium", "high"
categorical_feature = 'land_accessibility'  # Replace with the actual column name
features = ['latitude', 'longitude', categorical_feature]  # Define feature columns
target = 'solar_suitability_score'  # Replace with the actual target column name

X = dataset[features]
y = dataset[target]

# Encode the categorical feature using OneHotEncoder
column_transformer = ColumnTransformer(
    transformers=[('encoder', OneHotEncoder(), [categorical_feature])], remainder='passthrough'
)
X_encoded = column_transformer.fit_transform(X)

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_encoded, y, test_size=0.2, random_state=0)

# Train the Random Forest Regression model
regressor = RandomForestRegressor(n_estimators=10, random_state=0)
regressor.fit(X_train, y_train)

# Define the region of interest (latitude and longitude bounds for Bengaluru)
lat_min, lat_max = 12.7, 13.1  # Approx latitude bounds for Bengaluru
lon_min, lon_max = 77.5, 77.8  # Approx longitude bounds for Bengaluru
accessibility_levels = ['Low', 'Medium', 'High']  # Categorical values

# Generate a grid of latitude, longitude, and land accessibility points
latitudes = np.linspace(lat_min, lat_max, num=50)  # 50 points between lat_min and lat_max
longitudes = np.linspace(lon_min, lon_max, num=50)  # 50 points between lon_min and lon_max

# Create all combinations of latitude, longitude, and accessibility levels
grid = []
for lat in latitudes:
    for lon in longitudes:
        for access in accessibility_levels:
            grid.append([lat, lon, access])

grid = pd.DataFrame(grid, columns=['latitude', 'longitude', categorical_feature])

# Encode the categorical feature in the grid
grid_encoded = column_transformer.transform(grid)

# Predict scores for all points in the grid using the trained model
predicted_scores = regressor.predict(grid_encoded)

# Combine the grid with the predicted scores
grid['predicted_score'] = predicted_scores

# Get the top 5 latitude, longitude, and accessibility pairs with the highest predicted scores
top_5 = grid.nlargest(5, 'predicted_score')

# Display the top 5 results
print("Top 5 Latitude, Longitude, Accessibility with Predicted Scores:")
print(top_5)
