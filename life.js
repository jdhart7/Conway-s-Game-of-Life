let land = [];
window.onload=function() {
    resetBoard();
}

function resetBoard() {
    const boardSize = 75;
    let board = document.getElementById('gameBoard');

    for(let i = 0; i < boardSize; i++) {
        land[i] = [];
    }

    let temp = [];
    let counter = 0;
    for(let i = 0; i < boardSize / 1.7; i++) {
        for(j = 0; j < boardSize; j++) {
            land[i][j] = 0;
            temp[counter] = '<div class="test" onclick="toggleSpace(event)" data-x="' + i + '" data-y="' + j + '"></div>';
            if (j === boardSize - 1 && i < boardSize) {
                land[i][j] += '<br />';
                temp[counter] += "<br />"
            }
            counter++;
        }
    }

    temp = temp.join('');
    console.log(temp);
    board.innerHTML = temp;
}

function toggleSpace(event) {
    let x = event.target.dataset.x;
    let y = event.target.dataset.y;
    console.log(x + ', ' + y);
    if(land[x][y] == 0) {
        land[x][y] = 1;
        event.target.style.background = 'lightseagreen';
    } else {
        land[x][y] = 0;
        event.target.style.background = 'ghostwhite';
    }
    console.log(land[x][y]);
}