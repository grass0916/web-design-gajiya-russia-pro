"use strict";

// Native libraries below.
let fs  = require('fs');
// 3rd-party libraries below.
let pug = require('pug');

let html = pug.renderFile(__dirname + '/view/index.pug', {});

fs.writeFile(__dirname + '/index.html', html, (err) => {
	if (err) {
		return console.log(err);
	}
	console.log(html);
}); 
