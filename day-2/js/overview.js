// Primitve Datatypes
let isVip = true;
const appName = 'Very Cool App';
let score = 0;

console.log(isVip, appName, score);


// Compond/Complex (groups)
const array = [isVip, appName, score];
const user1 = {
    isVip: true,
    appName: 'Very Cool App',
    score: 0
}

const user2 = {
    isVip: true,
    appName: 'Very Cool App',
    score: 0
}

// html object (simple)

const jsWorld = { // Document Object Model
    document : {
        body: {
            type: 'body',
            innerHTML:'',
            children: [
                {
                    type: 'H1',
                    innerHTML: '',
                    classList: [],
                    children:[
                        {
                            type: 'ul',
                            innerHTML : '',
                            children: [
                                {
                                    type: 'li',
                                    innerHTML : '',
                                    children: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}

console.log(array[1], user1['appName']);

function makeH1(text = 'I am a H1', myNumber = 5) {
    const h1 = document.createElement('h1');
    h1.innerHTML = String(text) + String(myNumber);
    document.body.appendChild(h1);
}

// arithmatic

1 + 1;
2 - 1;
3 * 9;
4 / 2;


// comparative
1 < 5;
3 > 7;
4 <= 4;

if (1 < 5 ) {
    console.log('runs');
}


// logic
!true || false && 0 && '';


makeH1('I am an h1', 1);
makeH1(2, 2);
makeH1('!', 100);

