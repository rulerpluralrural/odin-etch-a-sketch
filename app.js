// sketch pad container variable
const container = document.getElementById('container');

// color picker variable
const colorPicker = document.getElementById('color-picker');

// sketch pad size slider variable
const slider = document.getElementById('slider');

// Buttons variables
const blackBtn = document.getElementById('btn-black');
const grayBtn = document.getElementById('btn-gray');
const rainbowBtn = document.getElementById('btn-rainbow');
const eraseBtn = document.getElementById('btn-erase');
const resetBtn = document.getElementById('btn-reset');


const div = [];

// create 16x16 div and append to the container
for (let i = 0; i < 256; i++) {
    const divs = document.createElement('div');
    container.appendChild(divs);
    container.style.gridTemplateColumns = 'repeat(16,1fr)';
    div.push(divs);
}

// paint black on on each div with mouseover
div.forEach((sqr) => {
    sqr.addEventListener('mouseover', function() {
        this.classList.add('black');
    });
});