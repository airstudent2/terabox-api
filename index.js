// index.js
const http = require('http');
const terabox = require('./api'); // নিশ্চিত করুন api.js ফাইলটি আছে

module.exports = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    
    const response = {
        status: 'Success',
        message: 'Terabox API Server is Running properly!',
        info: 'Use your logic here to interact with api.js'
    };
    
    res.end(JSON.stringify(response));
};
