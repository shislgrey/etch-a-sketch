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

etchASketch()

document.querySelector('.square').addEventListener("MouseEvent(mouseover)", () => { square.classList.add('hovered'); })