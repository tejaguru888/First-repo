const http = require("http");
const httpServer = http.createServer(handleServer);
function handleServer(req, res) {
    if (req.url == "/welcome") {
        res.writeHead(200,
            {
                "Content-type": "text/plain"
            }
        )
        res.end("Welcome to dominos");
    }

    else if (req.url == "/contact") {
        res.writeHead(200,
            {
                "Content-type": "application/json"
            }
        )
        res.end(JSON.stringify({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        })
        );
    }
    else {
        res.writeHead(404);
        res.end("404 page not found");
    }
}
httpServer.listen(8081, () => { console.log("port is at 8081") });
module.exports = httpServer;