var http = require('http');
var request = require('request');


function onRequest(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello World');
	response.write(request.url);
	response.end();
}

http.createServer(onRequest).listen(8080);
console.log('Server has started.');





request.get(
	'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160811T141746Z.9de4b56a7523dde0.08ea8b0e395f6708b8bbc67f9b945c63f9e1b8e9',

	function(error, response, body) {
		if (error) {
			console.error(error);
		} else {
			console.log(body);
			console.log(response.statusCode);
		}
	}


);