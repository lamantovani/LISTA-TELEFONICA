var get = function (url, callback){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function (){
		if(xhr.readyState === 4){
			callback(chr.responseText, xhr.status);
		}
	};
	xhr.open('GET', url);
	xhr.send(null);
};

get("http://localhost:3000/contatos", function (data){
	document.getElementById("ajax").innerHTML = data;
});