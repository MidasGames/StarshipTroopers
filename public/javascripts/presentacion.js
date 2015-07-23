var stage = new PIXI.Stage(0x000000);
var renderer = PIXI.autoDetectRenderer(800, 600);
document.body.appendChild(renderer.view);


//Define variables that might be used in more 
//than one function
var  world, player, treasure, chimes, exit, player,
    healthBar, message, gameScene, gameOverScene, enemies;


    //Make the game scene and add it to the stage
    gameScene = new PIXI.DisplayObjectContainer();
    stage.addChild(gameScene);

    //Make the sprites and add them to the `gameScene`

    //Dungeon
    dungeon = new PIXI.Sprite.fromImage("./images/presentacion/dungeonLogo.png");
    gameScene.addChild(dungeon);

    //Treasure 1
    treasure1 = new PIXI.Sprite.fromImage("./images/presentacion/treasure.png");//fromFrame("treasure.png");
    treasure1.x = 250;//gameScene.width //- treasure.width - 48;
    treasure1.y = 450;//gameScene.height / 2 - treasure.height / 2;
    gameScene.addChild(treasure1);

    //Treasure 2
    treasure2 = new PIXI.Sprite.fromImage("./images/presentacion/treasure.png");//fromFrame("treasure.png");
    treasure2.x = 350;//gameScene.width //- treasure.width - 48;
    treasure2.y = 450;//gameScene.height / 2 - treasure.height / 2;
    gameScene.addChild(treasure2);

    //Treasure 3
    treasure3 = new PIXI.Sprite.fromImage("./images/presentacion/treasure.png");//fromFrame("treasure.png");
    treasure3.x = 450;//gameScene.width //- treasure.width - 48;
    treasure3.y = 450;//gameScene.height / 2 - treasure.height / 2;
    gameScene.addChild(treasure3);

    //Treasure 4
    treasure4 = new PIXI.Sprite.fromImage("./images/presentacion/treasure.png");//fromFrame("treasure.png");
    treasure4.x = 550;//gameScene.width //- treasure.width - 48;
    treasure4.y = 450;//gameScene.height / 2 - treasure.height / 2;
    gameScene.addChild(treasure4);

    //info 1
    info1 = new PIXI.Sprite.fromImage("./images/presentacion/info1.png");
   // info1.anchor.x = info1.halfWidth;
   // info1.anchor.y = info1.halfHeight;
    info1.x = 75;
    info1.y = 60;
    gameScene.addChild(info1);

    //info 2
    info2 = new PIXI.Sprite.fromImage("./images/presentacion/info2.png");
    // info1.anchor.x = info1.halfWidth;
    // info1.anchor.y = info1.halfHeight;
    info2.x = 75;
    info2.y = 60;
    gameScene.addChild(info2);

    //info 3
    info3 = new PIXI.Sprite.fromImage("./images/presentacion/info3.png");
    // info1.anchor.x = info1.halfWidth;
    // info1.anchor.y = info1.halfHeight;
    info3.x = 75;
    info3.y = 60;
    gameScene.addChild(info3);

    //info 4
    info4 = new PIXI.Sprite.fromImage("./images/presentacion/info4.png");
    // info1.anchor.x = info1.halfWidth;
    // info1.anchor.y = info1.halfHeight;
    info4.x = 75;
    info4.y = 60;
    gameScene.addChild(info4);

    info1.visible = false;
    info2.visible = false;
    info3.visible = false;
    info4.visible = false;

    //Explorer
    explorer = new PIXI.Sprite.fromImage("./images/presentacion/explorer.png");//fromFrame("explorer.png");
    explorer.x = 100;
    explorer.y = 450;//gameScene.height / 2 - explorer.height / 2;
    explorer.vx = 0;
    explorer.vy = 0;
    gameScene.addChild(explorer);

    //Capture the keyboard arrow keys
    var left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);

    //Left arrow key `press` method
    left.press = function() {
        //Change the explorer's velocity when the key is pressed
        explorer.vx = -5;
        explorer.vy = 0;


    };
    //Left arrow key `release` method
    left.release = function() {
        //If the left arrow has been released, and the right arrow isn't down,
        //and the explorer isn't moving vertically:
        //Stop the explorer
        if (!right.isDown && explorer.vy === 0) {
            explorer.vx = 0;
        }
    };

    //Up
    up.press = function() {
        explorer.vy = -5;
        explorer.vx = 0;
    };
    up.release = function() {
        if (!down.isDown && explorer.vx === 0) {
            explorer.vy = 0;
        }
    };

    //Right
    right.press = function() {
        explorer.vx = 5;
        explorer.vy = 0;
    };
    right.release = function() {
        if (!left.isDown && explorer.vy === 0) {
            explorer.vx = 0;
        }
    };

    //Down
    down.press = function() {
        explorer.vy = 5;
        explorer.vx = 0;
    };
    down.release = function() {
        if (!up.isDown && explorer.vx === 0) {
            explorer.vy = 0;
        }
    };

    //Set the game state
    //state = play;

    //Start the game loop
    gameLoop();
//}

function gameLoop(){

    //Loop this function 60 times per second
    requestAnimationFrame(gameLoop);

    //Update the current game state
    play();

    //Render the stage
    renderer.render(stage);
}

function play() {

    //use the cat's velocity to make it move
    explorer.x += explorer.vx;
    explorer.y += explorer.vy;

    //Contain the explorer inside the area of the dungeon
    contain(explorer, {x: 49, y: 36, width: 750, height: 560});
    //contain(explorer, stage);

    //Set `explorerHit` to `false` before checking for a collision
    var explorerHit = false;



    //Check for a collision between the explorer and the treasure
    if (hitTestRectangle(explorer, treasure1)) {
      info1.visible = true;
    }
    else
    {
        info1.visible = false;
    }

    if (hitTestRectangle(explorer, treasure2)) {
        info2.visible = true;
    }
    else
    {
        info2.visible = false;
    }

    if (hitTestRectangle(explorer, treasure3)) {
        info3.visible = true;
    }
    else
    {
        info3.visible = false;
    }

    if (hitTestRectangle(explorer, treasure4)) {
        info4.visible = true;
    }
    else
    {
        info4.visible = false;
    }

}

/* Helper functions */

function contain(sprite, container) {

    var collision = undefined;

    //Left
    if (sprite.x < container.x) {
        sprite.x = container.x;
        collision = "left";
    }

    //Top
    if (sprite.y < container.y) {
        sprite.y = container.y;
        collision = "top";
    }

    //Right
    if (sprite.x + sprite.width > container.width) {
        sprite.x = container.width - sprite.width;
        collision = "right";
    }

    //Bottom
    if (sprite.y + sprite.height > container.height) {
        sprite.y = container.height - sprite.height;
        collision = "bottom";
    }

    //Return the `collision` value
    return collision;
}

//The `hitTestRectangle` function
function hitTestRectangle(r1, r2) {

    //Define the variables we'll need to calculate
    var hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

    //hit will determine whether there's a collision
    hit = false;

    //Find the center points of each sprite
    r1.centerX = r1.x + r1.width / 2;
    r1.centerY = r1.y + r1.height / 2;
    r2.centerX = r2.x + r2.width / 2;
    r2.centerY = r2.y + r2.height / 2;

    //Find the half-widths and half-heights of each sprite
    r1.halfWidth = r1.width / 2;
    r1.halfHeight = r1.height / 2;
    r2.halfWidth = r2.width / 2;
    r2.halfHeight = r2.height / 2;

    //Calculate the distance vector between the sprites
    vx = r1.centerX - r2.centerX;
    vy = r1.centerY - r2.centerY;

    //Figure out the combined half-widths and half-heights
    combinedHalfWidths = r1.halfWidth + r2.halfWidth;
    combinedHalfHeights = r1.halfHeight + r2.halfHeight;

    //Check for a collision on the x axis
    if (Math.abs(vx) < combinedHalfWidths) {

        //A collision might be occuring. Check for a collision on the y axis
        if (Math.abs(vy) < combinedHalfHeights) {

            //There's definitely a collision happening
            hit = true;
        } else {

            //There's no collision on the y axis
            hit = false;
        }
    } else {

        //There's no collision on the x axis
        hit = false;
    }

    //`hit` will be either `true` or `false`
    return hit;
};


//The `randomInt` helper function
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//The `keyboard` helper function
function keyboard(keyCode) {
    var key = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The `downHandler`
    key.downHandler = function(event) {
        if (event.keyCode === key.code) {
            if (key.isUp && key.press) key.press();
            key.isDown = true;
            key.isUp = false;
        }
        event.preventDefault();
    };

    //The `upHandler`
    key.upHandler = function(event) {
        if (event.keyCode === key.code) {
            if (key.isDown && key.release) key.release();
            key.isDown = false;
            key.isUp = true;
        }
        event.preventDefault();
    };

    //Attach event listeners
    window.addEventListener(
        "keydown", key.downHandler.bind(key), false
    );
    window.addEventListener(
        "keyup", key.upHandler.bind(key), false
    );
    return key;
}