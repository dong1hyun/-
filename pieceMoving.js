const whitePawn = document.querySelectorAll('#whitePawn');
const blackPawn = document.querySelector('#blackPawn');
let movingTarget;
let clickedNum = -1;  //클릭된 말의 번호 (클릭 되지 않았으면 -1)

function clearMovingPoint() {
    for (let i = 0; i < 64; i++) {
        tiles[i].firstElementChild.style.display = 'none';
    }
}


for (i = 0; i < 64; i++) {
    const movingPoint = tiles[i].firstElementChild;
    movingPoint.onclick = function () {
        clearMovingPoint();
        this.parentNode.appendChild(movingTarget);
    }
}

function pawnMove() {
    for (i = 0; i < whitePawn.length; i++) {
        whitePawn[i].onclick = function () {
            
            movingTarget = this;
            const tileNum = this.parentElement.getAttribute('value');
            if (tileNum == clickedNum) {
                clearMovingPoint();
                clickedNum = -1;
                return;
            }
           
            clearMovingPoint(); 
            const ch1 = tiles[tileNum - 8].children;
            const ch2 = tiles[tileNum - 16].children;
            if(ch1[1] != null && ch1[1].getAttribute('class') == 'whiteTeam'){
                return;
            }
            tiles[tileNum - 8].firstElementChild.style.display = 'block';
            if(ch2[1] != null && ch2[1].getAttribute('class') == 'whiteTeam'){
                return;
            }
            tiles[tileNum - 16].firstElementChild.style.display = 'block';
            clickedNum = tileNum;
        }
    }
}


pawnMove();