const http = require('http');                                                      // Import HTTP module
const today = require('./today');                                                  // Import 'today' module

const requestListener = function (req, res) {                                      // Define request listener function
    res.writeHead(200);                                                            // Set status code to 200
    let dateVal = today.getDate();                                                 // Get current date from 'today'
    let azTime = dateVal.toLocaleTimeString("en-US");
    let dateString = dateVal.toLocaleDateString('en-US', {                         // Get current date format 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    });
    let hour = dateVal.getHours();
    let greeting = "";                                                             // Determine appropriate greeting based on current time
    if (dateVal.getHours() > 6 && dateVal.getHours() < 12) {
        greeting = "Good morning!";
    } else if (dateVal.getHours() >= 12 && dateVal.getHours() < 18) {
        greeting = "Good afternoon!";
    } else if (dateVal.getHours() >= 18 && dateVal.getHours() < 21) {
        greeting = "Good evening!";
    } else if (dateVal.getHours() >= 21 && dateVal.getHours() < 24) {
        greeting = "Good night!";
    }
    res.end(`${greeting} Today is ${dateString} and the time is ${azTime}`);       // Send response with appropriate greeting
};

const port = 8080;                                                                 // Define port number

const server = http.createServer(requestListener);                                 // Create HTTP server

server.listen(port);                                                               // Start server and listen on specified port
console.log('Server listening on port: ' + port);
