const again = document.getElementById("play-again");
again.onclick = () => {
    location.href = "game.html"
};

const home = document.getElementById("home");
home.onclick = () => {
    location.href = "index.html"
};

let name = localStorage.getItem("name")
var nameBox = document.getElementById("name-box");
nameBox.innerHTML=name;
