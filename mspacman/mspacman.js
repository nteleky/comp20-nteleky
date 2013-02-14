function drawPacMan() {
    canvas = document.getElementById('pacman');

    //Check that canvas works on browser
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        //Draws the blue board on the canvas.
        board = new Image();
        board.src = 'pacman10-hp-sprite.png';
        ctx.drawImage(board, 322, 3, 463, 138, 0, 0, 463, 138);
        //Draws a Ms. PacMan to the canvas, on the board.
        mspm = new Image();
        mspm.src = 'pacman10-hp-sprite.png';
        ctx.drawImage(mspm, 121, 4, 19, 19, 224, 93, 19, 19);
        //Draws a blue ghost on the canvas.
        ghost = new Image();
        ghost.src = 'pacman10-hp-sprite.png';
        ctx.drawImage(ghost, 120, 122, 19, 19, 180, 92, 19, 19);
    } else {
        alert("Epic fail. This doesn't work. Get a better browser.")
    }
}


