let movingTarget;
let clickedNum = -1;  //클릭된 말의 번호 (클릭 되지 않았으면 -1)
let clicked = false;

function secondClick(curTileNum) {
    if (curTileNum == clickedNum) {
        clearMovingPoint();
        clickedNum = -1;
        clicked = true;
    }
}


function clearMovingPoint() {  //체스판에 있는 하늘색 말을 이동 포인트를 모두 제거
    for (let i = 0; i < 64; i++) {
        tiles[i].children[0].style.display = 'none';
        tiles[i].children[1].style.display = 'none';
    }
}


for (i = 0; i < 64; i++) {
    const movingPoint = tiles[i].firstElementChild;
    movingPoint.onclick = function () {  //하늘색 원을 클릭 했을 때 말이 이동 + 상대 말이 있으면 제거
        clearMovingPoint();
        if (movingTarget.getAttribute('class') == 'whiteTeam' && this.parentElement.children[2] != null && this.parentElement.children[2].getAttribute('class') == 'blackTeam') {
            movingPoint.parentElement.removeChild(this.parentElement.children[2]);
        }
        if (movingTarget.getAttribute('class') == 'blackTeam' && this.parentElement.children[2] != null && this.parentElement.children[2].getAttribute('class') == 'whiteTeam') {
            movingPoint.parentElement.removeChild(this.parentElement.children[2]);
        }
        
        pawnMove(movingPoint);
        
        if (movingTarget.getAttribute('id') == 'whiteKing' || movingTarget.getAttribute('id') == 'blackKing' || movingTarget.getAttribute('id') == 'whiteRook' || movingTarget.getAttribute('id') == 'blackRook' && movingTarget.dataset.firstMove == '-1') {  //움직이는 말이 킹이나 룩일 때
            movingTarget.dataset.firstMove = '1';
        }
        this.parentNode.appendChild(movingTarget);
    }
}

for (i = 0; i < 64; i++) {
    const specialPoint = tiles[i].children[1];
    specialPoint.onclick = function () {   //특수 이동 (앙파상, 케슬링)
        clearMovingPoint();
        if (movingTarget.getAttribute('class') == 'whiteTeam') {
            if (+this.parentElement.getAttribute('value') + 8 < 64) {
                tiles[+this.parentElement.getAttribute('value') + 8].removeChild(tiles[+this.parentElement.getAttribute('value') + 8].children[2]);
            }
        }
        if (movingTarget.getAttribute('class') == 'blackTeam') {
            if (+this.parentElement.getAttribute('value') - 8 >= 0) {
                tiles[+this.parentElement.getAttribute('value') - 8].removeChild(tiles[+this.parentElement.getAttribute('value') - 8].children[2]);
            }
        }
        if (movingTarget.getAttribute('id') == 'whiteKing' || movingTarget.getAttribute('id') == 'blackKing' || movingTarget.getAttribute('id') == 'whiteRook' || movingTarget.getAttribute('id') == 'blackRook') {
            movingTarget.dataset.firstMove = '1';
            const tileNum = specialPoint.parentElement.getAttribute('value');
            if (tileNum == 58) {  //퀸 사이드 케슬링
                tiles[59].appendChild(tiles[56].children[2]);
            }
            else if (tileNum == 62) {  //킹 사이드 케슬링
                tiles[61].appendChild(tiles[63].children[2]);
            }
            else if (tileNum == 6) {
                tiles[5].appendChild(tiles[7].children[2]);
            }
            else {
                tiles[3].appendChild(tiles[0].children[2]);
            }
        }
        this.parentNode.appendChild(movingTarget);
    }
}