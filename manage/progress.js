function whiteMessage() {
    if(count % 2 != 0){
        alert("흑 차례입니다.")
        return true;
    }
    return false;
}


function blackMessage() {
    if(count % 2 == 0){
        alert("백 차례입니다.");
        return true;
    }
    return false
}