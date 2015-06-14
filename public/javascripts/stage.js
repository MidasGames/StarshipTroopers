var stage = new PIXI.Stage(0x66FF99);

// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(800, 600);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimationFrame( animate );

// create a texture from an image path
var texture = PIXI.Texture.fromImage("./images/lightning.png");
// create a new Sprite using the texture
var bunny = new PIXI.Sprite(texture);

// center the sprites anchor point
bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;

// move the sprite t the center of the screen
bunny.position.x = 200;
bunny.position.y = 150;

stage.addChild(bunny);

function animate() {

    requestAnimationFrame( animate );

    // just for fun, lets rotate mr rabbit a little
    bunny.rotation += 0.1;
    bunny.position.x += 1;
    bunny.position.y += 1.3;

    // render the stage
    renderer.render(stage);
}