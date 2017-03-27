var http = require('http');
var arquivo = require('fs');

var server = http.createServer(function (request, response) {
	if(request.url == '/contatos'){
		arquivo.readFile('./contatos.json', function (err, data){
			response.writeHead(200, {"Content-type": "text/json"});
			if(err) response.write('Arquivo não encontrado');					
			response.write(data);
			response.end();		
		});
	} else {
		response.writeHead(200, {"Content-type": "text/html"});
		response.end();
	}
				
});


server.listen(3000, function(){
	console.log('Servidor esta rodando em localhost:3000...');
});

