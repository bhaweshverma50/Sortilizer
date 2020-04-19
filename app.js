var Barslider = document.getElementById("myRange");
var Speedslider = document.getElementById("speed");
var op = document.getElementById("value"); //output of bars
var Sop = document.getElementById("Svalue"); //output of speed
let n = 4; //initial value for no. of bars

op.innerHTML = Barslider.value;
Sop.innerHTML = -(Speedslider.value) + "ms";

Barslider.oninput = function () {
    op.innerHTML = this.value;
    bargen(n);
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
    $("#help").modal('show');
    $('#listel a').on('click', function () {
        var txt = ($(this).text());
        console.log(txt);
    })
})

let div;
let a = [];
let bar = document.getElementById("action");

arrgen();
bardel();
bargen(n);

function bargen(n) {
    for (i = 0; i < n; i++) {
        div = document.createElement('div');
        div.className = 'bar';
        div.style.height = a[i] * 2 + 'px';
        div.style.width = 50 + 'px';
        div.innerHTML = "<span class='rnum'>" + a[i] + "</span>";
        div.id = i;
        bar.appendChild(div);
    }
}

function bardel() {
    let delBar = document.getElementById("action");
    while (delBar.firstChild)
        delBar.removeChild(delBar.firstChild);
}

function arrgen() {
    n = Barslider.value;
    a = [];
    for (i = 0; i < n; i++) {
        r = Math.round(Math.random() * 100 * 2) + 2;
        a.push(r);
    }
    console.log(a);
    bardel();
    bargen(n);
}

function bubS() {
    console.log("true");
    console.log(f.offsetLeft);
}

anime({
    targets: '.bar0',
    translateY: [{
            value: 20,
            duration: 500
        },
        {
            value: 0,
            duration: 500
        }
    ],
    translateX: [{
        value: 108,
        duration: 800
    }]
})

anime({
    targets: '.bar2',
    translateY: [{
            value: 20,
            duration: 500
        },
        {
            value: 0,
            duration: 500
        }
    ],
    translateX: [{
        value: -108,
        duration: 800
    }]
})