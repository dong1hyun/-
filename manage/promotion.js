const queen = document.querySelector('#queen');
const rook = document.querySelector('#rook');
const bishop = document.querySelector('#bishop');
const knight = document.querySelector('#knight');
const promotion = document.querySelector('#promotion');

function pieceSet(selectedPiece, piece, Piece,whiteCallback, blackCallback) {
    selectedPiece.onclick = function (){
        if(movingTarget.getAttribute('class') == 'whiteTeam'){
            movingTarget.setAttribute('src',`images/white/${piece}.jpg`);
            movingTarget.setAttribute('id', `white${Piece}`);
            whiteCallback(movingTarget);
        }
        else{
            movingTarget.setAttribute('src',`images/black/${piece}.jpg`);
            movingTarget.setAttribute('id', `black${Piece}`);
            blackCallback(movingTarget);
        }
        promotion.style.display = 'none';
    }
}

function PawnPromotion() {  //승격할 말을 선택했을 때
    pieceSet(queen, 'queen', 'Queen',() => whiteQueenSet(movingTarget), () => blackQueenSet(movingTarget));
    pieceSet(rook, 'rook', 'Rook',() => whiteRookSet(movingTarget), () => blackRookSet(movingTarget));
    pieceSet(bishop, 'bishop', 'Bishop',() => whiteBishopSet(movingTarget), () => blackBishopSet(movingTarget));
    pieceSet(knight, 'knight', 'Knight',() => whiteKnightSet(movingTarget), () => blackKnightSet(movingTarget));
}


PawnPromotion();