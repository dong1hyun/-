const whitePawn = document.querySelectorAll('#whitePawn');
const blackPawn = document.querySelectorAll('#blackPawn');

function whitePawnMove() {
    for (i = 0; i < whitePawn.length; i++) {
        whitePawn[i].onclick = function () {
            movingTarget = this;
            const tileNum = +this.parentElement.getAttribute('value');

            secondClick(tileNum);
            if (clicked) {
                clicked = false;
                return;
            }

            clearMovingPoint();
            if (movingTarget.getAttribute('id') == 'blackPawn' || movingTarget.getAttribute('id') == 'whitePawn') {
                if (tiles[tileNum - 7] != null && tiles[tileNum - 7].lastElementChild != null && tiles[tileNum - 7].lastElementChild.getAttribute('class') == 'blackTeam') {
                    tiles[tileNum - 7].firstElementChild.style.display = 'block';
                }
                if (tiles[tileNum - 9] != null && tiles[tileNum - 9].lastElementChild != null && tiles[tileNum - 9].lastElementChild.getAttribute('class') == 'blackTeam') {
                    tiles[tileNum - 9].firstElementChild.style.display = 'block';
                }
            }

            if (tiles[tileNum - 8] != null) {
                const ch1 = tiles[tileNum - 8].children;
                if (ch1[1] != null) {
                    return;
                }
                tiles[tileNum - 8].firstElementChild.style.display = 'block';
            }
            if (tiles[tileNum - 16] != null) {
                const ch2 = tiles[tileNum - 16].children;
                if (ch2[1] != null) {
                    return;
                }
                tiles[tileNum - 16].firstElementChild.style.display = 'block';
            }

            clickedNum = tileNum;
        }
    }
}


function blackPawnMove() {
    for (i = 0; i < blackPawn.length; i++) {
        blackPawn[i].onclick = function () {
            movingTarget = this;
            const tileNum = +this.parentElement.getAttribute('value');

            secondClick(tileNum);
            if (clicked) {
                clicked = false;
                return;
            }

            clearMovingPoint();
            if (movingTarget.getAttribute('id') == 'blackPawn' || movingTarget.getAttribute('id') == 'whitePawn') {
                if (tiles[tileNum + 7] != null && tiles[tileNum + 7].lastElementChild != null && tiles[tileNum + 7].lastElementChild.getAttribute('class') == 'whiteTeam') {
                    tiles[tileNum + 7].firstElementChild.style.display = 'block';
                }
                if (tiles[tileNum + 9] != null && tiles[tileNum + 9].lastElementChild != null && tiles[tileNum + 9].lastElementChild.getAttribute('class') == 'whiteTeam') {
                    tiles[tileNum + 9].firstElementChild.style.display = 'block';
                }
            }

            if (tiles[tileNum + 8] != null) {
                const ch1 = tiles[tileNum + 8].children;
                if (ch1[1] != null) {
                    return;
                }
                tiles[tileNum + 8].firstElementChild.style.display = 'block';
            }
            if (tiles[tileNum + 16] != null) {
                const ch2 = tiles[tileNum + 16].children;
                if (ch2[1] != null) {
                    return;
                }
                tiles[tileNum + 16].firstElementChild.style.display = 'block';
            }

            clickedNum = tileNum;
        }
    }
}


whitePawnMove();
blackPawnMove();