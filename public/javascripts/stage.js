var stage = new PIXI.Stage(0x66FF99);

// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(800, 600);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimationFrame( animate );

//background sprite
var bgTexture = PIXI.Texture.fromImage('./images/spaceBG.jpg');
var back = new PIXI.Sprite(bgTexture);

back.anchor.x = 0.5;
back.anchor.y = 0.5;

back.position.x = 400;
back.position.y = 300;

stage.addChild(back);


// create a texture from an image path
var texture = PIXI.Texture.fromImage("./images/lightning.png");
// create a new Sprite using the texture
var soldier = new PIXI.Sprite(texture);

// center the sprites anchor point
soldier.anchor.x = 0.5;
soldier.anchor.y = 0.5;

// move the sprite t the center of the screen

soldier.position.x = 200;
soldier.position.y = 150;

stage.addChild(soldier);

function animate() {

    requestAnimationFrame( animate );

    //soldier.position.x += 1;
    back.rotation -= 0.001;

    soldier.rotation += 0.01;
    soldier.position.x +=0.1;
    soldier.position.y +=0.1;
    // render the stage
    renderer.render(stage);
}