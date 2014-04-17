var Character = cc.Sprite.extend({

    ctor: function(x,y,GameLayer) {

        this._super();
        //this.initWithFile( 'images/stand_r.png' );
        var pos =this.getPosition()
        this.x=x;
        this.y=y;
        this.speed=1;
        this.play=true;
        this.direction = 0;
        this.movingAction = this.createAnimationStandLeft();
        this.GameLayer=GameLayer;
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
	this.updatePosition();

		
		
    },
    walk: function() {

    if(this.direction==1){
    this.x=this.x-4;
    }
    if(this.direction==2){
     this.x=this.x+4;   
    }
    

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
    reMonster:function(monster){
    this.mushroom=monster;
    
    },
    attack:function(){
    
    for(i=0;i<10;i++){
        this.checkIntersect(this.mushroom[i].getRect(),i);
        
    }

    },
    checkIntersect:function(rect,i){
    
    
     this.intersectionRect = cc.rectIntersectsRect(rect, this.getRect());   
     console.log(this.intersectionRect);
     if(this.intersectionRect){
       this.GameLayer.removeChild(this.mushroom[i]);

        console.log("Attack success");

     }

    
    },
     
    createAnimationWalkLeft: function() {
    var animation = new cc.Animation.create();

    //animation.addSpriteFrameWithFile( 'images/playerwalk/p1.png' );
    animation.addSpriteFrameWithFile( 'images/playerwalk/Left/w_l1.png' );
    animation.addSpriteFrameWithFile( 'images/playerwalk/Left/w_l2.png' );
    animation.addSpriteFrameWithFile( 'images/playerwalk/Left/w_l3.png' );
    animation.addSpriteFrameWithFile( 'images/playerwalk/Left/w_l4.png' );
    animation.setDelayPerUnit( 0.2 );
  
    
    return cc.RepeatForever.create( cc.Animate.create( animation ) );
     	
     	 
		
    },
    createAnimationWalkRight: function() {
    var animation = new cc.Animation.create();

    //animation.addSpriteFrameWithFile( 'images/playerwalk/p1.png' );
    animation.addSpriteFrameWithFile( 'images/playerwalk/Right/w_r1.png' );
    animation.addSpriteFrameWithFile( 'images/playerwalk/Right/w_r2.png' );
    animation.addSpriteFrameWithFile( 'images/playerwalk/Right/w_r3.png' );
    animation.addSpriteFrameWithFile( 'images/playerwalk/Right/w_r4.png' );
    animation.setDelayPerUnit( 0.2 );
  
    
    return cc.RepeatForever.create( cc.Animate.create( animation ) );
        
         
        
    },
    createAnimationStandLeft: function() {
    var animation = new cc.Animation.create();

    //animation.addSpriteFrameWithFile( 'images/playerwalk/p1.png' );
    animation.addSpriteFrameWithFile( 'images/stand/Left/s1.png' );
    animation.addSpriteFrameWithFile( 'images/stand/Left/s2.png' );
    animation.addSpriteFrameWithFile( 'images/stand/Left/s3.png' );
    animation.addSpriteFrameWithFile( 'images/stand/Left/s4.png' );
    animation.setDelayPerUnit( 0.2 );
  
    
    return cc.RepeatForever.create( cc.Animate.create( animation ) );
     
         
        
    },
    createAnimationStandRight: function() {
    var animation = new cc.Animation.create();

    //animation.addSpriteFrameWithFile( 'images/playerwalk/p1.png' );
    animation.addSpriteFrameWithFile( 'images/stand/Right/s1.png'  );
    animation.addSpriteFrameWithFile( 'images/stand/Right/s2.png');
    animation.addSpriteFrameWithFile( 'images/stand/Right/s3.png' );
    animation.addSpriteFrameWithFile( 'images/stand/Right/s4.png' );
    animation.setDelayPerUnit( 0.2 );
  
    
    return cc.RepeatForever.create( cc.Animate.create( animation ) );
       
         
        
    },
    createAnimationAttackLeft: function() {
    var animation = new cc.Animation.create();

    //animation.addSpriteFrameWithFile( 'images/playerwalk/p1.png' );
     animation.addSpriteFrameWithFile( 'images/Attack/Left/a1-2.png'  );
     animation.addSpriteFrameWithFile( 'images/Attack/Left/a2-2.png'  );
    
    
     // animation.addSpriteFrameWithFile( 'images/Attack/Left/a3.png'  );
   
     // animation.addSpriteFrameWithFile( 'images/Attack/Left/a4.png'  );
    animation.setDelayPerUnit( 0.1 );
    
    
    return cc.RepeatForever.create( cc.Animate.create( animation ) );
        
         
        
    },
     createAnimationAttackRight: function() {
    var animation = new cc.Animation.create();

    //animation.addSpriteFrameWithFile( 'images/playerwalk/p1.png' );
     animation.addSpriteFrameWithFile( 'images/Attack/Right/a1-2.png'  );
     animation.addSpriteFrameWithFile( 'images/Attack/Right/a2-2.png'  );
    // animation.addSpriteFrameWithFile( 'images/Attack/Right/a3.png'  );
    
   
    // animation.addSpriteFrameWithFile( 'images/Attack/Right/a4.png'  );
    animation.setDelayPerUnit( 0.2);
     
    
    return cc.RepeatForever.create( cc.Animate.create( animation ) );
        
         
        
    }

});
 Character.DIR = {
    LEFT: 1,
    RIGHT: 2,
    Attack: 3,
    DOWN: 4,
    STILL: 0
};

