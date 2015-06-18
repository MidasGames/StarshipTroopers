var stage = new PIXI.Stage(0x66FF99);

// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(600, 400);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimationFrame( animate );

// create a texture from an image path
var texture = PIXI.Texture.fromImage("./images/astronaut.png");
// create a new Sprite using the texture
var astronauta = new PIXI.Sprite(texture);

// center the sprites anchor point
astronauta.anchor.x = 0.5;
astronauta.anchor.y = 0.5;

// move the sprite t the center of the screen
astronauta.position.x = 200;
astronauta.position.y = 150;

var sentidoX = 1;
var sentidoY = 1;

stage.addChild(astronauta);

function animate() {

    requestAnimationFrame( animate );

    // just for fun, lets rotate mr rabbit a little
    astronauta.rotation += 0.1;

    //Movimiento en X
    if (astronauta.position.x == renderer.view.width )
    {
        sentidoX = 0;
    }
    else if (astronauta.position.x <= 0 )
    {
        sentidoX = 1;
    }

    if (astronauta.position.x == renderer.view.width )
    {
        sentidoX = 0;
    }
    else if (astronauta.position.x <= 0 )
    {
        sentidoX = 1;
    }


    if (sentidoX == 1)
    {
        astronauta.position.x += 2;
    }
    else
    {
        astronauta.position.x -= 2;
    }


    //Movimiento en Y
    if (astronauta.position.y == renderer.view.height )
    {
        sentidoY = 0;
    }
    else if (astronauta.position.y <= 0 )
    {
        sentidoY = 1;
    }

    if (astronauta.position.y == renderer.view.height )
    {
        sentidoY = 0;
    }
    else if (astronauta.position.y <= 0 )
    {
        sentidoY = 1;
    }


    if (sentidoY == 1)
    {
        astronauta.position.y += 2;
    }
    else
    {
        astronauta.position.y -= 2;
    }


    // render the stage
    renderer.render(stage);
}