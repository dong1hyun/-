const whitePawn = document.querySelectorAll('#whitePawn');
const blackPawn = document.querySelector('#blackPawn');

for (i = 0; i < whitePawn.length; i++) {
    whitePawn[i].onclick = function () {
        const tileNum = this.parentElement.getAttribute('value');
        console.log(tileNum);
        tiles[tileNum - 8].firstElementChild.style.display = 'block';
        console.log(tiles[tileNum - 8].firstElementChild);
    }
}
