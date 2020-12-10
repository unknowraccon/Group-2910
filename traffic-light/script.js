const redBtn = document.querySelector('.traffic-light__circle1');
const clickHandler1 = () => {
    redBtn.classList.add('active-red');
    yellowBtn.classList.remove('active-yellow');
    greenBtn.classList.remove('active-green');
}

redBtn.addEventListener('click', clickHandler1);
redBtn.addEventListener('click', () => {
    clickHandler1 
});



const yellowBtn = document.querySelector('.traffic-light__circle2');
const clickHandler2 = () => {
    yellowBtn.classList.add('active-yellow');
    redBtn.classList.remove('active-red');
    greenBtn.classList.remove('active-green')
}

yellowBtn.addEventListener('click', clickHandler2);
yellowBtn.addEventListener('click', () => {
    clickHandler2 
});




const greenBtn = document.querySelector('.traffic-light__circle3');
const clickHandler3 = () => {
    greenBtn.classList.add('active-green');
    redBtn.classList.remove('active-red');
    yellowBtn.classList.remove('active-yellow');
}

greenBtn.addEventListener('click', clickHandler3);
greenBtn.addEventListener('click', () => {
    clickHandler3 
});