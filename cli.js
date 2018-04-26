const prompt = require('prompt'),
moment = require('moment'),
fs = require('fs'),
json = require('jsonfile'),
mkdirp = require('mkdirp'),
homedir = require('homedir');

const print = console.log,
date = moment().format(),
// ymd = date.slice(0, 10),
ymd = '2018-04-28',
hms = date.slice(11, 19);

const FILE_PATH = homedir() + `/.typha/${ymd}.json`;

// Take user input's

initJson()

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
	json.readFile(FILE_PATH, function(err, obj) {
	  if (obj === undefined) {
	  	let data = {};
	  	json.writeFile(FILE_PATH, data, function (err) {
	  		if (err) {
	  			console.error(err);
	  		}
	  	})
	  } else {
		let obj = require(FILE_PATH),
		key = '';

		obj[key].push(data);

		writeToFile(JSON.stringify(obj));
	  }
	})

}

function initJson() {
	let obj = {},
	key = '';

	obj[key] = [];

	writeToFile(JSON.stringify(obj));
}

function writeToFile(data) {
	fs.writeFileSync(FILE_PATH, data, 'utf-8');
}
