import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Ensure you have the necessary CSS

function App() {
  const [dnaSequence, setDnaSequence] = useState("");
  const [predictions, setPredictions] = useState([]);

  const handlePredict = async () => {
    try {
      const response = await axios.post("http://localhost:5000/predict", {
        sequence: dnaSequence,
      });
      setPredictions(response.data.randomForest);
    } catch (error) {
      console.error("Error making prediction:", error);
    }
  };

  return (
    <div className="App">
      <h1>Multi Trait Predictor for Wheat</h1>
      <div className="input-container">
        <textarea
          value={dnaSequence}
          onChange={(e) => setDnaSequence(e.target.value)}
          placeholder="Enter DNA Sequence"
        />
        <button onClick={handlePredict}>Predict</button>
      </div>
      <h2>Predictions</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Trait</th>
              <th>Prediction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DH_Pooled</td>
              <td>{predictions[0]}</td>
            </tr>
            <tr>
              <td>GFD_Pooled</td>
              <td>{predictions[1]}</td>
            </tr>
            <tr>
              <td>GNPS_Pooled</td>
              <td>{predictions[2]}</td>
            </tr>
            <tr>
              <td>GWPS_Pooled</td>
              <td>{predictions[3]}</td>
            </tr>
            <tr>
              <td>PH_Pooled</td>
              <td>{predictions[4]}</td>
            </tr>
            <tr>
              <td>GY_Pooled</td>
              <td>{predictions[5]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
