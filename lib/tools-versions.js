#!/usr/bin/env node

var exec = require('child_process').exec,
tools = {
	npm: 'npm', 
	ruby: 'ruby', 
	node: 'node', 
	bower: 'bower', 
	yo: 'yo'
};

var ran = function(vprefix, vcommand) {
	exec(vcommand,  function (error, stdout, stderr) {
	    console.log(vprefix+': ' + stdout);
	    //console.log('stderr: ' + stderr);
	    if (error !== null) {
	      console.log('exec error: ' + error);
	    }
	});	
};
for (var tool in tools) {
	vprefix = tools[tool]+' version';
	vcommand = tools[tool]+' --version';
	ran(vprefix, vcommand)
};


