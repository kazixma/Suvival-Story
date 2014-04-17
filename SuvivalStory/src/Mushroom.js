var Mushroom = cc.Sprite.extend({

    ctor: function(x,y) {

        this._super();
        //this.initWithFile( 'images/stand_r.png' );
        var pos =this.getPosition()
        this.x=x;
        this.y=y;
        this.speed=1;
        this.direction = 0;
        this.movingAction = this.createAnimationMoveLeft();
        this.start();

    },
    updatePosition: function() {
        this.setPosition( cc.p( this.x, this.y ) );
    },
    update: function( dt ) {
    //this.createAnimationWalkLeft();
    /*if(!this.click){
        this.walk();
        
    }*/
    var randomdir=Math.floor(Math.random() * (50 - 1 + 1)) + 1;
    if(randomdir==50){
        this.direction=Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        this.walk();
        this.walk();
        this.walk(); 
	   this.updatePosition();
    }
		
		
    },
    walk: function() {

        if(this.direction==1){
            this.stop();
            this.movingAction = this.createAnimationMoveLeft();
            this.start();
            this.x=this.x-15;
        }
        if(this.direction==2){
            this.stop();
            this.movingAction = this.createAnimationMoveRight();
            this.start(); 
            this.x=this.x+15;   
        }
        if(this.direction==0){
            this.x=this.x;  
        }
    

    },


    getRect: function() {
        return this.getBoundingBoxToWorld();
    },
    getMaxX: function() {
        return cc.rectGetMaxX( this.getRect() );
    },
    getMinX: function() {
        return cc.rectGetMinX( this.getRect() );
    },
    getMaxY: function() {
        return cc.rectGetMaxY( this.getRect() );
    },
    getMinY: function() {
        return cc.rectGetMinY( this.getRect() );
    },
    start:function(){

        this.runAction( this.movingAction );
    },
    stop:function(){
    
        this.stopAction( this.movingAction );
    
    },
    createAnimationMoveLeft: function() {
        var animation = new cc.Animation.create();

    //animation.addSpriteFrameWithFile( 'images/playerwalk/p1.png' );
        animation.addSpriteFrameWithFile( 'images/Monster/Mushroom/move/left/m1.png' );
        animation.addSpriteFrameWithFile( 'images/Monster/Mushroom/move/left/m2.png' );
        animation.addSpriteFrameWithFile( 'images/Monster/Mushroom/move/left/m3.png' );
        animation.setDelayPerUnit( 0.4);
        return cc.RepeatForever.create( cc.Animate.create( animation ) );
     	
     	 
		
    },
    createAnimationMoveRight: function() {
        var animation = new cc.Animation.create();

    //animation.addSpriteFrameWithFile( 'images/playerwalk/p1.png' );
        animation.addSpriteFrameWithFile( 'images/Monster/Mushroom/move/Right/m1.png');
        animation.addSpriteFrameWithFile( 'images/Monster/Mushroom/move/Right/m2.png');
        animation.addSpriteFrameWithFile( 'images/Monster/Mushroom/move/Right/m3.png' );
        animation.setDelayPerUnit( 0.4 );
        return cc.RepeatForever.create( cc.Animate.create( animation ) );
        
         
        
    }
   
 
});
 
