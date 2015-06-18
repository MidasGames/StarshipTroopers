    //Create the `cat` sprite
    cat = Sprite.fromImage("images/lightning.png");
    cat.y = 96;
    cat.vx = 0;
    cat.vy = 0;
    stage.addChild(cat);

    //Capture the keyboard arrow keys
    var left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);

    //Left arrow key `press` method
    left.press = function() {

        //Change the cat's velocity when the key is pressed
        cat.vx = -5;
        cat.vy = 0;
    };

    //Left arrow key `release` method
    left.release = function() {

        //If the left arrow has been released, and the right arrow isn't down,
        //and the cat isn't moving vertically:
        //Stop the cat
        if (!right.isDown && cat.vy === 0) {
            cat.vx = 0;
        }
    };

    //Up
    up.press = function() {
        cat.vy = -5;
        cat.vx = 0;
    };
    up.release = function() {
        if (!down.isDown && cat.vx === 0) {
            cat.vy = 0;
        }
    };

    //Right
    right.press = function() {
        cat.vx = 5;
        cat.vy = 0;
    };
    right.release = function() {
        if (!left.isDown && cat.vy === 0) {
            cat.vx = 0;
        }
    };

    //Down
    down.press = function() {
        cat.vy = 5;
        cat.vx = 0;
    };
    down.release = function() {
        if (!up.isDown && cat.vx === 0) {
            cat.vy = 0;
        }
    };

    //Set the game state
    state = play;

    //Start the game loop
    gameLoop();


function gameLoop() {
    requestAnimationFrame(gameLoop);
    state();
    renderer.render(movement);
}

function play() {

    //Use the cat's velocity to make it move
    cat.x += cat.vx;
    cat.y += cat.vy
}