rttv_frontend_test
==================

Websockets test for Real Time Telemetry Visualization

This is a simple example of a Node.js server, Websockets and D3. The real real time telemertry visualization app is 
expected to receive JSON data through Websockets and display it using text and D3. This test uses random numbers as 
a proof of concept showing the speed at which we'll be able to receive data from the server and the rocket.

To run you must have Node.js and the WS module installed. If Node is installed type: npm install ws, to install WS.

ws_test_server.js: This is the server, it encapsulates all the random test data, along with the current time, and 
sends it as JSON encoded data to the client through an initiated Websocket connection.

ws_test_client.html: This is the client, it parses the JSON data and outputs it as text. The acceleration is also 
displayed in a line graph.
