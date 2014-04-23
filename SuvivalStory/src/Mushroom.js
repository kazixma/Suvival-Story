var Mushroom = cc.Sprite.extend({

    ctor: function(x,y) {

        this._super();
        //this.initWithFile( 'images/stand_r.png' );
        var pos =this.getPosition()
        this.x=x;
        this.y=y;
        this.speed=1;
        this.direction = 0;
        this.setFlippedX(false);
        this.movingAction = this.createAnimationMove();
        this.hp=1000;
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
            this.setFlippedX(false);
            this.movingAction = this.createAnimationMove();
            this.start();
            this.x=this.x-15;
        }
        if(this.direction==2){
            this.stop();
            this.setFlippedX(true);
            this.movingAction = this.createAnimationMove();
            this.start(); 
            this.x=this.x+15;   
        }
        if(this.direction==0){
            this.x=this.x;  
        }
    

    },
    reBack:function(){
        if(this.direction==1){
            
            this.x=this.x-5;
        }
        if(this.direction==2){
           
            this.x=this.x+5;   
        }
        if(this.direction==0){
            this.x=this.x;  
        }

    },
     getSprite:function(){
        return cc.SpriteFrameCache.getInstance().addSpriteFrames(mushroom_s_plist,mushroom_s);
    },


    getRect: function() {
        return this.getBoundingBox();
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
    isHit: function(){


    },
    createAnimationisHit: function(){
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 0; i++) {
            var str = "hit1_" + 0 + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.5);


        return cc.RepeatForever.create(cc.Animate.create(animation)); 

    },
    createAnimationMove: function() {
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 2; i++) {
            var str = "move_" + i + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.Animate.create(animation);    
             
        
    },
    createAnimationDie:function(){
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 2; i++) {
            var str = "die1_" + i + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);
        //this.scthis.removeFromParent();

        return cc.Animate.create(animation);         
    },
   
 
});
 
