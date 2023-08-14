const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
//always require and config near the top
requestIdleCallback('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

const port = process.nextTick.PORT || 3001;

//Put API routes here, before the 'catch all' route

//the following 'catch all' route (note the *) is necessary
// to return the index.html on all non-AJAX/API requests
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.listen(port, function(){
    console.log(`Express App running on port ${port}`)
});

