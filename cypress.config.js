const { defineConfig } = require("cypress");
const { spawn } = require("child_process");

let server;
let baseUrl;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Setup for code coverage
      require('@cypress/code-coverage/task')(on, config);

      // Task to start the server
      on("task", {
        startServer() {
          return new Promise((resolve, reject) => {
            // Check if the server is already running
            if (server) {
              resolve(baseUrl);
              return;
            }

            // Start the server process using spawn
            server = spawn("node", ["-r", "nyc", "index-test.js"]);
            
            server.stdout.on("data", (data) => {
              console.log(data.toString()); // Log the server output for debugging
              if (data.toString().includes("Demo project at:")) {
                const baseUrlPrefix = "Demo project at: ";
                const startIndex = data.toString().indexOf(baseUrlPrefix);
                if (startIndex !== -1) {
                  baseUrl = data.toString().substring(startIndex + baseUrlPrefix.length).trim();
                  resolve(baseUrl);
                }
              }
            });

            server.stderr.on("data", (data) => {
              reject(data);
            });

            // Timeout to handle if the server doesn't start
            setTimeout(() => {
              if (!baseUrl) {
                reject("Server failed to start or didn't output the expected base URL.");
              }
            }, 10000); // 10-second timeout for server start
          });
        },
        // Task to stop the server
        stopServer() {
          if (server) {
            server.kill();
            server = null;
          }
          return null;
        },
      });

      // Return the updated config
      return config;
    },

    // Set baseUrl after the server has started or fallback to localhost
    baseUrl: baseUrl || "http://localhost:3000", // Default to localhost if baseUrl isn't set yet
  },
});
