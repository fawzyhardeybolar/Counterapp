const counter = document.getElementById('num');

let btn = document.getElementsByClassName('btn');

let zero = document.getElementsByTagName('h2')[0];

let score = 0;

// switch (score) {
//     case 0:  
//         document.body.style.backgroundColor = 'yellow';
//         break;

//     default:

//         break;
// }

btn[0].addEventListener('click', () => {
    score--
    zero.textContent = score;
    if (score < 0) {
        document.body.style.backgroundColor = 'red';
    } else if (score == 0) {
        document.body.style.backgroundColor = 'yellow';
    };
});

btn[1].addEventListener('click', () => {
    score = 0;
    zero.textContent = score;

    if (score == 0) {
        document.body.style.backgroundColor = 'yellow';
    };
});

btn[2].addEventListener('click', () => {
    score++;
    zero.textContent = score;

    if (score > 0) {
        document.body.style.backgroundColor = 'green';
    } else if (score == 0) {
        document.body.style.backgroundColor = 'yellow';
    };
});