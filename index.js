const express = require('express');
const app = express();
const port = 3100;

var wfs     = require('water-flow-sensor')
  , sensor  = new wfs(27, 'YF-S201', wfsCb)

// Callback
function wfsCb(res) {
  console.info(`${sensor.isRunning} | ${res.flow} L/m | ${res.volume} L | Flow rate: ${0.2641720524*sensor.flow} gal/min | Volume: ${0.2641720524*sensor.volume} gal`)
}

// Access to status and data
console.info(`Sensor is running: ${sensor.isRunning}`)
console.info(`Flow rate: ${sensor.flow} L/min`)
console.info(`Volume: ${sensor.volume} L`)
console.info(`Volume: ${0.2641720524*sensor.volume} gal`)


app.get('/', (req, res) => {
	res.json({flow: sensor.flow, volume: sensor.volume, running: sensor.isRunning});
});
app.listen(port, () => {console.log('Listening!')});
