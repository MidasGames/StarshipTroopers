var stage = new PIXI.Stage(0x66FF99);

// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(600, 400);

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

var sentido = 1;

stage.addChild(bunny);

function animate() {

    requestAnimationFrame( animate );

    // just for fun, lets rotate mr rabbit a little
    bunny.rotation += 0.1;
    //console.log(bunny.position);
    if (bunny.position.x == renderer.view.width )
    {
        sentido = 0;
    }
    else if (bunny.position.x <= 0 )
    {
        sentido = 1;
    }


    if (sentido == 1)
    {
        bunny.position.x += 5;
    }
    else
    {
        bunny.position.x -= 5;
    }



    // render the stage
    renderer.render(stage);
}