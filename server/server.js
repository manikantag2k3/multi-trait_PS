const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { predict } = require("./predict");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/predict", async (req, res) => {
    const { sequence } = req.body;
    console.log(sequence);
  try {
    const predictions = await predict(sequence);
    res.json(predictions);
  } catch (error) {
    res.status(500).send("Error making predictions");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
