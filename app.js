let numb = document.getElementById("num");
let rand = document.getElementsByClassName("rnum");
let a = [];
let div;
let n = numb.innerText;
let r = rand.innerText;
arrGen(n);
barGen(n);

function barGen(k, b1, b2) {
    let barWidth = 1;
    if (k <= 17) {
        barWidth = 80;
    } else if (k > 17 && k <= 27) {
        barWidth = 50;
    } else if (k > 27 && k <= 42) {
        barWidth = 30;
    } else if (k > 42 && k <= 60) {
        barWidth = 20;
    } else if (k > 60 && k <= 100) {
        barWidth = 10;
    } else if (k > 100 && k <= 150) {
        barWidth = 5;
    } else if (k > 150 && k <= 250) {
        barWidth = 2;
    }
    for (i = 0; i < k; i++) {
        div = document.createElement('div');
        div.className = "bar";
        div.style.height = a[i] * 2 + 'px';
        div.style.width = barWidth + 'px';
        div.id = a[i];
        // while (barWidth >= 20)
        if (barWidth >= 20)
            div.innerHTML = "<span class='rnum'>" + a[i] + "</span>";
        let bar = document.getElementById("action");
        if (i == b1) {
            div.style.backgroundColor = "green";
        }
        if (i == b2) {
            div.style.backgroundColor = "blue";
        }
        bar.appendChild(div);
        console.log(div);
        console.log(b1, b2);
    }
    console.log(a);
}

function arrGen(k) {
    for (i = 0; i < k; i++) {
        //r = Math.round(Math.random() * 177) + Math.round(Math.random() * 17);
        r = Math.round(Math.random() * 100 * 2) + 2;
        a.push(r);
    }
}

function delArr() {
    a = [];
}

function barDel() {
    let delB = document.getElementById("action");
    while (delB.firstChild)
        delB.removeChild(delB.firstChild);
}

function incdec(i) {
    console.log(r);
    if (i == 1 && n < 220) {
        n++;
        clearInterval(x);
        delArr();
        arrGen(n);
        barDel();
        barGen(n);
    } else if (i == -1 && n == 4) {
        n = 220;
        clearInterval(x);
        delArr();
        arrGen(n);
        barDel();
        barGen(n);
    } else if (i == -1) {
        n--;
        clearInterval(x);
        delArr();
        arrGen(n);
        barDel();
        barGen(n);
    }
    numb.innerText = n;
    rand.innerText = r;
}

function cl(j) {
    if (j == 0) {
        n = 4;
        numb.innerText = n;
        delArr();
        arrGen(n);
        barDel();
        barGen(4);
        clearInterval(x);
        console.log(n);
    }

}

function bubS() {
    let s = 10;
    x = setInterval(function () {
        console.log("sort");
        bubbleSort(a);
    }, s);
    barDel();
    barGen(n);
    console.log(a);
}

function swap(arr, first_Index, second_Index) {
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
    barDel();
    barGen(n, first_Index, second_Index);
}

function bubbleSort(arr) {

    var len = arr.length,
        i, j, stop;

    for (i = 0; i < len; i++) {
        for (j = 0, stop = len - i; j < stop; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                return arr;
            }
        }
    }
    clearInterval(x);
}