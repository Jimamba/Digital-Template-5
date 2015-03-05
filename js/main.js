window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render } );
    
    function preload() {
        // Load an image and call it 'logo'.
       game.load.image('bomb', 'assets/Background-timer.png');
       game.load.image('win','assets/win.png');
       game.load.image('fail','assets/fail.png');
       //game.load.audio('badaboom','assets/WTF BOOM.mp3');
       game.load.audio('badaboom','assets/Bomb-SoundBible.com-891110113.mp3');
       game.load.audio('music','assets/lightsaber soundtrack.mp3');
       
    }
    
    var red;
    var yellow;
    var blue;
    var green;
    var effect;
    var music;
    
    
    function create() {
        // Create a sprite at the center of the screen using the 'logo' image.
        
        effect = game.add.audio('badaboom',1,true);
        music = game.add.audio('music');
        music.play();
        game.add.sprite(0,0,'bomb');
      	game.physics.startSystem(Phaser.Physics.ARCADE);
     	
        // Anchor the sprite at its center, as opposed to its top-left corner.
        // so it will be truly centered.
       
       
        
        
        // Turn on the arcade physics engine for this sprite.
      	
        // Make it bounce off of the world bounds.
       
       
        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        
        var text = game.add.text(400, game.world.height - 40, 'Press q,w,e,r to try and stop the bomb', { fontSize: '8px', fill: '#000' });
        text.anchor.setTo( 0.5, 0.0 );
        
        
        red = game.input.keyboard.addKey(Phaser.Keyboard.Q);
        yellow = game.input.keyboard.addKey(Phaser.Keyboard.W);
        blue = game.input.keyboard.addKey(Phaser.Keyboard.E);
        green = game.input.keyboard.addKey(Phaser.Keyboard.R);
        
        game.time.events.add(Phaser.Timer.SECOND * 30, death, this);
    }
    
    function update() {
        // Accelerate the 'logo' sprite towards the cursor,
        // accelerating at 500 pixels/second and moving no faster than 500 pixels/second
        // in X or Y.
        // This function returns the rotation angle that makes it visually match its
        // new trajectory.
       if(red.isDown)
       {
       death();
       } 
       else if(yellow.isDown)
       {
       win();
       }
       else if(blue.isDown)
       {
       death();
       }
       else if(green.isDown)
       {
       death();
       }
       
       
        //end of update function
    }
    function render() 
    {
	game.debug.text("Time until explosion: " + game.time.events.duration, 255, 300);

	}
	function death()
	{
	effect.play('',0,1,false);
	game.add.sprite(0,0,'fail');
	game.paused = true;
	}
	function win()
	{
	game.add.sprite(0,0,'win');
	game.paused = true;
	}
	//end of everything
};
