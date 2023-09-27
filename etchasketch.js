
//done: create a grid of 16x16 squares
//TODO: when mouse hovers over square, it changes color
//TODO: add a button to clear the grid and prompt for new grid size

//TODO: add a button to change the color of the squares
//TODO: add a button to change the color of the squares to random colors
//TODO: add a progressively darker shade of gray for each pass over the square

let size = 16

function generateGrid() {
    for (let column = 0; column < size; column++) {
        var line = document.createElement('div')
        line.classList.add('line')
        for (let row = 0; row < size; row++) {
            let square = document.createElement('div')
            square.classList.add('square')
            line.appendChild(square)
            let squares = Array.from(document.querySelectorAll('.square'))
            squares.forEach((square) => { addEventListener('mouseover', updateColor(square)); })
            // square.addEventListener('mouseover', () => { updateColor(); })
        }
        document.querySelector(".main").appendChild(line)
    }
}
//TODO: figure out why changeColor isn't working how I think it's supposed to. 
// classList? maybe I have to add a whole nother div?
// 2do'ing this so I don't forget what I wanted to unpick tomorrow

function updateColor(div) {
    div.style.backgroundColor = 0o0
}

generateGrid()

// let squares = Array.from(document.querySelectorAll('.square'))
// squares.forEach((square) => { addEventListener('mouseover', updateColor(square)); })