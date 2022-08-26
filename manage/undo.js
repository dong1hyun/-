let movedPiece;  //이전 턴에서 움직인 말
let movedLo  //이전 턴에서 움직인 말의 위치
let diedPiece;  //이전 턴에서 죽은 말
let diedLo  //이전 턴에서 죽은 말의 위치
let undid = false;
let movementType = -1; //이전의 말들의 움직임이 케슬링이면 0 앙파상이면 1 폰의 첫 움직임이면 2 승격이었으면 3
const undo = document.querySelector('#undo');

undo.onclick = function() {  //이전 턴으로 되돌림
    if(undid) {
        alert("이미 되돌렸습니다.");
        return;
    }
    if(movementType == 0){  //케슬링
        console.log("0");
        movedPiece.dataset.firstMove = -1;
        diedPiece.dataset.firstMove = -1;
        tiles[movedLo].appendChild(movedPiece);
        tiles[diedLo].appendChild(diedPiece);
    }
    else if(movementType == 1){  //앙파상
        tiles[movedLo].appendChild(movedPiece);
        tiles[diedLo].appendChild(diedPiece);
    }
    else if(movementType == 2){  //폰의 첫 움직임
        movedPiece.dataset.firstMove = -1;
        if(movedPiece != null){
            tiles[movedLo].appendChild(movedPiece);
        }
        if(diedPiece != null){
            tiles[diedLo].appendChild(diedPiece);
        }
    }
    else if(movementType == 3){  //승격
        if(movedPiece.getAttribute('class') == 'whiteTeam'){
            movedPiece.setAttribute('src', 'images/white/pawn.jpg')
            movedPiece.setAttribute('id', 'whitePawn');
            whitePawnSet(movedPiece);
        }
        else{
            movedPiece.setAttribute('src', 'images/black/pawn.jpg')
            movedPiece.setAttribute('id', 'blackPawn');
            blackPawnSet(movedPiece);
        }

        if(movedPiece != null){
            tiles[movedLo].appendChild(movedPiece);
        }
        if(diedPiece != null){
            tiles[diedLo].appendChild(diedPiece);
        }
    }
    else{  //그 외의 모든 움직임일 때
        if(movedPiece != null){
            tiles[movedLo].appendChild(movedPiece);
        }
        if(diedPiece != null){
            tiles[diedLo].appendChild(diedPiece);
        }
    }
    count--;
    undid = true;
    movementType = -1;   
    movedPiece = null;
    diedPiece = null;
}