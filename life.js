const boardSize = 50;       //size of the play area
const lifeSpeed = 250;      //speed of the game
let land = [];
var life;

window.onload=function() {
    resetBoard();
}

function resetBoard() {
    pauseLife();
    let board = document.getElementById('gameBoard');

    for(let i = 0; i < boardSize; i++) {        //initializing a 2D array
        land[i] = [];
    }

    let display = [];       //initializing an array to be printed on the game board
    let counter = 0;            //variable transposes the 2D array (land) to the 1D array (display) for printing
    for(let i = 1; i < boardSize - 1; i++) {                  //iterate through the game area, set the space to 0 (dead), then
        for(j = 1; j < boardSize - 1; j++) {                        //set the display
            land[i][j] = 0;
            display[counter] = '<div class="test" onclick="toggleSpace(event)" data-x="' + i + '" data-y="' + j + '"></div>';
            if (j === boardSize - 2 && i < boardSize) {
                display[counter] += "<br />"
            }
            counter++;
        }
    }

    display = display.join('');
    board.innerHTML = display;
}

function toggleSpace(event) {           //manually toggle a space alive/dead
    let x = event.target.dataset.x;
    let y = event.target.dataset.y;
    if(land[x][y] == 0) {
        land[x][y] = 1;
        event.target.style.background = 'lightseagreen';
    } else {
        land[x][y] = 0;
        event.target.style.background = 'ghostwhite';
    }
}

function stepForward() {
    let nextMove = [];
    let newDisplay = []
    let neighbors = 0;
    let counter = 0;

    for(let i = 0; i < boardSize; i++) {        //initializing a 2D array
        nextMove[i] = [];
    }

    for(let i = 1; i < boardSize - 1; i++) {
        for(j = 1; j < boardSize - 1; j++) {
            neighbors = 0;
            for (let k = -1; k <= 1; k++) {
                for (let l = -1; l <= 1; l++) {
                    if (k == 0 && l == 0) {
                        continue;
                    }
                    if (land[i + k][j + l] == 1) {
                        neighbors++;
                    }
                }
            }
            if (land[i][j] == 1 && (neighbors == 0 || neighbors == 1 || neighbors >= 4)) {
                nextMove[i][j] = 0;
                newDisplay[counter] = '<div class="test" onclick="toggleSpace(event)" data-x="' + i + '" data-y="' + j + '"' + 
                                        'style="background-color: ghostwhite;"></div>';
            } else if (land[i][j] == 1 && (neighbors == 2 || neighbors == 3)) {
                nextMove[i][j] = 1;
                newDisplay[counter] = '<div class="test" onclick="toggleSpace(event)" data-x="' + i + '" data-y="' + j + '"' + 
                                        'style="background-color: lightseagreen;"></div>';
            } else if (land[i][j] == 0 && neighbors == 3) {
                nextMove[i][j] = 1;
                newDisplay[counter] = '<div class="test" onclick="toggleSpace(event)" data-x="' + i + '" data-y="' + j + '"' + 
                                        'style="background-color: lightseagreen;"></div>';
            } else {
                nextMove[i][j] = 0;
                newDisplay[counter] = '<div class="test" onclick="toggleSpace(event)" data-x="' + i + '" data-y="' + j + '"' + 
                                        'style="background-color: ghostwhite;"></div>';
            }
            if (j == boardSize - 2 && i < boardSize) {
                newDisplay[counter] += "<br />"
            }
            counter++;
        }
    }

    newDisplay = newDisplay.join('');
    land = nextMove;
    document.getElementById('gameBoard').innerHTML = newDisplay;
}

function startLife() {
    console.log(life);
    if (!life) {
        life = setInterval(stepForward, lifeSpeed);
    }
}

function pauseLife() {
    clearInterval(life);
    life = null;
}