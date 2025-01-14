const { exec } = require('child_process');

/**
 * Cypress Plugins File
 * 
 * This file is used to load plugins and define custom tasks for Cypress.
 * The example below includes a task to start the backend server for testing.
 */

module.exports = (on, config) => {
  // Add custom tasks
  on('task', {
    /**
     * Custom task to start the backend server.
     * Ensure your backend server is started properly before Cypress tests run.
     */
    startServer() {
      return new Promise((resolve, reject) => {
        const server = exec('npm run start', (error, stdout, stderr) => {
          if (error) {
            console.error('Error starting server:', error);
            reject(error);
          } else {
            console.log('Server started successfully:', stdout);
            resolve(stdout);
          }
        });

        server.stdout.on('data', (data) => {
          console.log(`[SERVER OUTPUT]: ${data}`);
        });

        server.stderr.on('data', (data) => {
          console.error(`[SERVER ERROR]: ${data}`);
        });
      });
    },
  });

  // Return the updated configuration
  return config;
};
