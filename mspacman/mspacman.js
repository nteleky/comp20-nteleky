function draw() {
    canvas = document.getElementById('pacman');

    //Check that canvas works on browser
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        board = new Image();
        board.src = 'pacman10-hp-sprite.png';
        ctx.drawImage(board, 322, 3, 463, 138, 0, 0, 463, 138);
    } else {
        alert("Epic fail. This doesn't work. Get a better browser.")
    }
}


