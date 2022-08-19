const whiteKnight = document.querySelectorAll('#whiteKnight');
const blackKnight = document.querySelectorAll('#blackKnight');

function whiteKnightMove() {
    for (i = 0; i < whiteKnight.length; i++) {
        whiteKnight[i].onclick = function () {
            movingTarget = this;
            const tileNum = +this.parentElement.getAttribute('value');

            secondClick(tileNum);
            if (clicked) {
                clicked = false;
                return;
            }

            clearMovingPoint();

            if((tileNum - 1) % 8 != 0 && tileNum % 8 != 0 && tileNum - 10 >= 0){  //맨 왼쪽 위
                if(tiles[tileNum - 10].children[1] == null || tiles[tileNum - 10].children[1].getAttribute('class') == 'blackTeam'){
                    tiles[tileNum - 10].firstElementChild.style.display = 'block';
                }
            }
            if(tileNum % 8 != 0 && tileNum - 17 >= 0){  //왼쪽 맨 위
                if(tiles[tileNum - 17].children[1] == null || tiles[tileNum - 17].children[1].getAttribute('class') == 'blackTeam'){
                    tiles[tileNum - 17].firstElementChild.style.display = 'block';
                }
            }
            if((tileNum + 2) % 8 != 0 && (tileNum + 1) % 8 != 0 && tileNum - 6 >= 0){  //맨 오른쪽 위
                if(tiles[tileNum - 6].children[1] == null || tiles[tileNum - 6].children[1].getAttribute('class') == 'blackTeam'){
                    tiles[tileNum - 6].firstElementChild.style.display = 'block';
                }
            }
            if((tileNum + 1) % 8 != 0 && tileNum - 15 >= 0){  //오른쪽 맨 위
                if(tiles[tileNum - 15].children[1] == null || tiles[tileNum - 15].children[1].getAttribute('class') == 'blackTeam'){
                    tiles[tileNum - 15].firstElementChild.style.display = 'block';
                }
            }
            if((tileNum - 1) % 8 != 0 && tileNum % 8 != 0 && tileNum + 6 <64){  //맨 왼쪽 아래
                if(tiles[tileNum + 6].children[1] == null || tiles[tileNum + 6].children[1].getAttribute('class') == 'blackTeam'){
                    tiles[tileNum + 6].firstElementChild.style.display = 'block';
                }
            }
            if(tileNum % 8 != 0 && tileNum + 15 < 64){  //왼쪽 맨 아래
                if(tiles[tileNum + 15].children[1] == null || tiles[tileNum + 15].children[1].getAttribute('class') == 'blackTeam'){
                    tiles[tileNum + 15].firstElementChild.style.display = 'block';
                }
            }
            if((tileNum + 2) % 8 != 0 && (tileNum + 1) % 8 != 0 && tileNum + 10 < 64){  //맨 오른쪽 아래
                if(tiles[tileNum + 10].children[1] == null || tiles[tileNum + 10].children[1].getAttribute('class') == 'blackTeam'){
                    tiles[tileNum + 10].firstElementChild.style.display = 'block';
                }
            }
            if((tileNum + 1) % 8 != 0 && tileNum + 10 < 64){  //오른쪽 맨 아래
                if(tiles[tileNum + 17].children[1] == null || tiles[tileNum + 17].children[1].getAttribute('class') == 'blackTeam'){
                    tiles[tileNum + 17].firstElementChild.style.display = 'block';
                }
            }
            clickedNum = tileNum;
        }
    }
}


function blackKnightMove() {
    for (i = 0; i < blackKnight.length; i++) {
        blackKnight[i].onclick = function () {
            movingTarget = this;
            const tileNum = +this.parentElement.getAttribute('value');

            secondClick(tileNum);
            if (clicked) {
                clicked = false;
                return;
            }
            
            
            clearMovingPoint();
            if((tileNum - 1) % 8 != 0 && tileNum % 8 != 0 && tileNum - 10 >= 0){  //맨 왼쪽 위
                if(tiles[tileNum - 10].children[1] == null || tiles[tileNum - 10].children[1].getAttribute('class') == 'whiteTeam'){
                    tiles[tileNum - 10].firstElementChild.style.display = 'block';
                }
            }
            if(tileNum % 8 != 0 && tileNum - 17 >= 0){  //왼쪽 맨 위
                if(tiles[tileNum - 17].children[1] == null || tiles[tileNum - 17].children[1].getAttribute('class') == 'whiteTeam'){
                    tiles[tileNum - 17].firstElementChild.style.display = 'block';
                }
            }
            if((tileNum + 2) % 8 != 0 && (tileNum + 1) % 8 != 0 && tileNum - 6 >= 0){  //맨 오른쪽 위
                if(tiles[tileNum - 6].children[1] == null || tiles[tileNum - 6].children[1].getAttribute('class') == 'whiteTeam'){
                    tiles[tileNum - 6].firstElementChild.style.display = 'block';
                }
            }
            if((tileNum + 1) % 8 != 0 && tileNum - 15 >= 0){  //오른쪽 맨 위
                if(tiles[tileNum - 15].children[1] == null || tiles[tileNum - 15].children[1].getAttribute('class') == 'whiteTeam'){
                    tiles[tileNum - 15].firstElementChild.style.display = 'block';
                }
            }
            if((tileNum - 1) % 8 != 0 && tileNum % 8 != 0 && tileNum + 6 < 64){  //맨 왼쪽 아래
                if(tiles[tileNum + 6].children[1] == null || tiles[tileNum + 6].children[1].getAttribute('class') == 'whiteTeam'){
                    tiles[tileNum + 6].firstElementChild.style.display = 'block';
                }
            }
            if(tileNum % 8 != 0 && tileNum + 15 < 64){  //왼쪽 맨 아래
                if(tiles[tileNum + 15].children[1] == null || tiles[tileNum + 15].children[1].getAttribute('class') == 'whiteTeam'){
                    tiles[tileNum + 15].firstElementChild.style.display = 'block';
                }
            }
            if((tileNum + 2) % 8 != 0 && (tileNum + 1) % 8 != 0 && tileNum + 10 < 64){  //맨 오른쪽 아래
                
                if(tiles[tileNum + 10].children[1] == null || tiles[tileNum + 10].children[1].getAttribute('class') == 'whiteTeam'){
                    tiles[tileNum + 10].firstElementChild.style.display = 'block';
                }
            }
            if((tileNum + 1) % 8 != 0 && tileNum + 17 < 64){  //오른쪽 맨 아래
                if(tiles[tileNum + 17].children[1] == null || tiles[tileNum + 17].children[1].getAttribute('class') == 'whiteTeam'){
                    tiles[tileNum + 17].firstElementChild.style.display = 'block';
                }
            }

            clickedNum = tileNum;
        }
    }
}

whiteKnightMove();
blackKnightMove();