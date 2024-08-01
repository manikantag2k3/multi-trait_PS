const { exec } = require("child_process");
const path = require("path");

const runPythonScript = (scriptPath, sequence) => {
  return new Promise((resolve, reject) => {
    console.log(`Running script: ${scriptPath} with sequence: ${sequence}`);
    exec(`python ${scriptPath} ${sequence}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing script: ${scriptPath}`, stderr);
        reject(`Error: ${stderr}`);
      } else {
        console.log(`Script output: ${stdout}`);
        resolve(JSON.parse(stdout));
      }
    });
  });
};

const predict = async (sequence) => {
  const rfScriptPath = path.join(__dirname, "rf.py");

  console.log(`Predicting with sequence: ${sequence}`);
  console.log(`Random Forest script path: ${rfScriptPath}`);

  try {
    const randomForestPredictions = await runPythonScript(
      rfScriptPath,
      sequence
    );
    console.log(
      `Random Forest predictions: ${JSON.stringify(randomForestPredictions)}`
    );

    return {
      randomForest: randomForestPredictions,
    };
  } catch (error) {
    console.error(`Prediction error: ${error}`);
    throw new Error(`Prediction error: ${error}`);
  }
};

module.exports = { predict };
