const whitePawn = document.querySelectorAll('#whitePawn');
const blackPawn = document.querySelectorAll('#blackPawn');
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
        if(movingTarget.getAttribute('class') == 'whiteTeam' && this.nextElementSibling != null && this.nextElementSibling.getAttribute('class') == 'blackTeam'){
            movingPoint.parentElement.removeChild(this.nextElementSibling);
        }
        if(movingTarget.getAttribute('class') == 'blackTeam' && this.nextElementSibling != null && this.nextElementSibling.getAttribute('class') == 'whiteTeam'){
            movingPoint.parentElement.removeChild(this.nextElementSibling);
        }
        this.parentNode.appendChild(movingTarget);
    }
}

function whitePawnMove() {
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
            if(movingTarget.getAttribute('id') == 'blackPawn' || movingTarget.getAttribute('id') == 'whitePawn'){
                if(tiles[tileNum - 7].lastElementChild != null && tiles[tileNum - 7].lastElementChild.getAttribute('class') == 'blackTeam'){
                    tiles[tileNum - 7].firstElementChild.style.display = 'block';
                }
                if(tiles[tileNum - 9].lastElementChild != null && tiles[tileNum - 9].lastElementChild.getAttribute('class') == 'blackTeam'){
                    tiles[tileNum - 9].firstElementChild.style.display = 'block';
                }
            }

            const ch1 = tiles[tileNum - 8].children;
            const ch2 = tiles[tileNum - 16].children;
            if(ch1[1] != null){ 
                return;
            }
            tiles[tileNum - 8].firstElementChild.style.display = 'block';
            if(ch2[1] != null){
                return;
            }
            tiles[tileNum - 16].firstElementChild.style.display = 'block';
            clickedNum = tileNum;
        }
    }
}


function blackePawnMove() {
    for (i = 0; i < blackPawn.length; i++) {
        blackPawn[i].onclick = function () {
            movingTarget = this;
            const tileNum = this.parentElement.getAttribute('value');
            if (tileNum == clickedNum) {
                clearMovingPoint();
                clickedNum = -1;
                return;
            }
            
            clearMovingPoint(); 
            if(movingTarget.getAttribute('id') == 'blackPawn' || movingTarget.getAttribute('id') == 'whitePawn'){
                if(tiles[+tileNum + 7].lastElementChild != null && tiles[+tileNum + 7].lastElementChild.getAttribute('class') == 'whiteTeam'){
                    tiles[+tileNum + 7].firstElementChild.style.display = 'block';
                }
                if(tiles[+tileNum + 9].lastElementChild != null && tiles[+tileNum + 9].lastElementChild.getAttribute('class') == 'whiteTeam'){
                    tiles[+tileNum + 9].firstElementChild.style.display = 'block';
                }
            }

            const ch1 = tiles[+tileNum + 8].children;
            const ch2 = tiles[+tileNum + 16].children;
            
            if(ch1[1] != null){
                return;
            }   
            tiles[+tileNum + 8].firstElementChild.style.display = 'block';
            if(ch2[1] != null){
                return;
            }
            tiles[+tileNum + 16].firstElementChild.style.display = 'block';
            clickedNum = +tileNum;
        }
    }
}


whitePawnMove();
blackePawnMove();