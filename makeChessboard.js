const $wrapper = document.querySelector('#wrapper');

for(i = 1; i <= 8; i++){  //행
    for(j = 1; j <= 8; j++){  //열
        const $div = document.createElement('div')

        if(i % 2 != 0){  //홀수 행일 때
            if(j % 2 != 0){  //홀수 열만 
                $div.setAttribute('id', 'greyTile');
            }
        }
        else{  //짝수 행일 때
            if(j % 2 == 0){
                $div.setAttribute('id', 'greyTile');
            }
        }

        $wrapper.appendChild($div);
    }
}