var app = new PIXI.Application(800, 600, { backgroundColor: 0xffffff });
document.body.appendChild(app.view);

app.stop();

PIXI.loader
    .add('spritesheet', 'gg.json')
    .load(onAssetsLoaded);

function onAssetsLoaded() {

    // create an array to store the textures
    var explosionTextures = [],
        i;

    for (i = 0; i < 2; i++) {
         var texture = PIXI.Texture.fromFrame('gg' + (i + 1) + '.png');
         explosionTextures.push(texture);
    }

    var explosion = new PIXI.extras.AnimatedSprite(explosionTextures);
    explosion.play();
    app.stage.addChild(explosion);

    // start animating
    app.start();
}
