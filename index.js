const http = require('http');
// api.js ফাইলটি রিকয়ার করা হলো (যদি পরে ব্যবহার করতে চান)
const terabox = require('./api');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const response = {
        status: 'Success',
        message: 'Terabox API Server is Running properly!',
        info: 'Use your logic here to interact with api.js'
    };
    res.end(JSON.stringify(response));
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
