var Barslider = document.getElementById("myRange");
var Speedslider = document.getElementById("speed");
var op = document.getElementById("value"); //output of bars
var Sop = document.getElementById("Svalue"); //output of speed
let n = 4; //initial value for no. of bars
let speed;
var txt = '';
let divID = [];
let divOffset = [];
let divOffsetDiff = [];



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

speed = -(Speedslider.value);


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
        var a = document.getElementById('view');
        a.innerHTML = txt;
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
        divID.push(i);
    }
    console.log(a);
    bardel();
    bargen(n);
}


var set = document.querySelectorAll('.bar');

for (i = 0; i < n; i++)
    divOffset[i] = set[i].offsetLeft, divOffsetDiff[i] = 0;


function swapAnimation(i1, i2) {
    var divDiff = divOffset[i2] - divOffset[i1];
    divOffsetDiff[i1] = divOffsetDiff[i1] + divDiff;
    divOffsetDiff[i2] = divOffsetDiff[i2] - divDiff;
    let temp = divOffset[i1];
    divOffset[i1] = divOffset[i2];
    divOffset[i2] = temp;


    const anime1 = anime.timeline({
            easing: 'easeInOutSine',
            dealy: anime.stagger(50),
            loop: false,
            autoplay: true,
            targets: set [i1],
            //duration: speed / 2,
        })

        .add({
            translateX: divOffsetDiff[i1],
        })

    const anime2 = anime.timeline({
            easing: 'easeInOutSine',
            dealy: anime.stagger(50),
            loop: false,
            autoplay: true,
            targets: set [i2],
            //duration: speed / 2,
        })

        .add({
            translateX: divOffsetDiff[i2],
        })
}

function checkAlgo() {
    if (txt == 'Bubble Sort') {
        setTimeout(function () {
            bubS(a);
            console.log(a);
        }, speed);
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
        selectionS(a);
        console.log("selection");
    }
    if (txt == '') {
        $(document).ready(function () {
            $("#noAlgo").modal('show');
        })
    }
}



function swap(arr, first_Index, second_Index) {
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
    swapAnimation(divID[first_Index], divID[second_Index]);
    temp = divID[first_Index];
    divID[first_Index] = divID[second_Index];
    divID[second_Index] = temp;
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


function selectionSort(items) {

    var len = items.length,
        min;

    for (i = 0; i < len; i++) {

        //set minimum to this position
        min = i;

        //check the rest of the array to see if anything is smaller
        for (j = i + 1; j < len; j++) {
            if (items[j] < items[min]) {
                min = j;
            }
        }

        //if the minimum isn't in the position, swap it
        if (i != min) {
            swap(items, i, min);
        }
    }

    return items;
}