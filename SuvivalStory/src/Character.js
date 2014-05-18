var Character = cc.Sprite.extend({


    ctor: function(x,y,GameLayer) {

        this._super();
      //  this.initWithFile( 'images/stand_r.png' );
        var pos =this.getPosition()
        this.x=x;
        this.y=y;
        this.speed=1;
        this.play=true;
        this.direction = 0;
         this.movingAction = this.createAnimationStand();
        this.GameLayer=GameLayer;
        this.v=4;
        this.hp=1500;
        this.mp=2500;
        this.damage=1000;
        this.change=false;
        this.sta_attack=false;
        this.useSkill=false;
        this.start();

    },
    getAttack:function(){
        return this.sta_attack;

    },
   

    updatePosition: function() {
        this.setPosition( cc.p( this.x, this.y ) );
    },
    update: function( dt ) {
    //this.createAnimationWalkLeft();
    /*if(!this.click){
        this.walk();
        
    }*/if(this.x<0){
        //this.setPosition( cc.p( , this.y ) );
        this.x=2;
    }
        else if(this.x>3480){
        console.log(this.x);
        this.x=3478;
        
       }else{ 
       this.walk()
	   this.updatePosition();
    }
		
		
    },
    walk: function() {
     
        if(this.direction==1){
            this.setFlippedX(false);
            if(this.GameLayer.walk){
                this.x=this.x-4;
         }
        
    
        }
        if(this.direction==2){
            if(this.GameLayer.walk){
                this.setFlippedX(true);
                this.x=this.x+4;
        }
           
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
    
     for(i=0;i<this.GameLayer.nummonster;i++){
        this.checkIntersect(this.mushroom[i].getRect(),i);
        
        }


    },
    checkIntersect:function(rect,i){
        
    
        this.intersectionRect = cc.rectIntersectsRect(rect, this.getRect());   
        console.log(this.intersectionRect);
        if(this.intersectionRect){
          //  this.mushroomstop();
            this.mushroom[i].stop();
        //this.mushroom[i].reBack();
           // this.mushroom[i].live=false;

           // var fadeOut = cc.FadeOut.create(1);

            // var sequence2 = cc.Sequence.create(
            //     fadeOut,
            //     cc.CallFunc.create(function () {
            //     this.mushroom[i].removeFromParent();
            // }, this)
            // );
            this.mushroom[i].hit=true;
            if(this.mushroom[i].hit){
                 
                // this.mushroom[i].runAction(cc.Sequence.create(
                //  this.mushroom[i].createAnimationisHit(),
                //  cc.CallFunc.create(function () {
                //      this.mushroom[i].reBack();
                //  }, this)
                //   ));

              // if(this.mushroom[i].rebacked){
                //console.log("kyu");
                this.mushroom[i].isHit();    
                this.mushroom[i].hit=false;
                this.mushroom[i].rebacked=false;
                //}
            }
            // this.mushroom[i].runAction(cc.Sequence.create(
            // this.mushroom[i].createAnimationisHit(),this.mushroom[i].createAnimationMove();
            // ));
            // this.mushroom[i].movingAction = this.mushroom[i].createAnimationisHit();
           // this.start();
            this.mushroom[i].hp=this.mushroom[i].hp-this.damage;
       // this.mushroom[i].reBack();
               

           if(this.mushroom[i].hp<0){
                if(this.mushroom[i].live){
                    this.mushroom[i].stop();
            //this.mushroom[i].reBack();
                    this.mushroom[i].live=false;
                    var fadeOut = cc.FadeOut.create(1);

                    var sequence2 = cc.Sequence.create(
                    fadeOut,
                    cc.CallFunc.create(function () {
                    this.mushroom[i].removeFromParent();
                     }, this)
                    );

                     this.mushroom[i].runAction(cc.Sequence.create(
                    this.mushroom[i].createAnimationDie(),sequence2
                    ));

                }
            }

        // this.mushroom[i].movingAction=this.mushroom[i].createAnimationisHit();
        // this.mushroom[i].start()
        
        //this.mushroom[i].start();
       //var monsterDie=this.GameLayer.removeChild(this.mushroom[i]);
      // this.schedule(monsterDie,2,Infinity,null);
        console.log("Attack success");

     }else{

        this.mushroom[i].rebacked=true;
     }

    
    },
     
    // createAnimationWalkLeft: function() {
    // var animation = new cc.Animation.create();

    // //animation.addSpriteFrameWithFile( 'images/playerwalk/p1.png' );
    // animation.addSpriteFrameWithFile( 'images/playerwalk/Left/w_l1.png' );
    // animation.addSpriteFrameWithFile( 'images/playerwalk/Left/w_l2.png' );
    // animation.addSpriteFrameWithFile( 'images/playerwalk/Left/w_l3.png' );
    // animation.addSpriteFrameWithFile( 'images/playerwalk/Left/w_l4.png' );
    // animation.setDelayPerUnit( 0.2 );
  
    
    // return cc.RepeatForever.create( cc.Animate.create( animation ) );
     	
     	 
		
    // },
      createAnimationIceSwordSkill: function() {
       // this.stopAllActions();
        this.getSprite2();
        var animFrames = [];
        for (var i = 0; i <= 13; i++) {
            var str = "effect_" + i +".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.Animate.create(animation);      
             
        
    },
    createAnimationSwordRaySkill: function() {
       // this.stopAllActions();
        this.getSprite1();
        var animFrames = [];
        for (var i = 0; i <= 20; i++) {
            var str = "effect_" + i +".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.Animate.create(animation);      
             
        
    },
    createAnimationEvo:function(){
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 14; i++) {
            var str = "Dalert_" + i + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.RepeatForever.create(cc.Animate.create(animation));  

    },
    createAnimationWalk: function() {
    // var animation = new cc.Animation.create();

    // //animation.addSpriteFrameWithFile( 'images/playerwalk/p1.png' );
    // animation.addSpriteFrameWithFile( 'images/playerwalk/Right/w_r1.png' );
    // animation.addSpriteFrameWithFile( 'images/playerwalk/Right/w_r2.png' );
    // animation.addSpriteFrameWithFile( 'images/playerwalk/Right/w_r3.png' );
    // animation.addSpriteFrameWithFile( 'images/playerwalk/Right/w_r4.png' );
    // animation.setDelayPerUnit( 0.2 );
  
    
    // return cc.RepeatForever.create( cc.Animate.create( animation ) );
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 3; i++) {
            var str = "walk2_" + i + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.RepeatForever.create(cc.Animate.create(animation));  
        
         
        
    },
    // createAnimationStandLeft: function() {
    // var animation = new cc.Animation.create();

    // //animation.addSpriteFrameWithFile( 'images/playerwalk/p1.png' );
    // animation.addSpriteFrameWithFile( 'images/stand/Left/s1.png' );
    // animation.addSpriteFrameWithFile( 'images/stand/Left/s2.png' );
    // animation.addSpriteFrameWithFile( 'images/stand/Left/s3.png' );
    // animation.addSpriteFrameWithFile( 'images/stand/Left/s4.png' );
    // animation.setDelayPerUnit( 0.2 );
  
    
    // return cc.RepeatForever.create( cc.Animate.create( animation ) );
     
         
        
    // },
    createAnimationStand: function() {
    //var animation = new cc.Animation.create();

    //animation.addSpriteFrameWithFile( 'images/playerwalk/p1.png' );
    // animation.addSpriteFrameWithFile( 'images/stand/Right/s1.png'  );
    // animation.addSpriteFrameWithFile( 'images/stand/Right/s2.png');
    // animation.addSpriteFrameWithFile( 'images/stand/Right/s3.png' );
    // animation.addSpriteFrameWithFile( 'images/stand/Right/s4.png' );
    // animation.setDelayPerUnit( 0.2 );
    
    // return cc.RepeatForever.create( cc.Animate.create( animation ) );
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 4; i++) {
            var str = "stand2_" + i + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.RepeatForever.create(cc.Animate.create(animation));  
         
        
    },

    
    createAnimationAttack: function() {
   // var animation = new cc.Animation.create();

    // //animation.addSpriteFrameWithFile( 'images/playerwalk/p1.png' );
    //  animation.addSpriteFrameWithFile( 'images/Attack/Left/a1-2.png'  );
    //  animation.addSpriteFrameWithFile( 'images/Attack/Left/a2-2.png'  );
    
    
    //  // animation.addSpriteFrameWithFile( 'images/Attack/Left/a3.png'  );
   
    //  // animation.addSpriteFrameWithFile( 'images/Attack/Left/a4.png'  );
    // animation.setDelayPerUnit( 0.1 );
    
    
    // return cc.RepeatForever.create( cc.Animate.create( animation ) );
        this.getSprite();
        var animFrames = [];
            for (var i = 0; i <= 1; i++) {
                var str = "stabO1_" + i + ".png";
                var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
                animFrames.push(frame);
             }

            var animation = cc.Animation.create(animFrames, 0.4);


            return cc.RepeatForever.create(cc.Animate.create(animation));  
        
         
        
    },
    createAnimationDkAttack: function(){
        this.getSprite();
        var animFrames = [];
            for (var i = 0; i <= 9; i++) {
                var str = "DKgigaSlasher_" + i + ".png";
                var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
            }

        var animation = cc.Animation.create(animFrames, 0.07);


        return cc.RepeatForever.create(cc.Animate.create(animation));       

    },
    createAnimationDkWalk:function(){
        this.getSprite();
         var animFrames = [];
        for (var i = 0; i <= 7; i++) {
            var str = "walk_" + i + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.RepeatForever.create(cc.Animate.create(animation));    

    },
    getSprite:function(){
        return cc.SpriteFrameCache.getInstance().addSpriteFrames(character_s_plist,character_s);

    // },
    //  createAnimationAttackRight: function() {
    // var animation = new cc.Animation.create();

    // //animation.addSpriteFrameWithFile( 'images/playerwalk/p1.png' );
    //  animation.addSpriteFrameWithFile( 'images/Attack/Right/a1-2.png'  );
    //  animation.addSpriteFrameWithFile( 'images/Attack/Right/a2-2.png'  );
    // // animation.addSpriteFrameWithFile( 'images/Attack/Right/a3.png'  );
    
   
    // // animation.addSpriteFrameWithFile( 'images/Attack/Right/a4.png'  );
    // animation.setDelayPerUnit( 0.2);
     
    
    // return cc.RepeatForever.create( cc.Animate.create( animation ) );
        
         
        
    },
      getSprite1:function(){
        return cc.SpriteFrameCache.getInstance().addSpriteFrames(swordrayskill_s_plist,swordrayskill_s);
    },
     getSprite2:function(){
        return cc.SpriteFrameCache.getInstance().addSpriteFrames(iceswordskill_s_plist,iceswordskill_s);
    },
    Evo:function(){
        this.stop();
        this.movingAction=this.createAnimationEvo();
        this.change=true;
        this.start();

    },
    Normal:function(){
        this.stop();
        this.movingAction=this.createAnimationStand();
        this.change=false;
        this.start();

    },
    EvoWalk:function(){
        this.stop();
                    
        this.movingAction = this.createAnimationDkWalk();
                
        this.start();

    },
    NormalWalk:function(){
        this.stop();
                    
        this.movingAction = this.createAnimationWalk();
                
        this.start();

    },
    NormalAttack:function(){
        this.stop();
                    
        this.movingAction = this.createAnimationAttack();
                
        this.start();

    },
     EvoAttack:function(){
        this.stop();
                    
        this.movingAction = this.createAnimationDkAttack();
                
        this.start();

    },
    AttackDir:function(){
        if(this.direction==1){
                    
                    this.setFlippedX(false);
                    
                     
                }
                if(this.direction==2){
                     
                     this.setFlippedX(true);
                     
                     
                    

                }

    },

});
 Character.DIR = {
    LEFT: 1,
    RIGHT: 2,
    Attack: 3,
    CHANGE: 4,
    STILL: 0
};


    