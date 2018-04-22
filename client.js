var uuid = "";

function joingame() {
    var url = "https://gentle-dusk-59337.herokuapp.com/join";
    var method = "POST";
    var data = JSON.stringify({
        name: document.getElementById("name").innerText
    });
    var request = new XMLHttpRequest();
    request.responseType = "json";

    request.onload = function() {
        var data = request.response;
        uuid = data["player_id"];
        document.getElementById("uuid").innerHTML = uuid;
        gethand();
    }
    request.open(method, url, true);

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(data);
}

function gethand() {
    var url = "https://gentle-dusk-59337.herokuapp.com/hand";
    var method = "POST";
    var data = JSON.stringify({
        player_id: uuid
    });
    var request = new XMLHttpRequest();
    request.responseType = "json";

    request.onload = function() {
        var data = request.response;
        for (var card in data["hand"]) {
            var node = document.createElement("LI");
            var textnode = document.createTextNode(data["hand"][card]);
            node.appendChild(textnode);
            document.getElementById("hand").appendChild(node);
        }
    }
    request.open(method, url, true);

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(data);
}
