function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

$(document).ready(async function(){
    let id = getParameterByName("id");
    fetch("http://localhost:8080/"+id)
    .then(async function(data) {
        let json = await data.json();
        let school = json.schools[0];
        $("#Title").append(school.name);
        for (let i = 0; i < school.threads.length; i++) {
            let thread = school.threads[i];
            //make thread div
            for(let i = 0; i < thread.answer.length; i++) {
                let answer = thread.answer[i]
                //make answer stuffs
            }
        }
    })
}); 