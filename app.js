const container = document.getElementById('container');
const div = [];

// create 16x16 div and append to the container
for (let i = 0; i < 256; i++) {
    const divs = document.createElement('div');
    container.appendChild(divs);
    divs.className = ('sketch-box')
    div.push(divs);
}

// paint black on on each div with mouseover
div.forEach((sqr) => {
    sqr.addEventListener('mouseover', function() {
        this.classList.add('black');
    });
});