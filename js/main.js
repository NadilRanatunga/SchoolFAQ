$(document).ready(async function(){
    fetch("http://localhost:8080")
    .then(async function(data) {
        let json = await data.json();
        for (let i = 0; i < json.schools.length; i++) {
            let school = json.schools[i];
            $("#SchoolList").append("<div><a href='School.html?id=" + school.id + "'id=' " + school.id + "'>"  + school.name + " (" + school.threads.length + " threads)" + "</a></div>");
        }
        
    })
}); 