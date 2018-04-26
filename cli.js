const prompt = require('prompt'),
moment = require('moment'),
fs = require('fs'),
json = require('jsonfile');

const print = console.log,
date = moment().format(),
ymd = date.slice(0, 10),
hms = date.slice(11, 19);

// Take user input's

prompt.start();

prompt.get(['task'], function(err, result) {
	const task = result.task,
	end = strToJson(task, ymd, hms);
})

// Convert text to json

function strToJson(task, ymd, hms) {
	let data = {};
	data.time = hms;
	data.task = task;

	let file = `./data/${ymd}.json`;
	json.readFile(file, function(err, obj) {
	  if (obj === undefined) {
	  	let data = {};
	  	json.writeFile(file, data, function (err) {
	  		if (err) {
	  			console.error(err);
	  		} else {
		  		initJson(data)
		  		print('\nAn error occured.\nPlease retype your achivements.')
	  		}
	  	})
	  } else {
		let obj = require(`./data/${ymd}.json`),
		key = '';

		obj[key].push(data);

		writeToFile(JSON.stringify(obj));
	  }
	})

}

function initJson(o) {
	let obj = {},
	key = '';

	obj[key] = [];

	writeToFile(JSON.stringify(obj));
}

function writeToFile(data) {
	let file = `./data/${ymd}.json`;
	fs.writeFileSync(file, data, 'utf-8');
}
