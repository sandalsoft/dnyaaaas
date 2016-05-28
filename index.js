// Import the interface to Tessel hardware
var tessel = require('tessel');

var child_process = require('child_process');



// var RedisServer = require('redis-server');
// var redisServerInstance = new RedisServer(6379);
 
// redisServerInstance.open(function (error) {
 
//   if (error) {
//     throw new Error(error);
//   }
 

 // Run dns server

 // exec: spawns a shell.
child_process.exec('./node_modules/dns/bin/dns', function(error, stdout, stderr){
	console.log(stdout);
});

  // The server is now up and running on port 6379, 
  // you can now create a client to connect to the 
  // server 


 
// });