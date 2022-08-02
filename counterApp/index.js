let counter = document.getElementById("count-el");
let btn = document.getElementById("increment-btn");

let count = 0;

function incerementCount() {
    count += 1;
    counter.innerText = count;
}

btn.addEventListener('click', incerementCount);

let saveBtn = document.getElementById("save-btn");
let display = document.getElementById("output");

function save() {
    let countStr = + count + " - ";
    display.textContent += countStr;
    count = 0
    counter.innerText = count;
}

saveBtn.addEventListener("click", save);