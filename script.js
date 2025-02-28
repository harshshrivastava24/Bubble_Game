var bubble = '';

for (var i = 1; i<153; i++) {
    var random_num = Math.floor(Math.random()*10);

    bubble += `<div class="bubble">${random_num}</div>`
}

document.querySelector("#pbtm").innerHTML = bubble