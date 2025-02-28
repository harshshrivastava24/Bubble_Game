var time = 60;
function timeRun() {
    var timer = setInterval(function () {

        if(time>0){
            time--;
            document.querySelector("#timeval").innerHTML = time;
        }

        else {
            clearInterval(timer);
        }
        
    }, 1000)
}

function hitval() {
    var random_num = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent = random_num; 
}

function makeBubble() {
    var bubble = '';

for (var i = 1; i<153; i++) {
    var random_num = Math.floor(Math.random()*10);

    bubble += `<div class="bubble">${random_num}</div>`
}

document.querySelector("#pbtm").innerHTML = bubble
}

makeBubble();
timeRun();
hitval();