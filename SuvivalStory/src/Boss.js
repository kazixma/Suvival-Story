var Boss = cc.Sprite.extend({

    ctor: function(x,y) {

        this._super();
        //this.initWithFile( 'images/stand_r.png' );
        var pos =this.getPosition()
        this.x=x;
        this.y=y;
        this.speed=1;
        this.direction = 0;
        this.setFlippedX(false);
        this.movingAction = this.createAnimationAttack1();
        this.hp=10000000;
        this.damage=1;
        this.live=true;
        this.hit=false;
        this.rebacked=true;
        
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
    console.log(this.hp);
    var randomdir=Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            if(randomdir==50){

                this.direction=Math.floor(Math.random() * (3 - 1 + 1)) + 1;
                //var randomwalk=Math.floor(Math.random() * (8 - 1 + 1)) + 1;
                if(this.direction==1){
                    this.stop();
                    this.movingAction = this.createAnimationAttack1();
                    this.start();
                }
                if(this.direction==2){
                    this.stop();
                    this.movingAction = this.createAnimationAttack2();
                    this.start();
                }
                    
                
                if(this.direction==3){
                    this.stop();
                    this.movingAction = this.createAnimationAttack3();
                    this.start();
                }
                    
                
              
            }
        
        if(!this.character.sta_attack){
        this.attack();
    }
		
    },
    walk: function() {

         if(this.direction==1){
                    this.stop();
                    this.movingAction = this.createAnimationAttack1();
                    this.start();
                }
                if(this.direction==2){
                    this.stop();
                    this.movingAction = this.createAnimationAttack2();
                    this.start();
                }
                    
                
                if(this.direction==3){
                    this.stop();
                    this.movingAction = this.createAnimationAttack3();
                    this.start();
                }
    

    },
    reBack:function(){
        this.stop();
        var actionTo = cc.MoveBy.create(0.1, cc.p(0, 0));
         
        
        
        return actionTo;

    },
    isHit:function(){
        // var sequence2 = cc.Sequence.create(
        //             this.reBack(),
        //             cc.CallFunc.create(function () {
        //             this.walk();
        //              }, this)
        //             );

        //              this.runAction(cc.Sequence.create(
        //             this.createAnimationisHit(),sequence2
        //             ));

    },
    reCharacter:function(character){
        this.character=character;

    },
    attack:function(){
    
    
        this.checkIntersect(this.character.getRect());
        
        

    },

    checkIntersect:function(rect){
        
    
        this.intersectionRect = cc.rectIntersectsRect(rect, this.getRect());   
        //console.log(this.intersectionRect);
            if(this.intersectionRect){
               this.hit=true;
               if(this.hit){    
                    // this.stop();
                    // this.movingAction = this.createAnimationisHit();
                    // this.start();
                    if(this.character.hp>0){
                        this.character.hp-=this.damage;
                        this.hit=false;
                        console.log("monster attack");
                }
             }   

        }
        
         

    
    },
     getSprite:function(){
        return cc.SpriteFrameCache.getInstance().addSpriteFrames(Boss_s_plist,Boss_s);
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
   
    createAnimationAttack1: function(){
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 22; i++) {
            var str = "attack1_" + 22 + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.5);


        return cc.RepeatForever.create(cc.Animate.create(animation));

    },
    createAnimationAttack2: function() {
        this.getSprite();
        var animFrames = [];
        for (var i = 1; i <= 23; i++) {
            var str = "attack2_" + i + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.RepeatForever.create(cc.Animate.create(animation));       
             
        
    },
    createAnimationAttack3:function(){
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 23; i++) {
            var str = "attack3_" + i + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);
        //this.scthis.removeFromParent();


        return cc.Animate.create(animation);         
    },
     createAnimationisHit: function(){
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 0; i++) {
            var str = "hit_" + 0 + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.5);


        return cc.Animate.create(animation);  

    },
       createAnimationDie:function(){
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 37; i++) {
            var str = "die1_" + i + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);
        //this.scthis.removeFromParent();


        return cc.Animate.create(animation);         
    },
    
   
 
});
 
