const squares = document.querySelectorAll('.square')
const cat = document.querySelector('.cat')
const timeRemaining = document.querySelector('#time-remaining')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 30
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('cat')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('cat')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            console.log(result)
            score.textContent = result
            hitPosition = null       
        }
    })
})


function moveCat() {
    timerId = setInterval(randomSquare, 700)
}

moveCat()

function countDown() {
    currentTime--
    timeRemaining.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)