if(!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 14);
}

const counter = localStorage.getItem('counter');
const $counter = document.querySelector("#contador");
const $increment = document.querySelector("#increment");

function incrementCounter() {
    const tempCounter = localStorage.getItem('counter');
    const incrementedCounter = parseInt(tempCounter, 10) + 1;
    localStorage.setItem('counter', incrementedCounter)
    writeCounter();
}

function writeCounter() {
    $counter.innerHTML = `${counter}`;
}

$increment.addEventListener("click", incrementCounter);

setTimeout(() => {
    writeCounter();
}, 1000);
