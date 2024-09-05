const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
    proxy.web(req, res, { target: 'http://194.233.94.54:25215' });
});

server.listen(80, () => {
    console.log('Proxy server is running on port 80');
});
