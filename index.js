const prompt = require('prompt'),
moment = require('moment');

const print = console.log,
date = moment().format(),
ymd = date.slice(0, 10),
hms = date.slice(11, 19);

// Take user input's

prompt.start();

prompt.get(['task'], function(err, result) {
	const task = result.task,
	end = strToJson(task, ymd, hms);

	print(JSON.stringify(end))
})

// Functions

function strToJson(task, ymd, hms) {
	let data = {};
	data.task = task,
	data.ymd = ymd,
	data.hms = hms;

	return data;
}
