const whiteRook = document.querySelectorAll('#whiteRook');
const blackRook = document.querySelectorAll('#blackRook');

function whiteRookMove() {
    for (i = 0; i < whiteRook.length; i++) {
        whiteRook[i].onclick = function () {
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
                if (tiles[movingPoint].children[1] != null && tiles[movingPoint].children[1].getAttribute('class') == 'whiteTeam') {  //가다가 백팀을 만나면
                    break; //이동 불가
                }
                if (tiles[movingPoint].children[1] != null && tiles[movingPoint].children[1].getAttribute('class') == 'blackTeam') {  //가다가 흑팀을 만나면
                    tiles[movingPoint].firstElementChild.style.display = 'block';
                    break; //이동 불가
                }
                tiles[movingPoint].firstElementChild.style.display = 'block';
            }
            movingPoint = tileNum;
            while ((movingPoint) % 8 != 0) {  //왼쪽 맨 끝 칸까지 한칸씩 이동
                movingPoint--;
                if (tiles[movingPoint].children[1] != null && tiles[movingPoint].children[1].getAttribute('class') == 'whiteTeam') {  //가다가 백팀을 만나면
                    break; //이동 불가
                }
                if (tiles[movingPoint].children[1] != null && tiles[movingPoint].children[1].getAttribute('class') == 'blackTeam') {  //가다가 흑팀을 만나면
                    tiles[movingPoint].firstElementChild.style.display = 'block';
                    break; //이동 불가
                }
                tiles[movingPoint].firstElementChild.style.display = 'block';
            }
            movingPoint = tileNum;
            while(movingPoint - 8 >= 0) {
                movingPoint -= 8;
                if(tiles[movingPoint].children[1] != null && tiles[movingPoint].children[1].getAttribute('class') == 'whiteTeam'){
                    break;
                }
                if(tiles[movingPoint].children[1] != null && tiles[movingPoint].children[1].getAttribute('class') == 'blackTeam'){
                    tiles[movingPoint].firstElementChild.style.display = 'block';
                    break;
                }
                tiles[movingPoint].firstElementChild.style.display = 'block';
            }
            movingPoint = tileNum;
            while(movingPoint + 8 < 64) {
                movingPoint += 8;
                if(tiles[movingPoint].children[1] != null && tiles[movingPoint].children[1].getAttribute('class') == 'whiteTeam'){
                    break;
                }
                if(tiles[movingPoint].children[1] != null && tiles[movingPoint].children[1].getAttribute('class') == 'blackTeam'){
                    tiles[movingPoint].firstElementChild.style.display = 'block';
                    break;
                }
                tiles[movingPoint].firstElementChild.style.display = 'block';
            }

            clickedNum = tileNum;
        }
    }
}


function blackRookMove() {
    for (i = 0; i < blackRook.length; i++) {
        blackRook[i].onclick = function () {
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
                if (tiles[movingPoint].children[1] != null && tiles[movingPoint].children[1].getAttribute('class') == 'blackTeam') {  //가다가 백팀을 만나면
                    break; //이동 불가
                }
                if (tiles[movingPoint].children[1] != null && tiles[movingPoint].children[1].getAttribute('class') == 'whiteTeam') {  //가다가 흑팀을 만나면
                    tiles[movingPoint].firstElementChild.style.display = 'block';
                    break; //이동 불가
                }
                tiles[movingPoint].firstElementChild.style.display = 'block';
            }
            movingPoint = tileNum;
            while ((movingPoint) % 8 != 0) {  //왼쪽 맨 끝 칸까지 한칸씩 이동
                movingPoint--;
                if (tiles[movingPoint].children[1] != null && tiles[movingPoint].children[1].getAttribute('class') == 'blackTeam') {  //가다가 백팀을 만나면
                    break; //이동 불가
                }
                if (tiles[movingPoint].children[1] != null && tiles[movingPoint].children[1].getAttribute('class') == 'whiteTeam') {  //가다가 흑팀을 만나면
                    tiles[movingPoint].firstElementChild.style.display = 'block';
                    break; //이동 불가
                }
                tiles[movingPoint].firstElementChild.style.display = 'block';
            }
            movingPoint = tileNum;
            while(movingPoint - 8 >= 0) {
                movingPoint -= 8;
                if(tiles[movingPoint].children[1] != null && tiles[movingPoint].children[1].getAttribute('class') == 'blackTeam'){
                    break;
                }
                if(tiles[movingPoint].children[1] != null && tiles[movingPoint].children[1].getAttribute('class') == 'whiteTeam'){
                    tiles[movingPoint].firstElementChild.style.display = 'block';
                    break;
                }
                tiles[movingPoint].firstElementChild.style.display = 'block';
            }
            movingPoint = tileNum;
            while(movingPoint + 8 < 64) {
                movingPoint += 8;
                if(tiles[movingPoint].children[1] != null && tiles[movingPoint].children[1].getAttribute('class') == 'blackTeam'){
                    break;
                }
                if(tiles[movingPoint].children[1] != null && tiles[movingPoint].children[1].getAttribute('class') == 'whiteTeam'){
                    tiles[movingPoint].firstElementChild.style.display = 'block';
                    break;
                }
                tiles[movingPoint].firstElementChild.style.display = 'block';
            }

            clickedNum = tileNum;
        }
    }
}

whiteRookMove();
blackRookMove();