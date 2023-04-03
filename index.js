function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left);

    if(left>0){
        dodger.style.left = `${left - 5}px`;
    }
}

function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left);

 if(left < 360) {
    dodger.style.left = `${left + 5}px`;
 }
}