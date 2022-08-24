let movedPiece;  //이전 턴에서 움직인 말
let movedLo  //이전 턴에서 움직인 말의 위치
let diedPiece;  //이전 턴에서 죽은 말
let diedLo  //이전 턴에서 죽은 말의 위치
let undid = false;
let specialMovement = 0; //이전의 말들의 움직임이 케슬링이면 0 앙파상이면 1 폰의 첫 움직임이면 2 
const undo = document.querySelector('#undo');

undo.onclick = function() {  //이전 턴으로 되돌림
    if(undid) {
        alert("이미 되돌렸습니다.");
        return;
    }
    if(specialMovement == 0){
        movedPiece.dataset.firstMove = -1;
        diedPiece.dataset.firstMove = -1;
        tiles[movedLo].appendChild(movedPiece);
        tiles[diedLo].appendChild(diedPiece);
    }
    else if(specialMovement == 1){  
        diedPiece.dataset.firstMove = -1;
        tiles[movedLo].appendChild(movedPiece);
        tiles[diedLo].appendChild(diedPiece);
    }
    else{
        movedPiece.dataset.firstMove = -1;
        tiles[movedLo].appendChild(movedPiece);
    }
    count--;
    undid = true;
}