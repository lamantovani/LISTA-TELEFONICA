var express = require('express');
var app = express();
var arquivo = require('fs');

app.get('/', function (request, response){
	response.send('Welcome to API');	
});

var contatos = arquivo.readFileSync("contatos.json");

//arquivo.readFile('./contatos.js', function (error, data){
	//if(error) throw error;	
	//contatos = data;	
//});

app.get('/contatos', function (request, response, next){	
	response.write(contatos);	
	response.end();	
});

app.listen(9000, function(){
	console.log('Servidor esta rodando no localhost:9000...');
});
