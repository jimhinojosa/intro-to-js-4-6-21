// primitive data types
const no = false;
const yes = true;
const number = 9;
const strings = 'abc';
const color = 'purple';
let score = 0.5;
score = 10.5;

// complex data types ( groups )
const object = {
    no : false,
    yes: true,
    number: 1,
    strings: 'abc',
    favoriteFoods: ['Pizza', 'Burgers'],
}
const array = [false, true, 1, 'abc', object, object.favoriteFoods];

// dot notation
console.log(object.favoriteFoods[0]);
// bracket notation
console.log(object['favoriteFoods']);


// bracket notation
console.log(array[3])

// named function syntax
function setupH1() {
    let h1 = document.body.children[0];
    h1 = document.querySelector('.title');
    
    h1.style.color = color;
    
    h1.classList.add('active')
    
    h1.innerHTML = 'Intro to Cool Websites that do things';
    
    console.log(h1);
    h1.addEventListener('click', addTwoClick );
}

setupH1();

let howManyClicks = 0;

function addAClick() {
    howManyClicks += 1;
    alert(howManyClicks);
}

function addTwoClick() {
    howManyClicks += 2;
    alert(howManyClicks);
}
