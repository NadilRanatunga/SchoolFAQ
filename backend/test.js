const axios = require('axios');
var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  axios({
    method: 'post',
    url: 'https://us1.prisma.sh/vatsal-baherwani/schoolfaq/dev',
    data: {query: "query hey { schools { id name threads { question answer { author text } } } }"},
    headers: {
        'Content-Type': 'application/json'
    },
    responseType: "json",
  })
  .then(function (response) {
    res.send(response.data.data);
  })
  .catch(function(error) {
    console.log(error);
  });
});

app.listen(8080);