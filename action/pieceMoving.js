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


function clearMovingPoint() {  //체스판에 있는 하늘색 원을 모두 제거
    for (let i = 0; i < 64; i++) {
        tiles[i].firstElementChild.style.display = 'none';
    }
}


for (i = 0; i < 64; i++) {
    const movingPoint = tiles[i].firstElementChild;

    movingPoint.onclick = function () {  //하늘색 원을 클릭 했을 때 말이 이동 + 상대 말이 있으면 제거
        clearMovingPoint();
        if (movingTarget.getAttribute('class') == 'whiteTeam' && this.nextElementSibling != null && this.nextElementSibling.getAttribute('class') == 'blackTeam') {
            movingPoint.parentElement.removeChild(this.nextElementSibling);
        }
        if (movingTarget.getAttribute('class') == 'blackTeam' && this.nextElementSibling != null && this.nextElementSibling.getAttribute('class') == 'whiteTeam') {
            movingPoint.parentElement.removeChild(this.nextElementSibling);
        }
        this.parentNode.appendChild(movingTarget);
    }
}