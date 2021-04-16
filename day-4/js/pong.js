// create
const gameArea = document.createElement('div');
const ball = document.createElement('div');
const paddleLeft = document.createElement('div');
const paddleRight = document.createElement('div');


// append
document.body.appendChild(gameArea);
gameArea.appendChild(ball);
gameArea.appendChild(paddleLeft);
gameArea.appendChild(paddleRight);
let gameSize = 200;
let ballWidth =  gameSize / 15;
function px(number) {
    return number + 'px';
}


window.addEventListener('resize', updateSize)
updateSize();
function updateSize (){
    console.log(document.body.clientWidth);
    gameSize = document.body.clientWidth / 2;
  ballWidth = gameSize / 15;
    // styles
gameArea.style.width = px(gameSize);
gameArea.style.height = px(gameSize);
gameArea.style.backgroundColor = 'gray';
gameArea.style.position = 'relative';
ball.style.width = px(gameSize / 15);
ball.style.height = px(gameSize / 15);
ball.style.backgroundColor = 'lime';
ball.style.borderRadius = '50%';
ball.style.position = 'absolute';
ball.style.left = px(gameSize/2 - (gameSize/8 / 2));
ball.style.top =  px(gameSize/2 - (gameSize/8 / 2));
paddleLeft.style.width = px(gameSize/ 20);
paddleLeft.style.height = px(gameSize/ 2);
paddleLeft.style.backgroundColor = 'black';
paddleLeft.style.position = 'absolute';
paddleLeft.style.left = '0px';
paddleLeft.style.top = '0px';
paddleRight.style.width = px(gameSize/ 20);
paddleRight.style.height = px(gameSize/ 2);
paddleRight.style.backgroundColor = 'black';
paddleRight.style.position = 'absolute';
paddleRight.style.left = px(gameSize - (gameSize/ 20) );
paddleRight.style.top = '0px';
}


let direction = 1;

function play() {
   
    const speed = (gameSize / 100 ) * direction;
    console.log('speed', speed);
    ball.style.left = (parseInt(ball.style.left) + speed) + 'px';
    if ( parseInt(ball.style.left) > gameSize - ballWidth) {
        direction = -1
    }
    if ( parseInt(ball.style.left) < 0) {
        direction = 1
    }
    window.requestAnimationFrame(play);
}


// play();
window.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        (paddleLeft.style.top = parseInt(paddleLeft.style.top) + 20 ) + 'px'
    }
    console.log('key', event.key)
})