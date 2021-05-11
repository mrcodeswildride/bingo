let squares = document.getElementsByClassName(`square`)
let startButton = document.getElementById(`startButton`)
let lettersParagraph = document.getElementById(`lettersParagraph`)
let messageParagraph = document.getElementById(`messageParagraph`)

let letters = [
  `A`,
  `B`,
  `C`,
  `D`,
  `E`,
  `F`,
  `G`,
  `H`,
  `I`,
  `J`,
  `K`,
  `L`,
  `M`,
  `N`,
  `O`,
  `P`,
  `Q`,
  `R`,
  `S`,
  `T`,
  `U`,
  `V`,
  `W`,
  `X`,
  `Y`,
  `Z`,
]

let nextIndexToDraw = 0
let gameOver = false
let intervalId

shuffle()

for (let i = 0; i < squares.length; i++) {
  squares[i].innerHTML = letters[i]
  squares[i].addEventListener(`click`, markLetter)
}

startButton.addEventListener(`click`, startGame)

function shuffle() {
  for (let i = 0; i < 250; i++) {
    let randomNumber1 = Math.floor(Math.random() * letters.length)
    let randomNumber2 = Math.floor(Math.random() * letters.length)

    let temp = letters[randomNumber1]
    letters[randomNumber1] = letters[randomNumber2]
    letters[randomNumber2] = temp
  }
}

function startGame() {
  startButton.style.display = `none`

  shuffle()
  intervalId = setInterval(drawLetter, 2000)
}

function drawLetter() {
  if (nextIndexToDraw < 13) {
    lettersParagraph.innerHTML = `${lettersParagraph.innerHTML} ${letters[nextIndexToDraw]}`
    nextIndexToDraw = nextIndexToDraw + 1
  } else {
    messageParagraph.innerHTML = `You lose`
    gameOver = true
    clearInterval(intervalId)
  }
}

function markLetter() {
  if (!this.classList.contains(`marked`) && !gameOver) {
    for (let i = 0; i < nextIndexToDraw; i++) {
      if (this.innerHTML == letters[i]) {
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
  if (
    squares[0].classList.contains(`marked`) &&
    squares[1].classList.contains(`marked`) &&
    squares[2].classList.contains(`marked`)
  ) {
    return true
  } else if (
    squares[3].classList.contains(`marked`) &&
    squares[4].classList.contains(`marked`) &&
    squares[5].classList.contains(`marked`)
  ) {
    return true
  } else if (
    squares[6].classList.contains(`marked`) &&
    squares[7].classList.contains(`marked`) &&
    squares[8].classList.contains(`marked`)
  ) {
    return true
  } else if (
    squares[0].classList.contains(`marked`) &&
    squares[3].classList.contains(`marked`) &&
    squares[6].classList.contains(`marked`)
  ) {
    return true
  } else if (
    squares[1].classList.contains(`marked`) &&
    squares[4].classList.contains(`marked`) &&
    squares[7].classList.contains(`marked`)
  ) {
    return true
  } else if (
    squares[2].classList.contains(`marked`) &&
    squares[5].classList.contains(`marked`) &&
    squares[8].classList.contains(`marked`)
  ) {
    return true
  } else if (
    squares[0].classList.contains(`marked`) &&
    squares[4].classList.contains(`marked`) &&
    squares[8].classList.contains(`marked`)
  ) {
    return true
  } else if (
    squares[2].classList.contains(`marked`) &&
    squares[4].classList.contains(`marked`) &&
    squares[6].classList.contains(`marked`)
  ) {
    return true
  }

  return false
}
