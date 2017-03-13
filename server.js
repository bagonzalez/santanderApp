// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var request = require('request');



// Get our API routes
const api = require('./server/routes/api');

const app = express();


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);


const io  = require("socket.io")(server);

io.on('connection', function(client) { 
    console.log('Client connected...');

   client.on('join', function(data) { 
       //setInterval(function(){ client.emit('messages', " El equipo en primer lugar es : "); }, 5000);  

       http.get('http://localhost:3000/api/getPrimeroTabla', (res) => {
         res.setEncoding('utf8');
          let rawData = '';
          res.on('data', (chunk) => rawData += chunk);
          res.on('end', () => {
            try {
              let parsedData = JSON.parse(rawData);              
              client.emit('messages', '<div class="alert alert-info"><strong>Info!</strong> El equipo en primer lugar es : '+parsedData.team+'</div>' ); 
            } catch (e) {
              console.log(e.message);
            }
          });          
          
       });    

       http.get('http://localhost:3000/api/getUltimoTabla', (res) => {
         res.setEncoding('utf8');
          let rawData = '';
          res.on('data', (chunk) => rawData += chunk);
          res.on('end', () => {
            try {
              let parsedData = JSON.parse(rawData);              
              client.emit('ultimoEquipo', '<div class="alert alert-danger"><strong>Info!</strong> El equipo en ultimo lugar es : '+parsedData.team+'</div>' ); 
            } catch (e) {
              console.log(e.message);
            }
          });          
          
       });      
       
    });

     client.on('messages', function(data) {
           client.emit('broad', data);
           client.broadcast.emit('broad',data);
    });

});


/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
