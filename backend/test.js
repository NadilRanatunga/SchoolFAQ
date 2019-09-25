const axios = require('axios');

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
      console.log(response.data.data)
    });