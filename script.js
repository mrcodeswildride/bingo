let squares = document.getElementsByClassName(`square`)
let numbersParagraph = document.getElementById(`numbersParagraph`)
let messageParagraph = document.getElementById(`messageParagraph`)

let numbers = []
let nextIndexToDraw = 0
let gameOver = false
let intervalId

for (let i = 1; i <= 40; i++) {
  numbers.push(i)
}

shuffle()

for (let i = 0; i < squares.length; i++) {
  squares[i].innerHTML = numbers[i]
}

shuffle()

intervalId = setInterval(drawNumber, 2000)

for (let square of squares) {
  square.addEventListener(`click`, markNumber)
}

function shuffle() {
  for (let i = 0; i < 400; i++) {
    let randomNumber1 = Math.floor(Math.random() * numbers.length)
    let randomNumber2 = Math.floor(Math.random() * numbers.length)

    let temp = numbers[randomNumber1]
    numbers[randomNumber1] = numbers[randomNumber2]
    numbers[randomNumber2] = temp
  }
}

function drawNumber() {
  if (nextIndexToDraw < 20) {
    numbersParagraph.innerHTML = `${numbersParagraph.innerHTML} ${numbers[nextIndexToDraw]}`
    nextIndexToDraw = nextIndexToDraw + 1
  }
  else {
    messageParagraph.innerHTML = `You lose`
    gameOver = true
    clearInterval(intervalId)
  }
}

function markNumber() {
  if (!this.classList.contains(`marked`) && !gameOver) {
    for (let i = 0; i < nextIndexToDraw; i++) {
      if (this.innerHTML == numbers[i]) {
        this.classList.add(`marked`)

        if (isBingo()) {
          messageParagraph.innerHTML = `Bingo!`
          gameOver = true
          clearInterval(intervalId)
        }

        break
      }
    }
  }
}

function isBingo() {
  if (squares[0].classList.contains(`marked`) && squares[1].classList.contains(`marked`) && squares[2].classList.contains(`marked`)) {
    return true
  }
  else if (squares[3].classList.contains(`marked`) && squares[4].classList.contains(`marked`) && squares[5].classList.contains(`marked`)) {
    return true
  }
  else if (squares[6].classList.contains(`marked`) && squares[7].classList.contains(`marked`) && squares[8].classList.contains(`marked`)) {
    return true
  }
  else if (squares[0].classList.contains(`marked`) && squares[3].classList.contains(`marked`) && squares[6].classList.contains(`marked`)) {
    return true
  }
  else if (squares[1].classList.contains(`marked`) && squares[4].classList.contains(`marked`) && squares[7].classList.contains(`marked`)) {
    return true
  }
  else if (squares[2].classList.contains(`marked`) && squares[5].classList.contains(`marked`) && squares[8].classList.contains(`marked`)) {
    return true
  }
  else if (squares[0].classList.contains(`marked`) && squares[4].classList.contains(`marked`) && squares[8].classList.contains(`marked`)) {
    return true
  }
  else if (squares[2].classList.contains(`marked`) && squares[4].classList.contains(`marked`) && squares[6].classList.contains(`marked`)) {
    return true
  }

  return false
}