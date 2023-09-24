let size = 16

function etchASketch() {
    for (let column = 0; column < size; column++) {
        var line = document.createElement('div')
        line.classList.add('line')
        for (let row = 0; row < size; row++) {
            let square = document.createElement('div')
            square.classList.add('square')
            line.appendChild(square)
        }
        document.querySelector(".main").appendChild(line)
    }
}

//TODO: figure out why doodle isn't working how I think it's supposed to. 
// classList? maybe I have to add a whole nother div?
// 2do'ing this so I don't forget what I wanted to unpick tomorrow

function doodle() {
    document.querySelector('.square').classList.add('hovered')
}

etchASketch()

document.querySelector('.square').addEventListener('mouseover', () => { doodle(); })