// sketch pad container variable
const container = document.getElementById('container');

// variable that will show whatever picked in the input type color
const colorPicker_span = document.getElementById('color-picked');

// variable that will show the size of the sketchpad based on the input type range
const spanTxt = document.querySelector('#size');

let color = 'black';
let click = true;

function sketchPad(size) {
    // create grid inside the container depends on the slider input
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    container.innerHTML = '';
    
    for (let i = 0; i < size * size; i++) {
        //create element div that will be put inside the container
        const divs = document.createElement('div');
        // append the divs after the container
        container.insertAdjacentElement("beforeend", divs);
        divs.style.backgroundColor = 'white';
        // on mouseover run setColor function that will change the bg color
        divs.addEventListener('mouseover', useColor);

        // reset button event listener
        const resetBtn = document.querySelector('#btn-reset');
        resetBtn.addEventListener('click', () => {
            divs.style.backgroundColor = 'white';
        })
    }
}

// slider function change the sketchpad size and show the size text when changed
function changeSize(val) {
    sketchPad(val);
    spanTxt.textContent = `${val} x ${val}`;
}

changeSize(16);

// function will use the color on setColor and if the rainbow button is clicked will return random colors;
function useColor() {
    if (click) {
        if (color === 'rainbow') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; 
        } 
        else {
            this.style.backgroundColor = color;
        }
    }
}

    // function that will set the color on button click or input choice
function setColor(choice) {
    color = choice;
    colorPicker_span.textContent = `${choice}`;
    colorPicker_span.style.textTransform = 'uppercase';
    colorPicker_span.style.fontSize = '1.2rem';
    colorPicker_span.style.fontWeight = '500';

    if(choice === 'white') {
        colorPicker_span.textContent = 'eraser';
    }
}

document.body.addEventListener('click', function(){
    if(click === true) {
        click = false;
    } else {
        click = true;
    }
});

