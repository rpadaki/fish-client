var uuid = "";

function joingame() {
    var url = "http://gentle-dusk-59337.herokuapp.com/join";
    var method = "POST";
    var data = json.stringify({
        name: document.getElementById("name").innerText
    });
    var request = new XMLHttpRequest();
    request.responseType = "json";

    request.onload = function() {
        var data = request.response;
        uuid = data["player_id"];
        document.getElementById("hand").innerhtml = uuid;
    }
    request.open(method, url, true);

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(data);
}

function gethand() {
    var url = "http://gentle-dusk-59337.herokuapp.com/hand";
    var method = "POST";
    var data = json.stringify({
        player_id: uuid
    });
    var request = new XMLHttpRequest();
    request.responseType = "json";

    request.onload = function() {
        var data = request.response;
        console.log(data);
    }
    request.open(method, url, true);

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(data);
}
