var Barslider = document.getElementById("myRange");
var Speedslider = document.getElementById("speed");
var op = document.getElementById("value"); //output of bars
var Sop = document.getElementById("Svalue"); //output of speed
let n = 4; //initial value for no. of bars

op.innerHTML = Barslider.value;
Sop.innerHTML = -(Speedslider.value) + "ms";

Barslider.oninput = function barval() {
    op.innerHTML = this.value;
}

Speedslider.oninput = function () {
    Sop.innerHTML = -(this.value) + "ms";
}

Barslider.addEventListener("mousemove", function () {
    var x = Barslider.value;
    x = x / 2;
    var color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '%, rgb(214, 214, 214)' + x + '%)';
    Barslider.style.background = color;
})

// Speedslider.addEventListener("mousemove", function () {
//     var y = -(Speedslider.value);
//     y = y / 15;
//     var color = 'linear-gradient(90deg, rgb(117, 252, 117), rgb(255, 0, 0))';
//     Speedslider.style.background = color;
//     console.log(Speedslider.value);
// })

$(document).ready(function () {
    $('#listel a').on('click', function () {
        var txt = ($(this).text());
        console.log(txt);
    })
})

let div;
let a = [];
let bar = document.getElementById("action");

bargen(n);

function bargen(n) {
    for (i = 0; i < n; i++) {
        div = document.createElement('div');
        div.className = 'bar' + i;
        div.style.height = 30 * 2 + 'px';
        div.style.width = 50 + 'px';
        div.id = i;
        bar.appendChild(div);
    }
}

function bubS() {
    console.log("true");
    console.log(f.offsetLeft);
}

anime({
    targets: '.bar0',
    translateY: [{
            value: 200,
            duration: 1000
        },
        {
            value: 0,
            duration: 500
        }
    ],
    translateX: [{
        value: 108,
        duration: 2000
    }]
})

anime({
    targets: '.bar2',
    translateY: [{
            value: 200,
            duration: 1000
        },
        {
            value: 0,
            duration: 500
        }
    ],
    translateX: [{
        value: -108,
        duration: 2000
    }]
})