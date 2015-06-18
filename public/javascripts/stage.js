var stage = new PIXI.Stage(0x66FF99);

// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(600, 400);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimationFrame( animate );

// create a texture from an image path
var texture = PIXI.Texture.fromImage("./images/dvdLogo.png");
// create a new Sprite using the texture
var dvd = new PIXI.Sprite(texture);

// center the sprites anchor point
dvd.anchor.x = 0.5;
dvd.anchor.y = 0.5;

// move the sprite t the center of the screen
dvd.position.x = 200;
dvd.position.y = 150;

var sentidoX = 1;
var sentidoY = 1;


stage.addChild(dvd);

function animate() {

    requestAnimationFrame( animate );

    // just for fun, lets rotate mr rabbit a little
    if (sentidoX == 0 || sentidoY == 0)
    {
        dvd.tint = getRandomColor();
    }


    //Movimiento en X
    if (dvd.position.x == renderer.view.width )
    {
        sentidoX = 0;
    }
    else if (dvd.position.x <= 0 )
    {
        sentidoX = 1;
    }

    if (sentidoX == 1)
    {
        dvd.position.x += 2;
    }
    else
    {
        dvd.position.x -= 2;
    }


    //Movimiento en Y
    if (dvd.position.y == renderer.view.height )
    {
        sentidoY = 0;
    }
    else if (dvd.position.y <= 0 )
    {
        sentidoY = 1;
    }


    if (sentidoY == 1)
    {
        dvd.position.y += 2;
    }
    else
    {
        dvd.position.y -= 2;
    }

    // render the stage
    renderer.render(stage);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '0x';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}