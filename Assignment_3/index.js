let http = require('http');
let fs = require('fs');
http.createServer(function(request , response) {
    response.writeHeader(200 , {"Content-Type" : "text/html"});
    response.write(`<h1> Hello World </h1>
    <p> This is Teja Guru</p>`);
    response.end();
}).listen(5000, () => console.log("Server is up at 5000"));

fs.writeFile('index.html',`<h1> Hello World </h1>
<p> This is Teja Guru</p>`, function(error , html) {
    console.log(error);
})