
var express = require('express')
var app = express()

var http = require('http');
var options = {
  host: '169.254.128.249',
  path: '/',
  port: 3100
}

var snsrRunning = false;
var parsedData = {};
let timer = null;
const getRequest = () => {
    http.get(options, function(res) {
        res.on('data', (data) => {
            const realData = data.toString();
            parsedData = JSON.parse(realData);
            if(!snsrRunning && parsedData.running)
                 snsrRunning = true;
            if(snsrRunning && !parsedData.running){
                console.log('final volume ' + parsedData.volume + ' gal')
                clearInterval(timer);
            }
        });
    });
    
}
timer = setInterval(getRequest, 500)
