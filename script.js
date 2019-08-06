var squares = document.querySelectorAll(".square");
var numbersDisplay = document.getElementById("numbers");
var message = document.getElementById("message");

var allNumbers = [];
var drawnNumbers = [];
var gameOver = false;
var timeoutId;

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", markNumber);
}

// generate numbers
for (var i = 1; i <= 40; i++) {
    allNumbers.push(i);
}

// generate board
shuffle();

for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = allNumbers[i];
}

// shuffle numbers to draw from
shuffle();

// draw first number
setTimeout(drawNumber, 1000);

function markNumber() {
    if (!gameOver) {
        for (var i = 0; i < drawnNumbers.length; i++) {
            if (this.innerHTML == drawnNumbers[i]) {
                var marker = document.createElement("div");
                marker.classList.add("marker");
                this.appendChild(marker);

                this.classList.add("marked");

                if (isBingo()) {
                    clearTimeout(timeoutId);
                    gameOver = true;
                    message.innerHTML = "Bingo!";
                }

                break;
            }
        }
    }
}

function drawNumber() {
    if (drawnNumbers.length < 20) {
        var drawnNumber = allNumbers[drawnNumbers.length];

        drawnNumbers.push(drawnNumber);
        numbersDisplay.innerHTML += drawnNumber + " ";

        timeoutId = setTimeout(drawNumber, 2000);
    }
    else {
        gameOver = true;
        message.innerHTML = "You lose";
    }
}

function shuffle() {
    for (var i = 0; i < allNumbers.length * 10; i++) {
        var randomNumber1 = Math.floor(Math.random() * allNumbers.length);
        var randomNumber2 = Math.floor(Math.random() * allNumbers.length);

        var temp = allNumbers[randomNumber2];

        allNumbers[randomNumber2] = allNumbers[randomNumber1];
        allNumbers[randomNumber1] = temp;
    }
}

function isBingo() {
    if (squares[0].classList.contains("marked") && squares[1].classList.contains("marked") && squares[2].classList.contains("marked")) {
        return true;
    }
    else if (squares[3].classList.contains("marked") && squares[4].classList.contains("marked") && squares[5].classList.contains("marked")) {
        return true;
    }
    else if (squares[6].classList.contains("marked") && squares[7].classList.contains("marked") && squares[8].classList.contains("marked")) {
        return true;
    }
    else if (squares[0].classList.contains("marked") && squares[3].classList.contains("marked") && squares[6].classList.contains("marked")) {
        return true;
    }
    else if (squares[1].classList.contains("marked") && squares[4].classList.contains("marked") && squares[7].classList.contains("marked")) {
        return true;
    }
    else if (squares[2].classList.contains("marked") && squares[5].classList.contains("marked") && squares[8].classList.contains("marked")) {
        return true;
    }
    else if (squares[0].classList.contains("marked") && squares[4].classList.contains("marked") && squares[8].classList.contains("marked")) {
        return true;
    }
    else if (squares[2].classList.contains("marked") && squares[4].classList.contains("marked") && squares[6].classList.contains("marked")) {
        return true;
    }
    else {
        return false;
    }
}
