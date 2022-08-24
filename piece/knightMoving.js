const whiteKnight = document.querySelectorAll('#whiteKnight');
const blackKnight = document.querySelectorAll('#blackKnight');

function whiteKnightMove() {
    if(whiteMessage()) return;  //백 차례가 아니면 종료
    movingTarget = this;
    const tileNum = +this.parentElement.getAttribute('value');

    secondClick(tileNum);
    if (clicked) {
        clicked = false;
        return;
    }

    clearMovingPoint();

    if((tileNum - 1) % 8 != 0 && tileNum % 8 != 0 && tileNum - 10 >= 0){  //맨 왼쪽 위
        if(tiles[tileNum - 10].children[2] == null || tiles[tileNum - 10].children[2].getAttribute('class') == 'blackTeam'){
            tiles[tileNum - 10].firstElementChild.style.display = 'block';
        }
    }
    if(tileNum % 8 != 0 && tileNum - 17 >= 0){  //왼쪽 맨 위
        if(tiles[tileNum - 17].children[2] == null || tiles[tileNum - 17].children[2].getAttribute('class') == 'blackTeam'){
            tiles[tileNum - 17].firstElementChild.style.display = 'block';
        }
    }
    if((tileNum + 2) % 8 != 0 && (tileNum + 1) % 8 != 0 && tileNum - 6 >= 0){  //맨 오른쪽 위
        if(tiles[tileNum - 6].children[2] == null || tiles[tileNum - 6].children[2].getAttribute('class') == 'blackTeam'){
            tiles[tileNum - 6].firstElementChild.style.display = 'block';
        }
    }
    if((tileNum + 1) % 8 != 0 && tileNum - 15 >= 0){  //오른쪽 맨 위
        if(tiles[tileNum - 15].children[2] == null || tiles[tileNum - 15].children[2].getAttribute('class') == 'blackTeam'){
            tiles[tileNum - 15].firstElementChild.style.display = 'block';
        }
    }
    if((tileNum - 1) % 8 != 0 && tileNum % 8 != 0 && tileNum + 6 <64){  //맨 왼쪽 아래
        if(tiles[tileNum + 6].children[2] == null || tiles[tileNum + 6].children[2].getAttribute('class') == 'blackTeam'){
            tiles[tileNum + 6].firstElementChild.style.display = 'block';
        }
    }
    if(tileNum % 8 != 0 && tileNum + 15 < 64){  //왼쪽 맨 아래
        if(tiles[tileNum + 15].children[2] == null || tiles[tileNum + 15].children[2].getAttribute('class') == 'blackTeam'){
            tiles[tileNum + 15].firstElementChild.style.display = 'block';
        }
    }
    if((tileNum + 2) % 8 != 0 && (tileNum + 1) % 8 != 0 && tileNum + 10 < 64){  //맨 오른쪽 아래
        if(tiles[tileNum + 10].children[2] == null || tiles[tileNum + 10].children[2].getAttribute('class') == 'blackTeam'){
            tiles[tileNum + 10].firstElementChild.style.display = 'block';
        }
    }
    if((tileNum + 1) % 8 != 0 && tileNum + 10 < 64){  //오른쪽 맨 아래
        if(tiles[tileNum + 17].children[2] == null || tiles[tileNum + 17].children[2].getAttribute('class') == 'blackTeam'){
            tiles[tileNum + 17].firstElementChild.style.display = 'block';
        }
    }
    clickedNum = tileNum;
}

function whiteKnightSet(target) {
    target.onclick = whiteKnightMove;
}

for(i = 0; i < whiteKnight.length; i++){
    whiteKnightSet(whiteKnight[i]);
}

function blackKnightMove() {
    if(blackMessage()) return;  //흑 차례가 아니면 종료
    movingTarget = this;
    const tileNum = +this.parentElement.getAttribute('value');

    secondClick(tileNum);
    if (clicked) {
        clicked = false;
        return;
    }
    
    
    clearMovingPoint();
    if((tileNum - 1) % 8 != 0 && tileNum % 8 != 0 && tileNum - 10 >= 0){  //맨 왼쪽 위
        if(tiles[tileNum - 10].children[2] == null || tiles[tileNum - 10].children[2].getAttribute('class') == 'whiteTeam'){
            tiles[tileNum - 10].firstElementChild.style.display = 'block';
        }
    }
    if(tileNum % 8 != 0 && tileNum - 17 >= 0){  //왼쪽 맨 위
        if(tiles[tileNum - 17].children[2] == null || tiles[tileNum - 17].children[2].getAttribute('class') == 'whiteTeam'){
            tiles[tileNum - 17].firstElementChild.style.display = 'block';
        }
    }
    if((tileNum + 2) % 8 != 0 && (tileNum + 1) % 8 != 0 && tileNum - 6 >= 0){  //맨 오른쪽 위
        if(tiles[tileNum - 6].children[2] == null || tiles[tileNum - 6].children[2].getAttribute('class') == 'whiteTeam'){
            tiles[tileNum - 6].firstElementChild.style.display = 'block';
        }
    }
    if((tileNum + 1) % 8 != 0 && tileNum - 15 >= 0){  //오른쪽 맨 위
        if(tiles[tileNum - 15].children[2] == null || tiles[tileNum - 15].children[2].getAttribute('class') == 'whiteTeam'){
            tiles[tileNum - 15].firstElementChild.style.display = 'block';
        }
    }
    if((tileNum - 1) % 8 != 0 && tileNum % 8 != 0 && tileNum + 6 < 64){  //맨 왼쪽 아래
        if(tiles[tileNum + 6].children[2] == null || tiles[tileNum + 6].children[2].getAttribute('class') == 'whiteTeam'){
            tiles[tileNum + 6].firstElementChild.style.display = 'block';
        }
    }
    if(tileNum % 8 != 0 && tileNum + 15 < 64){  //왼쪽 맨 아래
        if(tiles[tileNum + 15].children[2] == null || tiles[tileNum + 15].children[2].getAttribute('class') == 'whiteTeam'){
            tiles[tileNum + 15].firstElementChild.style.display = 'block';
        }
    }
    if((tileNum + 2) % 8 != 0 && (tileNum + 1) % 8 != 0 && tileNum + 10 < 64){  //맨 오른쪽 아래
        
        if(tiles[tileNum + 10].children[2] == null || tiles[tileNum + 10].children[2].getAttribute('class') == 'whiteTeam'){
            tiles[tileNum + 10].firstElementChild.style.display = 'block';
        }
    }
    if((tileNum + 1) % 8 != 0 && tileNum + 17 < 64){  //오른쪽 맨 아래
        if(tiles[tileNum + 17].children[2] == null || tiles[tileNum + 17].children[2].getAttribute('class') == 'whiteTeam'){
            tiles[tileNum + 17].firstElementChild.style.display = 'block';
        }
    }

    clickedNum = tileNum;
}

function blackKnightSet(target) {
    target.onclick = blackKnightMove;
}

for(i = 0; i < blackKnight.length; i++){
    blackKnightSet(blackKnight[i]);
}