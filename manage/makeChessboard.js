const $wrapper = document.querySelector('#wrapper');
const tiles = $wrapper.children  //체스판 모든 칸들의 유사배열객체
let count = 0;

function boardInit() {
    let c = 0;
    for (i = 1; i <= 8; i++) {  //행
        for (j = 1; j <= 8; j++) {  //열
            const $div = document.createElement('div')
            const $div2 = document.createElement('div');
            const $div3 = document.createElement('div');
            $div2.setAttribute('class', 'movingPoint');
            $div3.setAttribute('class', 'specialPoint');
            $div.setAttribute('value', c++);
            $div.appendChild($div2);
            $div.appendChild($div3);
            if (i % 2 != 0) {  //홀수 행일 때
                if (j % 2 != 0) {  //홀수 열만 
                    $div.setAttribute('id', 'greyTile');
                }
                else{
                    $div.setAttribute('id', 'whiteTile');
                }
            }
            else {  //짝수 행일 때
                if (j % 2 == 0) {
                    $div.setAttribute('id', 'greyTile');
                }
                else{
                    $div.setAttribute('id', 'whiteTile');
                }
            }
            $wrapper.appendChild($div);
        }
    }
}



function pawnInit() {
    for (i = 8; i < 16; i++) {  //흑 폰 세팅
        const blackPawn = document.createElement('img');
        blackPawn.setAttribute('src', 'images/black/pawn.jpg')
        blackPawn.setAttribute('id', 'blackPawn');
        blackPawn.setAttribute('class', 'blackTeam');
        blackPawn.setAttribute('data-first-move', '-1');  //속성 값이 -1이면 첫 이동 전임, 1이면 첫 이동으로 한 칸 이동함, 2이면 첫 이동으로 두칸 이동함 
        blackPawn.setAttribute('data-cur-move', '-1');  //가장 최근 이동한 턴
        tiles[i].appendChild(blackPawn);
    }
    for (i = 48; i < 56; i++) {  //백 폰 세팅
        const whitePawn = document.createElement('img');
        whitePawn.setAttribute('src', 'images/white/pawn.jpg')
        whitePawn.setAttribute('id', 'whitePawn');
        whitePawn.setAttribute('class', 'whiteTeam');
        whitePawn.setAttribute('data-first-move', '-1');  //속성 값이 -1이면 첫 이동 전임, 1이면 첫 이동으로 한 칸 이동함, 2이면 첫 이동으로 두칸 이동함
        whitePawn.setAttribute('data-cur-move', '-1');
        tiles[i].appendChild(whitePawn);
    }
}

function rookInit(n) {
    const blackRook = document.createElement('img');
    blackRook.setAttribute('src', 'images/black/rook.jpg')
    blackRook.setAttribute('id', 'blackRook');
    blackRook.setAttribute('class', 'blackTeam');
    blackRook.setAttribute('data-first-move', '-1') //속성 값이 -1이면 첫 이동 전임, 1이면 이미 이동했음
    tiles[n].appendChild(blackRook);

    const whiteRook = document.createElement('img');
    whiteRook.setAttribute('src', 'images/white/rook.jpg')
    whiteRook.setAttribute('id', 'whiteRook');
    whiteRook.setAttribute('class', 'whiteTeam');
    whiteRook.setAttribute('data-first-move', '-1') //속성 값이 -1이면 첫 이동 전임, 1이면 이미 이동했음
    tiles[n + 56].appendChild(whiteRook);
}

function knightInit(n) {
    const blackKnight = document.createElement('img');
    blackKnight.setAttribute('src', 'images/black/Knight.jpg')
    blackKnight.setAttribute('id', 'blackKnight');
    blackKnight.setAttribute('class', 'blackTeam');
    tiles[n].appendChild(blackKnight);

    const whiteKnight = document.createElement('img');
    whiteKnight.setAttribute('src', 'images/white/knight.jpg')
    whiteKnight.setAttribute('id', 'whiteKnight');
    whiteKnight.setAttribute('class', 'whiteTeam');
    tiles[n + 56].appendChild(whiteKnight);
}

function bishopInit(n) {
    const blackBishop = document.createElement('img');
    blackBishop.setAttribute('src', 'images/black/bishop.jpg')
    blackBishop.setAttribute('id', 'blackBishop');
    blackBishop.setAttribute('class', 'blackTeam');
    tiles[n].appendChild(blackBishop);

    const whiteBishop = document.createElement('img');
    whiteBishop.setAttribute('src', 'images/white/bishop.jpg')
    whiteBishop.setAttribute('id', 'whiteBishop');
    whiteBishop.setAttribute('class', 'whiteTeam');
    tiles[n + 56].appendChild(whiteBishop);
}

function queenInit(n) {
    const blackQueen = document.createElement('img');
    blackQueen.setAttribute('src', 'images/black/queen.jpg')
    blackQueen.setAttribute('id', 'blackQueen');
    blackQueen.setAttribute('class', 'blackTeam');
    tiles[n].appendChild(blackQueen);

    const whiteQueen = document.createElement('img');
    whiteQueen.setAttribute('src', 'images/white/queen.jpg')
    whiteQueen.setAttribute('id', 'whiteQueen');
    whiteQueen.setAttribute('class', 'whiteTeam');
    tiles[n + 56].appendChild(whiteQueen);
}

function kingInit(n) {
    const blackKing = document.createElement('img');
    blackKing.setAttribute('src', 'images/black/king.jpg')
    blackKing.setAttribute('id', 'blackKing');
    blackKing.setAttribute('class', 'blackTeam');
    blackKing.setAttribute('data-first-move', '-1') //속성 값이 -1이면 첫 이동 전임, 1이면 이미 이동했음
    tiles[n].appendChild(blackKing);

    const whiteKing = document.createElement('img');
    whiteKing.setAttribute('src', 'images/white/king.jpg')
    whiteKing.setAttribute('id', 'whiteKing');
    whiteKing.setAttribute('class', 'whiteTeam');
    whiteKing.setAttribute('data-first-move', '-1') //속성 값이 -1이면 첫 이동 전임, 1이면 이미 이동했음
    tiles[n + 56].appendChild(whiteKing);
}

function pieceInit() {
    pawnInit();
    rookInit(0), rookInit(7);
    knightInit(1), knightInit(6);
    bishopInit(2), bishopInit(5);
    queenInit(3);
    kingInit(4);
}

(function () {  //승격 선택
    const $body = document.querySelector('body');
    const $div = document.createElement('div');
    $div.setAttribute('id', 'promotion');
    function promotionSet(TYPE, type) {
        const $div2 = document.createElement('div');
        const $text = document.createElement('text');
        const $a = document.createElement('a');
        $div2.setAttribute('id', type);
        $a.setAttribute('href', '#');
        $a.textContent = TYPE;
        $div2.appendChild($a);
        $div.appendChild($div2);   
    }
    promotionSet('SELECT', 'title');
    promotionSet('QUEEN', 'queen');
    promotionSet('ROOK', 'rook');
    promotionSet('BISHOP', 'bishop');
    promotionSet('KNIGHT', 'knight');

    $body.appendChild($div);
})()

boardInit();
pieceInit();
