'use strict';

let counter = 1;
let attempts = 10;
let namearray=[];
let votearray=[];
let shownarray=[];
let previousimagesarray=[];

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
getData();

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
    previousimagesarray=[];
    previousimagesarray.push(leftimgnumber);
    previousimagesarray.push(midimgnumber);
    previousimagesarray.push(rightimgnumber);

    leftimgnumber = randomnumber();
    midimgnumber = randomnumber();
    rightimgnumber = randomnumber();

    while (leftimgnumber === midimgnumber || leftimgnumber === rightimgnumber || midimgnumber === rightimgnumber|| previousimagesarray.includes(leftimgnumber)|| previousimagesarray.includes(midimgnumber)||previousimagesarray.includes(rightimgnumber) ) {
        leftimgnumber = randomnumber();
        midimgnumber = randomnumber();
        rightimgnumber=randomnumber();
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
            seclist.setAttribute('style','background-color: #eb0e3a17;')
            storageData();
            renderlist();
            char();
            let holder=document.getElementById('holder')
            let img=document.createElement('img')
            holder.appendChild(img)
            img.setAttribute('src','images/choices.gif')
            img.setAttribute('id','gif')
            btn.removeEventListener('click',btnclick);

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
        namearray[i]=BusMall.DataArray[i].name
        votearray[i]=BusMall.DataArray[i].votes
        shownarray[i]=BusMall.DataArray[i].shown
    }
}

function char(){
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: namearray,
        datasets: [{
            label: '# of Votes',
            data: votearray,
            backgroundColor: [
                'rgba(153, 102, 255, 0.514)',
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }
        ,{
            label: '# of Shown',
            data: shownarray,
            backgroundColor: [
                '#a7194baf',
            ],
            borderColor: [
                '#85143b',
            ],
            borderWidth: 1
        }]
    },
});
}
function storageData(){
let DataStringify=JSON.stringify(BusMall.DataArray)
localStorage.setItem('Bus-Mall',DataStringify)
}

function getData(){
    let GettingData=localStorage.getItem('Bus-Mall')
    let DataPrase=JSON.parse(GettingData)
if(DataPrase!==null){
BusMall.DataArray=DataPrase
}
}