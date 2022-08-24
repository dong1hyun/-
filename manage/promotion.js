const queen = document.querySelector('#queen');
const rook = document.querySelector('#rook');
const bishop = document.querySelector('#bishop');
const knight = document.querySelector('#knight');
const promotion = document.querySelector('#promotion');

function pieceSet(selectedPiece, piece, whiteCallback, blackCallback) {
    selectedPiece.onclick = function (){
        if(movingTarget.getAttribute('class') == 'whiteTeam'){
            movingTarget.setAttribute('src',`images/white/${piece}.jpg`);
            movingTarget.setAttribute('id', `white${piece}`);
            whiteCallback(movingTarget);
        }
        else{
            movingTarget.setAttribute('src',`images/black/${piece}.jpg`);
            movingTarget.setAttribute('id', `black${piece}`);
            blackCallback(movingTarget);
        }
        promotion.style.display = 'none';
    }
}

function PawnPromotion() {  //승격할 말을 선택했을 때
    pieceSet(queen, 'queen', () => whiteQueenSet(movingTarget), () => blackQueenSet(movingTarget));
    pieceSet(rook, 'rook', () => whiteRookSet(movingTarget), () => blackRookSet(movingTarget));
    pieceSet(bishop, 'bishop', () => whiteBishopSet(movingTarget), () => blackBishopSet(movingTarget));
    pieceSet(knight, 'knight', () => whiteKnightSet(movingTarget), () => blackKnightSet(movingTarget));
}


PawnPromotion();