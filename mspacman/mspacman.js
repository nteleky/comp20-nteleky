function draw() {
    canvas = document.getElementById('pacman');

    //Check that canvas works on browser
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        board = new Image();
        board.src = 'pacman10-hp-sprite.png';
        //Draws just the blue board on the scren.
        ctx.drawImage(board, 322, 3, 463, 138, 0, 0, 463, 138);
        mspm = new Image();
        mspm.src = 'pacman10-hp-sprite.png';
        ctx.drawImage(mspm, 121, 4, 19, 19, 224, 93, 19, 19);
    } else {
        alert("Epic fail. This doesn't work. Get a better browser.")
    }
}


