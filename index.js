const express = require('express');
const app = express();
const port = 3100;

var wfs     = require('water-flow-sensor')
  , sensor  = new wfs(27, 'YF-S201', wfsCb)

// Callback
function wfsCb(res) {
  console.info(`${res.pin} | ${res.model} | ${res.flow} L/m | ${res.volume} L | ${res.pulses}`)
}

// Access to status and data
console.info(`Sensor is running: ${sensor.isRunning}`)
console.info(`Flow rate: ${sensor.flow} L/min`)
console.info(`Volume: ${sensor.volume} L`)


app.get('/', (req, res) => {
	console.log('YOOOO');
		res.json({flow: sensor.flow, volume: sensor.volume, running: sensor.isRunning});
});

app.listen(port, () => {console.log('Listening!')});
