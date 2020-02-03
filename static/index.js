var slider = document.getElementsByClassName("slider");

for (var i = 0; i < 3; i++) {
    slider[i].addEventListener("click", function () {
        sendRequest(slider[0].value, slider[1].value, slider[2].value)
    });
}

function sendRequest(r, g, b) {
    var xhr = new XMLHttpRequest();
    var url = "lights";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify({
        "r": r,
        "g": g,
        "b": b
    });
    xhr.send(data);
}