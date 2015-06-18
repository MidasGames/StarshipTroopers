var stage = new PIXI.Stage(0x66FF99);

// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(800, 600);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimationFrame( animate );

//background sprite
var bgTexture = PIXI.Texture.fromImage('./images/space-cool-HD-wallpaper.jpg');
var back = new PIXI.Sprite(bgTexture);

back.anchor.x = 0.5;
back.anchor.y = 0.5;

back.position.x = 400;
back.position.y = 300;

stage.addChild(back);


// create a texture from an image path
var texture = PIXI.Texture.fromImage("./images/astronaut.png");
// create a new Sprite using the texture
var astronaut = new PIXI.Sprite(texture);

// center the sprites anchor point
astronaut.anchor.x = 0.5;
astronaut.anchor.y = 0.5;


astronaut.y = 96;
astronaut.vx = 0;
astronaut.vy = 0;
// move the sprite t the center of the screen

astronaut.position.x = 200;
astronaut.position.y = 100;

stage.addChild(astronaut);


// create a texture from an image path
var texture2 = PIXI.Texture.fromImage("./images/astronaut2.png");
// create a new Sprite using the texture
var astronaut2 = new PIXI.Sprite(texture2);

// center the sprites anchor point
astronaut2.anchor.x = 0.5;
astronaut2.anchor.y = 0.5;


astronaut2.y = 96;
astronaut2.vx = 0;
astronaut2.vy = 0;
// move the sprite t the center of the screen

astronaut2.position.x = 600;
astronaut2.position.y = 200;

stage.addChild(astronaut2);


var left = keyboard(37),
    up = keyboard(38),
    right = keyboard(39),
    down = keyboard(40);

//Left arrow key `press` method
left.press = function() {

    //Change the astronaut's velocity when the key is pressed
    astronaut.vx = -5;
    astronaut.vy = 0;
};

//Left arrow key `release` method
left.release = function() {

    //If the left arrow has been released, and the right arrow isn't down,
    //and the astronaut isn't moving vertically:
    //Stop the astronaut
    if (!left.isDown && astronaut.vy === 0) {
        astronaut.vx = 0;
    }
};

//Up
up.press = function() {
    astronaut.vy = -5;
    astronaut.vx = 0;
};
up.release = function() {
    if (!up.isDown && astronaut.vx === 0) {
        astronaut.vy = 0;
    }
};

//Right
right.press = function() {
    astronaut.vx = 5;
    astronaut.vy = 0;


};
right.release = function() {
    if (!right.isDown && astronaut.vy === 0) {
        astronaut.vx = 0;
    }
};

//Down
down.press = function() {
    astronaut.vy = 5;
    astronaut.vx = 0;
};
down.release = function() {
    if (!down.isDown && astronaut.vx === 0) {
        astronaut.vy = 0;
    }
};


var a = keyboard(65),
    w = keyboard(87),
    d = keyboard(68),
    s = keyboard(83);

//Left arrow key `press` method
a.press = function() {

    //Change the astronaut's velocity when the key is pressed
    astronaut2.vx = -5;
    astronaut2.vy = 0;
};


a.release = function() {
    if (!a.isDown && astronaut2.vy === 0) {
        astronaut2.vx = 0;
    }
};


w.press = function() {
    astronaut2.vy = -5;
    astronaut2.vx = 0;
};
w.release = function() {
    if (!w.isDown && astronaut2.vx === 0) {
        astronaut2.vy = 0;
    }
};


d.press = function() {
    astronaut2.vx = 5;
    astronaut2.vy = 0;


};
d.release = function() {
    if (!d.isDown && astronaut2.vy === 0) {
        astronaut2.vx = 0;
    }
};


s.press = function() {
    astronaut2.vy = 5;
    astronaut2.vx = 0;
};
s.release = function() {
    if (!s.isDown && astronaut2.vx === 0) {
        astronaut2.vy = 0;
    }
};


function animate() {

    requestAnimationFrame( animate );

    astronaut.tint = 0xFFFFFF;
    astronaut2.tint = 0xFFFFFF;


    //astronaut.position.x += 1;
    back.rotation -= 0.001;

    astronaut.rotation += 0.05;
    //astronaut.position.x +=0.1;
    //astronaut.position.y +=0.1;

    astronaut.x += astronaut.vx;
    astronaut.y += astronaut.vy;

    astronaut2.rotation += 0.05;
    //astronaut.position.x +=0.1;
    //astronaut.position.y +=0.1;

    astronaut2.x += astronaut2.vx;
    astronaut2.y += astronaut2.vy;

    if (hitTestRectangle(astronaut, astronaut2)) {
        astronaut.tint = 0xff0000;
        astronaut2.tint = 0x00ff00;

    }
    // render the stage
    renderer.render(stage);
}

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
