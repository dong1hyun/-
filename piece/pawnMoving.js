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

            //앙파상
            const $piece = tiles[tileNum - 1].children[2]
            const $piece2 = tiles[tileNum + 1].children[2];
            if (tileNum >= 25 && tileNum < 32 && $piece != null && $piece.getAttribute('id') == 'blackPawn') {
                if ($piece.dataset.firstMove == '2' && $piece.dataset.curMove == count) {
                    tiles[tileNum - 9].children[1].style.display = 'block';
                }
            }
            else if (tileNum >= 24 && tileNum < 31 && $piece2 != null && $piece2.getAttribute('id') == 'blackPawn') {
                if ($piece2.dataset.firstMove == '2' && $piece2.dataset.curMove == count) {
                    tiles[tileNum - 7].children[1].style.display = 'block';
                }
            }

            //대각선 공격
            if (movingTarget.getAttribute('id') == 'blackPawn' || movingTarget.getAttribute('id') == 'whitePawn') {
                if ((tileNum + 1) % 8 != 0 && tiles[tileNum - 7] != null && tiles[tileNum - 7].lastElementChild != null && tiles[tileNum - 7].lastElementChild.getAttribute('class') == 'blackTeam') {
                    tiles[tileNum - 7].firstElementChild.style.display = 'block';
                }
                if (tileNum % 8 != 0 && tiles[tileNum - 9] != null && tiles[tileNum - 9].lastElementChild != null && tiles[tileNum - 9].lastElementChild.getAttribute('class') == 'blackTeam') {
                    tiles[tileNum - 9].firstElementChild.style.display = 'block';
                }
            }

            if (tileNum - 8 >= 0) {
                if (tiles[tileNum - 8].children[2] != null) {
                    return;
                }
                tiles[tileNum - 8].firstElementChild.style.display = 'block';
            }

            if (tileNum - 16 >= 0 && movingTarget.dataset.firstMove == '-1') {
                if (tiles[tileNum - 16].children[2] != null) {
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

            //앙파상
            const $piece = tiles[tileNum - 1].children[2]
            const $piece2 = tiles[tileNum + 1].children[2];
            if (tileNum >= 33 && tileNum < 40 && $piece != null && $piece.getAttribute('id') == 'whitePawn') {
                if ($piece.dataset.firstMove == '2' && $piece.dataset.curMove == count) {
                    tiles[tileNum + 7].children[1].style.display = 'block';
                }
            }
            else if (tileNum >= 32 && tileNum < 39 && $piece2 != null && $piece2.getAttribute('id') == 'whitePawn') {
                if ($piece2.dataset.firstMove == '2' && $piece2.dataset.curMove == count) {
                    tiles[tileNum + 9].children[1].style.display = 'block';
                }
            }

            //대각선 공격
            if (movingTarget.getAttribute('id') == 'blackPawn' || movingTarget.getAttribute('id') == 'whitePawn') {
                if (tileNum % 8 != 0 && tiles[tileNum + 7] != null && tiles[tileNum + 7].lastElementChild != null && tiles[tileNum + 7].lastElementChild.getAttribute('class') == 'whiteTeam') {
                    tiles[tileNum + 7].firstElementChild.style.display = 'block';
                }
                if ((tileNum + 1) % 8 != 0 && tiles[tileNum + 9] != null && tiles[tileNum + 9].lastElementChild != null && tiles[tileNum + 9].lastElementChild.getAttribute('class') == 'whiteTeam') {
                    tiles[tileNum + 9].firstElementChild.style.display = 'block';
                }
            }

            if (tileNum + 8 < 64) {
                if (tiles[tileNum + 8].children[2] != null) {
                    return;
                }
                tiles[tileNum + 8].firstElementChild.style.display = 'block';
            }
            if (tileNum + 16 < 64 && movingTarget.dataset.firstMove == '-1') {
                if (tiles[tileNum + 16].children[2] != null) {
                    return;
                }
                tiles[tileNum + 16].firstElementChild.style.display = 'block';
            }

            clickedNum = tileNum;
        }
    }
}

function pawnMove(movingPoint) {
    if (movingTarget.getAttribute('id') == 'whitePawn' || movingTarget.getAttribute('id') == 'blackPawn') {  //움직이는 말이 아직 이동하지 않은 폰일 때
        movingTarget.dataset.curMove = ++count;
        if (movingTarget.dataset.firstMove == '-1') {
            if (Math.abs(movingPoint.parentElement.getAttribute('value') - movingTarget.parentElement.getAttribute('value')) == 8) {
                movingTarget.dataset.firstMove = '1';  //첫 이동에 한칸 이동
            }
            else if (Math.abs(movingPoint.parentElement.getAttribute('value') - movingTarget.parentElement.getAttribute('value')) == 16) {
                movingTarget.dataset.firstMove = '2';  //첫 이동에 두 칸 이동
            }
        }
        if(movingPoint.parentElement.getAttribute('value') < 8){  //백 폰 승격y
            promotion.style.display = 'block';
        }
        if(movingPoint.parentElement.getAttribute('value') >= 56){  //흑 폰 승격
            promotion.style.display = 'block';
        }
    }
}



whitePawnMove();
blackPawnMove();