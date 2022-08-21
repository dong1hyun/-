const whiteBishop = document.querySelectorAll('#whiteBishop');
const blackBishop = document.querySelectorAll('#blackBishop');

function whiteBishopMove() {
    for (i = 0; i < whiteBishop.length; i++) {
        whiteBishop[i].onclick = function () {
            movingTarget = this;
            const tileNum = +this.parentElement.getAttribute('value');

            secondClick(tileNum);
            if (clicked) {
                clicked = false;
                return;
            }

            clearMovingPoint();

            let movingPoint = tileNum;

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
            while((movingPoint + 1) % 8 != 0 && movingPoint <= 55) {  //오른쪽 아래 칸까지 한 칸씩 이동
                movingPoint += 9;
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
            while((movingPoint) % 8 != 0 && movingPoint <= 55) {
                movingPoint += 7;
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
    }
}


function blackBishopMove() {
    for (i = 0; i < blackBishop.length; i++) {
        blackBishop[i].onclick = function () {
            movingTarget = this;
            const tileNum = +this.parentElement.getAttribute('value');

            secondClick(tileNum);
            if (clicked) {
                clicked = false;
                return;
            }

            clearMovingPoint();

            let movingPoint = tileNum;

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
            while((movingPoint + 1) % 8 != 0 && movingPoint <= 55) {  //오른쪽 아래 칸까지 한 칸씩 이동
                movingPoint += 9;
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
            while((movingPoint) % 8 != 0 && movingPoint <= 55) {
                movingPoint += 7;
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
    }
}

whiteBishopMove();
blackBishopMove();