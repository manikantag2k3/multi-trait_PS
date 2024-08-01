# Multi-Trait Wheat Prediction

## Overview

This project aims to develop a web application that predicts multiple traits (such as grain weight, plant height, yield, etc.) of wheat plants based on their genomic data. The application leverages machine learning and deep learning models to provide accurate predictions, offering a valuable tool for researchers and agronomists.

## Features

- **Trait Prediction**: Predicts various wheat traits using genomic data.
- **Machine Learning Models**: Integrates multiple models to enhance prediction accuracy.
- **User-Friendly Interface**: Built with a React frontend for ease of use.
- **Node.js Backend**: Manages data processing and model integration.

## Project Structure

- **Frontend**: React-based user interface for data input and result visualization.
- **Backend**: Node.js server for handling requests, managing data, and integrating machine learning models.
- **Models**: Machine learning and deep learning models trained on wheat genomic data.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/annapurnameghana/Multi-Trait-Wheat-Prediction.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Multi-Trait-Wheat-Prediction
   ```
3. Install the dependencies:
   - For the backend:
     ```bash
     cd server
     npm install
     ```
   - For the frontend:
     ```bash
     cd client
     npm install
     ```

## Usage

1. Start the backend server:
   ```bash
   cd server
   npm start
   ```
2. Start the frontend application:
   ```bash
   cd client
   npm start
   ```
3. Access the application in your browser at `http://localhost:3000`.

## Model Training and Deployment

- The models used in this project are trained on wheat genomic data.
- The trained models are integrated into the backend for real-time prediction.

## Future Work

- **Model Improvement**: Continuously improve the accuracy of the prediction models.
- **Additional Traits**: Expand the application to predict more traits.
- **User Authentication**: Implement user authentication for secure access.
