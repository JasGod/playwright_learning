const { exec } = require("child_process");

exec(
  "npx allure generate ./allure-results --clean && npx allure open ./allure-report",
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);
