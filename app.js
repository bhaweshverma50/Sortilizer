var Barslider = document.getElementById("myRange");
var Speedslider = document.getElementById("speed");
var op = document.getElementById("value"); //output of bars
var Sop = document.getElementById("Svalue"); //output of speed
let n = 4; //initial value for no. of bars
let s;
var txt = '';

op.innerHTML = Barslider.value;
Sop.innerHTML = -(Speedslider.value) + "ms";

Barslider.oninput = function () {
    op.innerHTML = this.value;
    bardel();
    arrgen(this.value);
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

$(document).ready(function () {
    $("#help").modal('show');
    $('#listel a').on('click', function () {
        txt = ($(this).text());
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
        div.className = 'bar ' + i;
        div.style.height = a[i] * 3 + 'px';
        div.style.width = 50 + 'px';
        if (n < 56)
            div.innerHTML = "<span class='rnum'>" + a[i] + "</span>";
        div.id = 'b' + i;
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
        r = Math.round(Math.random() * 100 * 2) + 6;
        a.push(r);
    }
    console.log(a);
    bardel();
    bargen(n);
}

function checkAlgo() {
    if (txt == 'Bubble Sort') {
        bubS(a);
        console.log(a);
    }
    if (txt == 'Quick Sort') {
        quickS(a, 0, n - 1);
        console.log(a);
    }
    if (txt == 'Merge Sort') {
        mergeS();
        console.log("merge");
    }
    if (txt == 'Insertion Sort') {
        insertionS();
        console.log("insertion");
    }
    if (txt == 'Selection Sort') {
        selectionS();
        console.log("selection");
    }
    if (txt == '') {
        $(document).ready(function () {
            $("#noAlgo").modal('show');
        })
    }
}

var set = document.querySelectorAll('.bar');

function swap(arr, first_Index, second_Index) {
    var bar1 = set[first_Index];
    var bar2 = set[second_Index];
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
    swapAnimation(bar1, bar2);
}

function swapAnimation(b1, b2) {
    var pos1 = b1.offsetLeft;
    var pos2 = b2.offsetLeft;
    anime({
        targets: b1,
        translateX: [{
            value: pos2 - pos1,
            duration: 1000,
        }]
    })
    anime({
        targets: b2,
        translateX: [{
            value: -(pos2 - pos1),
            duration: 1000,
        }]
    })
}

function bubS(arr) {
    var len = arr.length,
        i, j, stop;
    for (i = 0; i < len; i++) {
        for (j = 0, stop = len - i; j < stop; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickS(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickS(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickS(items, index, right);
        }
    }
    return items;
}