// primitive datatypes//
let score = 0;
const appName = "My App";
let playing = true;

// complex / compound
const players = [];
const player = {
    inventory : [],
};

// function / action
function createTitle(titleText) {
    console.log('create h1', titleText);


    const h1 = docment.createElement('h1');  //creates element
    document.body.appendChild(h1);   // teels the browers where to put the element
    h1.innerHTML = '<span> Hellow World</span>';   //tells the h1 what test to show

    const li = documnet.createElement('li');
    h1.appendChild(li);
    li.innerHTML = titleText;
}

createTitle(appName);
createTitle('Different');   // ' ' means its regular text and not a variable

for (let i = 0; i < 10; i++ ) {
    
    if (i < 5) {
        createTitle(appName);
    }
    if ( i == '5') {    // === checks for value and type   = check for assignment  == check for value
        createTitle(i);
    
    }
    if (i > 5) {
        createTitle('different');
    }
}