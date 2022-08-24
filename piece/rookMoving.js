const whiteRook = document.querySelectorAll('#whiteRook');
const blackRook = document.querySelectorAll('#blackRook');

function whiteRookMove() {
    if(whiteMessage()) return;  //백 차례가 아니면 종료
    movingTarget = this;
    const tileNum = +this.parentElement.getAttribute('value');

    secondClick(tileNum);
    if (clicked) {
        clicked = false;
        return;
    }

    clearMovingPoint();

    let movingPoint = tileNum;

    while ((movingPoint + 1) % 8 != 0) {  //오른쪽 맨 끝 칸까지 한칸씩 이동
        movingPoint++;
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'whiteTeam') {  //가다가 백팀을 만나면
            break; //이동 불가
        }
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'blackTeam') {  //가다가 흑팀을 만나면
            tiles[movingPoint].firstElementChild.style.display = 'block';
            break; //이동 불가
        }
        tiles[movingPoint].firstElementChild.style.display = 'block';
    }
    movingPoint = tileNum;
    while ((movingPoint) % 8 != 0) {  //왼쪽 맨 끝 칸까지 한칸씩 이동
        movingPoint--;
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'whiteTeam') {  //가다가 백팀을 만나면
            break; //이동 불가
        }
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'blackTeam') {  //가다가 흑팀을 만나면
            tiles[movingPoint].firstElementChild.style.display = 'block';
            break; //이동 불가
        }
        tiles[movingPoint].firstElementChild.style.display = 'block';
    }
    movingPoint = tileNum;
    while(movingPoint - 8 >= 0) {
        movingPoint -= 8;
        if(tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'whiteTeam'){
            break;
        }
        if(tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'blackTeam'){
            tiles[movingPoint].firstElementChild.style.display = 'block';
            break;
        }
        tiles[movingPoint].firstElementChild.style.display = 'block';
    }
    movingPoint = tileNum;
    while(movingPoint + 8 < 64) {
        movingPoint += 8;
        if(tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'whiteTeam'){
            break;
        }
        if(tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'blackTeam'){
            tiles[movingPoint].firstElementChild.style.display = 'block';
            break;
        }
        tiles[movingPoint].firstElementChild.style.display = 'block';
    }

    clickedNum = tileNum;
}

function whiteRookSet(target) {
    target.onclick = whiteRookMove;
}

for(i = 0; i < whiteRook.length; i++){
    whiteRookSet(whiteRook[i]);
}

function blackRookMove() {
    if(blackMessage()) return;  //흑 차례가 아니면 종료
    movingTarget = this;
    const tileNum = +this.parentElement.getAttribute('value');

    secondClick(tileNum);
    if (clicked) {
        clicked = false;
        return;
    }

    clearMovingPoint();

    let movingPoint = tileNum;

    while ((movingPoint + 1) % 8 != 0) {  //오른쪽 맨 끝 칸까지 한칸씩 이동
        movingPoint++;
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'blackTeam') {  //가다가 백팀을 만나면
            break; //이동 불가
        }
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'whiteTeam') {  //가다가 흑팀을 만나면
            tiles[movingPoint].firstElementChild.style.display = 'block';
            break; //이동 불가
        }
        tiles[movingPoint].firstElementChild.style.display = 'block';
    }
    movingPoint = tileNum;
    while ((movingPoint) % 8 != 0) {  //왼쪽 맨 끝 칸까지 한칸씩 이동
        movingPoint--;
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'blackTeam') {  //가다가 백팀을 만나면
            break; //이동 불가
        }
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'whiteTeam') {  //가다가 흑팀을 만나면
            tiles[movingPoint].firstElementChild.style.display = 'block';
            break; //이동 불가
        }
        tiles[movingPoint].firstElementChild.style.display = 'block';
    }
    movingPoint = tileNum;
    while(movingPoint - 8 >= 0) {
        movingPoint -= 8;
        if(tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'blackTeam'){
            break;
        }
        if(tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'whiteTeam'){
            tiles[movingPoint].firstElementChild.style.display = 'block';
            break;
        }
        tiles[movingPoint].firstElementChild.style.display = 'block';
    }
    movingPoint = tileNum;
    while(movingPoint + 8 < 64) {
        movingPoint += 8;
        if(tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'blackTeam'){
            break;
        }
        if(tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'whiteTeam'){
            tiles[movingPoint].firstElementChild.style.display = 'block';
            break;
        }
        tiles[movingPoint].firstElementChild.style.display = 'block';
    }

    clickedNum = tileNum;
}

function blackRookSet(target) {
    target.onclick = blackRookMove;
}

for(i = 0; i < blackRook.length; i++){
    blackRookSet(blackRook[i]);
}