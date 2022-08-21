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
        if(movingTarget.getAttribute('id') == 'whitePawn' || movingTarget.getAttribute('id') == 'blackPawn'){
            movingTarget.dataset.curMove = ++count; //몇 번째 턴인지 카운트
            if(Math.abs(movingPoint.parentElement.getAttribute('value') - movingTarget.parentElement.getAttribute('value')) == 8){
                movingTarget.dataset.firstMove = '1';
            }
            else if(Math.abs(movingPoint.parentElement.getAttribute('value') - movingTarget.parentElement.getAttribute('value')) == 16){
                movingTarget.dataset.firstMove = '2';
            }
        }
        this.parentNode.appendChild(movingTarget);
    }
}

for (i = 0; i < 64; i++) {
    const specialPoint = tiles[i].children[1];
    specialPoint.onclick = function () { 
        clearMovingPoint();
        if (movingTarget.getAttribute('class') == 'whiteTeam') {
            tiles[+this.parentElement.getAttribute('value') + 8].removeChild(tiles[+this.parentElement.getAttribute('value') + 8].children[2]);
        }
        if (movingTarget.getAttribute('class') == 'blackTeam') {
            tiles[+this.parentElement.getAttribute('value') - 8].removeChild(tiles[+this.parentElement.getAttribute('value') - 8].children[2]);
        }
        this.parentNode.appendChild(movingTarget);
    }
}