let score = 0;
let time = new Date();

// creat title
const title = document.createElement('h1');
title.innerHTML = 'Whack a Mole';
document.body.appendChild(title);

// create score keeper
const scoreTracker = document.createElement('p');
document.body.appendChild(scoreTracker);
scoreTracker.innerHTML = 'SCORE: ' + score;

// create timeKeeper
const timeKeeper = document.createElement('p');
timeKeeper.innerHTML = 'Time: ' + getSimpleTime(time);
document.body.appendChild(timeKeeper)

// create more
const mole = document.createElement('img');
mole.src = 'https://media.giphy.com/media/sSdXJogbTXbri/source.gif'
document.body.appendChild(mole);


function getSimpleTime(date) {
    return String((date.getHours() %12)).padStart(2, '0') + 
    ':' + String(date.getMinutes()).padStart(2, '0') + 
    ':' + String(date.getSeconds()).padStart(2, '0')
}
function UpdateTime() {
    let time = new Date();
    timeKeeper.innerHTML = 'Time: ' + getSimpleTime(time);
}

setInterval(
    function() {
        updateTime();
    },
    1000
);

// mole interval

setInterval(
    function(){
        mole.style.position = 'absolute';
        updateMolePosition(
            Math.random() * 700,  // x value
         (Math.random() * 500) +200 // y value
         )           
    },
    1000
)

function updateMolePosition(x, y){
    mole.style.left = x + 'px';
    mole.style.top = y + 'px';

}

mole.addEventListener('click', function(){
    score++;
    scoreTracker.innerHTML = 'SCORE: ' + score;
})