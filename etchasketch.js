const main = document.querySelector(".main")
let size = 16
let square

function etchASketch() {
    for (let column = 0; column < size; column++) {
        var line = document.createElement('div')
        line.classList.add('line')
        for (let row = 0; row < size; row++) {
            square = document.createElement('div')
            square.classList.add('square')
            line.appendChild(square)
        }
        main.appendChild(line)
    }
}

etchASketch()