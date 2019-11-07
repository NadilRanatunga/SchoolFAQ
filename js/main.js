$(document).ready(async function(){
    // axios({
    //     method: 'post',
    //     url: 'https://us1.prisma.sh/vatsal-baherwani/schoolfaq/dev',
    //     data: {query: "query hey { schools { id name threads { question answer { author text } } } }"},
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     responseType: "json",
    //   })
    //     .then(function (response) {
    //       console.log(response.data.data)
    //     });
    // $.ajax({
    //   type: "GET",
    //   url: 'https://us1.prisma.sh/vatsal-baherwani/schoolfaq/dev',
    //   data: "",
    //   success: function(s) {console.log(s);},
    //   dataType: "json"
    // });
    fetch("http://localhost:8080")
    .then(async function(data) {
        let json = await data.text();
        console.log(json);
        $("#SchoolList").append("<h6>"  + json + "</h6>");
    })
    // axios({
    //     method: 'get',
    //     url: 'localhost:8080',
    //     data: {query: "query hey { schools { id name threads { question answer { author text } } } }"},
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     responseType: "json",
    //   })
    //     .then(function (response) {
    //       console.log(response)
    //     });
}); 

// $.ajax({
//     type: "POST",
//     url: "wss://us1.prisma.sh/vatsal-baherwani/schoolfaq/dev",
//     data: {
//         query: "query hey { schools { id name threads { question answer { author text } } } }"
//     },
//     headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "POST" },
//     success: function( result ) {
//         console.log(result)
//     },
//     dataType: "json"
//   });
