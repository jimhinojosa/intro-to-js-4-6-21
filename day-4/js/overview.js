const yes = true;
const no = false;
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const abcs = ['a', 'b', 'c',];

// flavor of complex objects

const array = ['good to eat', 'some thing else'];

const object = {
    apple: 'it is good to eat',
    method: function() {
        console.log('i am a method because i belong to an object')
        const li = document.createElement('li');
        document.body.appendChild(li);
    }
}

array[0]  //good to eat
object[yes]  // it is good to eat

//

function myFunction( x ) {
    console.log(x * 2);
}


let score = 0;
function pureAddOne(score) {
    return score + 1;
}
function double( x ) {
    return x * 2;
}

score = pureAddOne(score);

console.log(score);
function AddOneViaSideEffect(value) {
    score += value;
}
score = double(5);

console.log(double(1));

for ( let i = 10; i >0; i--) {
    console.log(i);
}
for (let i = 0; i < 10; i++) {

}

//arithmetic
console.log(1 + 2, 3 - 4, 5 * 2, 27 / 9, 28 % 9)

score = 10;
score += 10;
score -+ 1;
score *= 2;
score /= 2;
console.log('20', socre);

console.log('test'.toUpperCase());

// popup methods
// alert('test')
// conform('is it true)
const name = prompt('what is your name?')

console.log('your name is', name);
