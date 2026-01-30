const http = require('http');                                                      // Import the HTTP module
const today = require('./today');                                                  // Import the 'today' module

const requestListener = function (req, res) {                                      // Define the request listener function
    res.writeHead(200);                                                            // Set the status code to 200
    let dateVal = today.getDate();                                                 // Get the current date from the 'today' module
    let greeting = "It is still not morning";                                      // Determine the appropriate greeting based on the current time
    if (dateVal.getHours() > 6 && dateVal.getHours() < 12) {
        greeting = "Good morning!";
    } else if (dateVal.getHours() >= 12 && dateVal.getHours() < 18) {
        greeting = "Good afternoon!";
    } else if (dateVal.getHours() >= 18 && dateVal.getHours() < 21) {
        greeting = "Good evening!";
    } else if (dateVal.getHours() >= 21 && dateVal.getHours() < 24) {
        greeting = "Good night!";
    }
    res.end(`Hello, ${greeting}`);                                                 // Send the response with the appropriate greeting
};

const port = 8080;                                                                 // Define the port number

const server = http.createServer(requestListener);                                 // Create an HTTP server using the request listener function

server.listen(port);                                                               // Start the server and listen on the specified port
console.log('Server listening on port: ' + port);
