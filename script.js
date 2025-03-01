var time = 60;
var score = 0;
var random_hit;

function changeScore() {
    document.querySelector("#score").textContent = score;
}

function timeRun() {
    var timer = setInterval(function () {

        if(time>0){
            time--;
            document.querySelector("#timeval").innerHTML = time;
        }

        else {
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML = `<h2>Game Over!</h2>`
        }
        
    }, 1000)
}

function hitval() {
    random_hit = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent = random_hit; 
}

function makeBubble() {
    var bubble = '';

for (var i = 1; i<153; i++) {
    var random_num = Math.floor(Math.random()*10);

    bubble += `<div class="bubble">${random_num}</div>`
}

document.querySelector("#pbtm").innerHTML = bubble
}

document.querySelector("#pbtm").addEventListener("click", function(details) {
    var selected = details.target.textContent;

    if(selected == random_hit) {
        score += 10;
        changeScore();
        makeBubble();
        hitval();
    }
})

makeBubble();
timeRun();
hitval();
changeScore();