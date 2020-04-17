var Barslider = document.getElementById("myRange");
var Speedslider = document.getElementById("speed");
var op = document.getElementById("value");
var Sop = document.getElementById("Svalue");

op.innerHTML = Barslider.value;
Sop.innerHTML = -(Speedslider.value) + "ms";

Barslider.oninput = function () {
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

Speedslider.addEventListener("mousemove", function () {
    var x = Speedslider.value;
    x = x / 2;
    var color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '%, rgb(214, 214, 214)' + x + '%)';
    Speedslider.style.background = color;
})

$(document).ready(function () {
    $('#listel a').on('click', function () {
        var txt = ($(this).text());
        console.log(txt);
    })
})

function bubS() {
    console.log("true");
}