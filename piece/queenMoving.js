const whiteQueen = document.querySelectorAll('#whiteQueen');
const blackQueen = document.querySelectorAll('#blackQueen');


function whiteQueenMove() {
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
    while (movingPoint - 8 >= 0) {
        movingPoint -= 8;
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'whiteTeam') {
            break;
        }
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'blackTeam') {
            tiles[movingPoint].firstElementChild.style.display = 'block';
            break;
        }
        tiles[movingPoint].firstElementChild.style.display = 'block';
    }
    movingPoint = tileNum;
    while (movingPoint + 8 < 64) {
        movingPoint += 8;
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'whiteTeam') {
            break;
        }
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'blackTeam') {
            tiles[movingPoint].firstElementChild.style.display = 'block';
            break;
        }
        tiles[movingPoint].firstElementChild.style.display = 'block';
    }
    movingPoint = tileNum;
    //대각선

    while ((movingPoint + 1) % 8 != 0 && movingPoint >= 8) {  //오른쪽 위 끝 칸까지 한 칸씩 이동
        movingPoint -= 7;
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
    while ((movingPoint) % 8 != 0 && movingPoint >= 8) {  //왼쪽 위 칸까지 한 칸씩 이동
        movingPoint -= 9;
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
    while ((movingPoint + 1) % 8 != 0 && movingPoint <= 55) {  //오른쪽 아래 칸까지 한 칸씩 이동
        movingPoint += 9;
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'whiteTeam') {
            break;
        }
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'blackTeam') {
            tiles[movingPoint].firstElementChild.style.display = 'block';
            break;
        }
        tiles[movingPoint].firstElementChild.style.display = 'block';
    }
    movingPoint = tileNum;
    while ((movingPoint) % 8 != 0 && movingPoint <= 55) {
        movingPoint += 7;
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'whiteTeam') {
            break;
        }
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'blackTeam') {
            tiles[movingPoint].firstElementChild.style.display = 'block';
            break;
        }
        tiles[movingPoint].firstElementChild.style.display = 'block';
    }

    clickedNum = tileNum;
}

function whiteQueenSet(target) {
    target.onclick = whiteQueenMove;
}

for (i = 0; i < whiteQueen.length; i++) {
    whiteQueenSet(whiteQueen[i]);
}



function blackQueenMove() {
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
    while (movingPoint - 8 >= 0) {
        movingPoint -= 8;
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'blackTeam') {
            break;
        }
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'whiteTeam') {
            tiles[movingPoint].firstElementChild.style.display = 'block';
            break;
        }
        tiles[movingPoint].firstElementChild.style.display = 'block';
    }
    movingPoint = tileNum;
    while (movingPoint + 8 < 64) {
        movingPoint += 8;
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'blackTeam') {
            break;
        }
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'whiteTeam') {
            tiles[movingPoint].firstElementChild.style.display = 'block';
            break;
        }
        tiles[movingPoint].firstElementChild.style.display = 'block';
    }
    movingPoint = tileNum;
    //대각선
    while ((movingPoint + 1) % 8 != 0 && movingPoint >= 8) {  //오른쪽 위 끝 칸까지 한 칸씩 이동
        movingPoint -= 7;
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
    while ((movingPoint) % 8 != 0 && movingPoint >= 8) {  //왼쪽 위 칸까지 한 칸씩 이동
        movingPoint -= 9;
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
    while ((movingPoint + 1) % 8 != 0 && movingPoint <= 55) {  //오른쪽 아래 칸까지 한 칸씩 이동
        movingPoint += 9;
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'blackTeam') {
            break;
        }
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'whiteTeam') {
            tiles[movingPoint].firstElementChild.style.display = 'block';
            break;
        }
        tiles[movingPoint].firstElementChild.style.display = 'block';
    }
    movingPoint = tileNum;
    while ((movingPoint) % 8 != 0 && movingPoint <= 55) {
        movingPoint += 7;
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'blackTeam') {
            break;
        }
        if (tiles[movingPoint].children[2] != null && tiles[movingPoint].children[2].getAttribute('class') == 'whiteTeam') {
            tiles[movingPoint].firstElementChild.style.display = 'block';
            break;
        }
        tiles[movingPoint].firstElementChild.style.display = 'block';
    }

    clickedNum = tileNum;
}

function blackQueenSet(target) {
    target.onclick = blackQueenMove;
}

for (i = 0; i < blackQueen.length; i++) {
    blackQueenSet(blackQueen[i]);
}

