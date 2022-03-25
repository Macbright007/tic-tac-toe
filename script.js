const resetButton = document.querySelector("#reset")
const player1Input = document.querySelector("#player1_input")


//player selection code
let player1 = player1Input.value

// const player2Input = document.querySelector("#player2_input")
let player2 = player1 === "X" ? "O" : "X"

let currentPlayer = player1;

player1Input.addEventListener('change', e => {
    const value = e.target.value
    player1 = value
    currentPlayer = player1

    if (value === 'X') {
        // player2Input.value = "O"
        player2 = "O"
    } else {
        // player2Input.value = "X"
        player2 = "X"
    }
})


// //for player one choice
// let tagOne = document.createElement("p");
// let textOne = document.createTextNode(`Player One Chose: ${player1}`);
// tagOne.appendChild(textOne);
// const options = document.getElementById("playersOption");
// options.appendChild(tagOne); 

// //for player two choice
// let tagTwo = document.createElement("p");
// let textTwo = document.createTextNode(`Player Two Chose: ${player2}`);
// tagTwo.appendChild(textTwo);
// const option = document.getElementById("playersOption");
// option.appendChild(tagTwo);

const boxes = document.querySelectorAll('.card')

//placing player options on each cell
boxes.forEach(cell => {
    cell.addEventListener('click', function () {
        hidePlayerInputs()

        if (cell.innerText.trim() != "") {
            return
        }
        cell.innerText = currentPlayer

        if (!checkwin()) {
            checkDraw()
        }

        currentPlayer = currentPlayer === player1 ? player2 : player1;

    })
})

//for reseting the game
resetButton.addEventListener('click', () => {
    boxes.forEach(item => item.innerText = "")
})


//Representation of winning combinations on each cell
const winning_conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

//to check for winner
function checkwin() {
    winning_conditions.forEach(wins => {
        let check = wins.every(indexOf => boxes[indexOf].innerText.trim() == currentPlayer)

        if (check) {
            alert("player " + currentPlayer + " won")
            showPlayerInputs()
            return true
        }

    })

    return false
}

// to check for draw or a tie
function checkDraw() {
    for (i in boxes) {
        if (boxes[i].innerText === "") {
            return false
        }
    }
    alert("It's a Draw/Tie !!!!!")
    showPlayerInputs()
    return true
}



//display and hiding of select button when game starts
function hidePlayerInputs() {
    player1Input.style.display = "none"
}

function showPlayerInputs() {
    player1Input.style.display = "block"
}

