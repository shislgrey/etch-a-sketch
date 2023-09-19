const main = document.querySelector(".main")

function etchASketch() {
    for (let box = 0; box < 16; box++) {
        var square = document.createElement('div')
        square.classList.add('square')
        main.appendChild(square)
    }
}

etchASketch()