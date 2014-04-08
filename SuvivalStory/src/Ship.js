var Ship = cc.Sprite.extend({
    ctor: function(x,y) {

        this._super();
        this.x = x;
        this.y = y;

        this.initWithFile( 'images/playerwalk/p1.png' );
        this.direction =  Ship.DIR.UP;

        this.speed=2;
    },
    update: function( dt ) {
		var pos = this.getPosition();
        this.setPosition( cc.p( this.x, this.y ) );
		
	    
		
		
		
    },
       fall: function() {
this.setPosition( cc.p( this.x, this.y ) );
    },
    switchDirection: function() {
        
   this.fall();
        
    var animation = new cc.Animation.create();
    animation.addSpriteFrameWithFile( 'images/playerwalk/p1.png' );
    animation.addSpriteFrameWithFile( 'images/playerwalk/p2.png' );
   
    animation.addSpriteFrameWithFile( 'images/playerwalk/p3.png' );
    
    animation.addSpriteFrameWithFile( 'images/playerwalk/p4.png' );
  
    animation.addSpriteFrameWithFile( 'images/playerwalk/p5.png' );
    animation.setDelayPerUnit( 0.2 );
    var movingAction = cc.Animate.create( animation );
    this.runAction( movingAction );

    return cc.RepeatForever.create( cc.Animate.create( animation ) );
     	
     	 
		
    }
});
  
  	Ship.DIR = {
    UP: 1,
    RIGHT: 2

};

