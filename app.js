// sketch pad container variable
const container = document.getElementById('container');

// sketch pad size slider variable
const slider = document.getElementById('slider');
const spanTxt = document.querySelector('#size');

// Buttons variables
const blackBtn = document.querySelector('#btn-black');
const grayBtn = document.querySelector('#btn-gray');
const rainbowBtn = document.querySelector('#btn-rainbow');
const eraseBtn = document.querySelector('#btn-erase');
const resetBtn = document.querySelector('#btn-reset');


function sketchPad(size) {

    container.innerHTML = '';
    
    for (let i = 0; i < size * size; i++) {
        const divs = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        container.insertAdjacentElement('beforeend', divs);
        divs.addEventListener('mouseover', function() {
            this.classList.add('black');
        });
    }
}

// slider function change the sketchpad size and show the size text when changed
function changeSize(val) {
    sketchPad(val);
    spanTxt.textContent = `${val} x ${val}`;
}

changeSize(16);


// color picker
let setColor = document.querySelector('[type="color"]');
setColor.addEventListener('input', (e) => {
    color = e.target.value
});

/* TODO */
// Buttons brush should be what ever the clicked button is
// Button rainbow should be different colors
// Whatever color picked on input color should be the brush color
// Clear button should reset the sketchpad to white background
// fix event listener from mouseover to toggle

