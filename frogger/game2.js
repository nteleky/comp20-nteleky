/* Comp20 - Frogger Assignment Part 2
 * Nicholas Teleky
 */

//Global Variables
var sprites;
var frogX, frogY; //X, Y coordinates for the frog.
var frog = new Object();

//Starts game when document is ready
$(document).ready(function() {
    init_vars();
    sprites.onload = function () {
        draw_gameboard();
    };
});

//Initializes global variables
function init_vars() {
    sprites = new Image();
    sprites.src = 'assets/frogger_sprites.png';
    //frog d

}

function draw_gameboard() {
    canvas = document.getElementById('game');
    if (canvas.getContext) {
        pencil = canvas.getContext('2d');
        //Draws water and road rectangles
        pencil.fillStyle = "#191970";
        pencil.fillRect(0, 0, 399, 280);
        pencil.fillStyle = "#000000";
        pencil.fillRect(0,280, 399, 285);
        //Splices FROGGER title
        pencil.drawImage(sprites, 11, 9, 329, 37, 5, 5, 329, 37);
        //Splices grass
         pencil.drawImage(sprites, 0, 53, 399, 59, 0, 50, 399, 59);
        //Splices purple 'safe zones'
        pencil.drawImage(sprites, 0, 116, 399, 40, 0, 270, 399, 40);
        pencil.drawImage(sprites, 0, 116, 399, 40, 0, 480, 399, 40);    }
}
