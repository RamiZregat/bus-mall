'use strict';

let counter = 0;
let attempts = 25;

function BusMall(name, source,) {
    this.name = name
    this.source = source
    this.votes = 0
    this.shown = 0
    BusMall.DataArray.push(this)
}
BusMall.DataArray = [];

new BusMall('bag', 'images/bag.jpg');
new BusMall('banana', 'images/banana.jpg');
new BusMall('bathroom', 'images/bathroom.jpg');
new BusMall('boots', 'images/boots.jpg');
new BusMall('breakfast', 'images/breakfast.jpg');
new BusMall('bubblegum', 'images/bubblegum.jpg');
new BusMall('chair', 'images/chair.jpg');
new BusMall('cthulhu', 'images/cthulhu.jpg');
new BusMall('dog-duck', 'images/dog-duck.jpg');
new BusMall('dragon', 'images/dragon.jpg');
new BusMall('pen', 'images/pen.jpg');
new BusMall('pet-sweep', 'images/pet-sweep.jpg');
new BusMall('scissors', 'images/scissors.jpg');
new BusMall('shark', 'images/shark.jpg');
new BusMall('sweep', 'images/sweep.png');
new BusMall('tauntaun', 'images/tauntaun.jpg');
new BusMall('unicorn', 'images/unicorn.jpg');
new BusMall('water-can', 'images/water-can.jpg');
new BusMall('wine-glass', 'images/wine-glass.jpg');


function randomnumber() {
    return Math.floor(Math.random() * BusMall.DataArray.length)
}

let leftimgnumber = randomnumber();
let midimgnumber = randomnumber();
let rightimgnumber = randomnumber();

while (leftimgnumber === midimgnumber || leftimgnumber === rightimgnumber || midimgnumber === rightimgnumber) {
    leftimgnumber = randomnumber();
    midimgnumber = randomnumber();
}
const seclist = document.getElementById('list')
const sec = document.getElementById('sec-img');

const leftimg = document.createElement('img');
sec.appendChild(leftimg);
leftimg.setAttribute('src', BusMall.DataArray[leftimgnumber].source);
leftimg.setAttribute('id', 'leftimg');
BusMall.DataArray[leftimgnumber].shown++;

const midimg = document.createElement('img');
sec.appendChild(midimg);
midimg.setAttribute('src', BusMall.DataArray[midimgnumber].source);
midimg.setAttribute('id', 'midimg');
BusMall.DataArray[midimgnumber].shown++;

const rightimg = document.createElement('img');
sec.appendChild(rightimg);
rightimg.setAttribute('src', BusMall.DataArray[rightimgnumber].source);
rightimg.setAttribute('id', 'rightimg');
BusMall.DataArray[rightimgnumber].shown++;

function renderimages() {
    leftimgnumber = randomnumber();
    midimgnumber = randomnumber();
    rightimgnumber = randomnumber();

    while (leftimgnumber === midimgnumber || leftimgnumber === rightimgnumber || midimgnumber === rightimgnumber) {
        leftimgnumber = randomnumber();
        midimgnumber = randomnumber();
    }

    leftimg.src = BusMall.DataArray[leftimgnumber].source
    BusMall.DataArray[leftimgnumber].shown++;
    midimg.src = BusMall.DataArray[midimgnumber].source
    BusMall.DataArray[midimgnumber].shown++;
    rightimg.src = BusMall.DataArray[rightimgnumber].source
    BusMall.DataArray[rightimgnumber].shown++;
}

leftimg.addEventListener('click', handleclick);
midimg.addEventListener('click', handleclick);
rightimg.addEventListener('click', handleclick);



function handleclick(event) {
    counter++;

    if (counter <= attempts) {

        if (event.target.id === 'leftimg') {
            BusMall.DataArray[leftimgnumber].votes++
        }
        if (event.target.id === 'midimg') {
            BusMall.DataArray[midimgnumber].votes++
        }
        if (event.target.id === 'rightimg') {
            BusMall.DataArray[rightimgnumber].votes++
        }

        renderimages();
        console.log(event);
        console.log(BusMall.DataArray);

    } else if (counter > attempts) {

        if (event.target.id === 'leftimg') {
            BusMall.DataArray[leftimgnumber].votes++
        }
        if (event.target.id === 'midimg') {
            BusMall.DataArray[midimgnumber].votes++
        }
        if (event.target.id === 'rightimg') {
            BusMall.DataArray[rightimgnumber].votes++
        }

        leftimg.removeEventListener('click', handleclick);
        midimg.removeEventListener('click', handleclick);
        rightimg.removeEventListener('click', handleclick);

        const btn = document.createElement('button');
        seclist.appendChild(btn);
        btn.textContent = 'Result'
        btn.addEventListener('click', btnclick)

        function btnclick() {
            renderlist();
        }
    }
}

function renderlist() {

    const ul = document.createElement('ul')
    seclist.appendChild(ul)
    for (let i = 0; i < BusMall.DataArray.length; i++) {
        const li = document.createElement('li')
        ul.appendChild(li)
        li.textContent = `${BusMall.DataArray[i].name} had ${BusMall.DataArray[i].votes} votes, and  was seen ${BusMall.DataArray[i].shown} times`
    }
}

