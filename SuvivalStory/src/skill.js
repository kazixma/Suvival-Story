var skill = cc.Sprite.extend({
    ctor: function(x,y) {
        this._super();
       // this.initWithFile( 'images/stay_0.png' );

       	this.movingAction = null;
        
        this.x=x;
        this.y=y;
       	this.statusKey=null;
        this.successKey=false;
        //this.failKey=false;

       	this.setAnchorPoint(cc.p(0.5,0.5));
       
    },
    update:function(){
        this.updatePostion();
        this.attack();
    },
    
    updatePostion:function(){
        this.setPosition( cc.p( this.x, this.y ) );
    },
     createAnimationAncestral: function() {
        this.getSprite1();
        var animFrames = [];
        for (var i = 0; i <= 37; i++) {
            var str = "effect_" + i +".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.Animate.create(animation);      
             
        
    },
    runAncestral:function(){
          this.runAction(cc.Sequence.create(
            this.createAnimationAncestral(),
            cc.CallFunc.create(function () {
                this.removeFromParent();
            }, this)
        ));

    },
    createAnimationDkSwordSkill: function() {
        this.getSprite2();
        var animFrames = [];
        for (var i = 0; i <= 18; i++) {
            var str = "effect_" + i +".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.Animate.create(animation);      
             
        
    },
    runDkSwordSkill:function(){
          this.runAction(cc.Sequence.create(
            this.createAnimationDkSwordSkill(),
            cc.CallFunc.create(function () {
                this.removeFromParent();
            }, this)
        ));

    },
    createAnimationFishSkill: function() {
        this.getSprite3();
        var animFrames = [];
        for (var i = 1; i <= 20; i++) {
            var str = "screen_" + i +".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.Animate.create(animation);      
             
        
    },
    runFishSkill:function(){
          this.runAction(cc.Sequence.create(
            this.createAnimationFishSkill(),
            cc.CallFunc.create(function () {
                this.removeFromParent();
            }, this)
        ));

    },
    createAnimationIceSwordSkill: function() {
        this.getSprite4();
        var animFrames = [];
        for (var i = 0; i <= 13; i++) {
            var str = "effect_" + i +".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.Animate.create(animation);      
             
        
    },
    runIceSwordSkill:function(){
          this.runAction(cc.Sequence.create(
            this.createAnimationIceSwordSkill(),
            cc.CallFunc.create(function () {
                this.removeFromParent();
            }, this)
        ));

    },
    createAnimationLaserSkill: function() {
        this.getSprite5();
        var animFrames = [];
        for (var i = 0; i <= 31; i++) {
            var str = "screen_" + i +".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.Animate.create(animation);      
             
        
    },
    runLaserSkill:function(){
          this.runAction(cc.Sequence.create(
            this.createAnimationLaserSkill(),
            cc.CallFunc.create(function () {
                this.removeFromParent();
            }, this)
        ));

    },
    createAnimationSpiritSkill: function() {
        this.getSprite6();
        var animFrames = [];
        for (var i = 0; i <= 16; i++) {
            var str = "effect_" + i +".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.Animate.create(animation);      
             
        
    },
    runSpiritSkill:function(){
          this.runAction(cc.Sequence.create(
            this.createAnimationSpiritSkill(),
            cc.CallFunc.create(function () {
                this.removeFromParent();
            }, this)
        ));

    },
     createAnimationSwordRaySkill: function() {
        this.getSprite7();
        var animFrames = [];
        for (var i = 0; i <= 20; i++) {
            var str = "effect_" + i +".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.Animate.create(animation);      
             
        
    },
    runSwordRaySkill:function(){
          this.runAction(cc.Sequence.create(
            this.createAnimationSwordRaySkill(),
            cc.CallFunc.create(function () {
                this.removeFromParent();
            }, this)
        ));

    },
     createAnimationThunderSkill: function() {
        this.getSprite8();
        var animFrames = [];
        for (var i = 0; i <= 33; i++) {
            var str = "effect_" + i +".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.Animate.create(animation);      
             
        
    },
    runThunderSkill:function(){
          this.runAction(cc.Sequence.create(
            this.createAnimationThunderSkill(),
            cc.CallFunc.create(function () {
                this.removeFromParent();
            }, this)
        ));

    },
     
     reMonster:function(monster){
        this.monster=monster;

    },
    attack:function(){
    
    
        for(i=0;i<10;i++){
        this.checkIntersect(this.monster[i].getRect(),i);
        
        }
        
        

    },
     checkIntersect:function(rect,i){
        
    
        this.intersectionRect = cc.rectIntersectsRect(rect, this.getRect());   
        console.log(this.intersectionRect);
        if(this.intersectionRect){
          //  this.mushroomstop();
            this.monster[i].stop();
        //this.mushroom[i].reBack();
           // this.mushroom[i].live=false;

           // var fadeOut = cc.FadeOut.create(1);

            // var sequence2 = cc.Sequence.create(
            //     fadeOut,
            //     cc.CallFunc.create(function () {
            //     this.mushroom[i].removeFromParent();
            // }, this)
            // );
            this.monster[i].hit=true;
            if(this.monster[i].hit){
                 
                // this.mushroom[i].runAction(cc.Sequence.create(
                //  this.mushroom[i].createAnimationisHit(),
                //  cc.CallFunc.create(function () {
                //      this.mushroom[i].reBack();
                //  }, this)
                //   ));

              // if(this.mushroom[i].rebacked){
                //console.log("kyu");
                this.monster[i].isHit();    
                this.monster[i].hit=false;
                this.monster[i].rebacked=false;
                //}
            }
            // this.mushroom[i].runAction(cc.Sequence.create(
            // this.mushroom[i].createAnimationisHit(),this.mushroom[i].createAnimationMove();
            // ));
            // this.mushroom[i].movingAction = this.mushroom[i].createAnimationisHit();
           // this.start();
           // this.mushroom[i].hp=this.mushroom[i].hp-this.damage;
       // this.mushroom[i].reBack();
               

           if(this.monster[i].hp<0){
                if(this.monster[i].live){
                    this.monster[i].stop();
            //this.mushroom[i].reBack();
                    this.monster[i].live=false;
                    var fadeOut = cc.FadeOut.create(1);

                    var sequence2 = cc.Sequence.create(
                    fadeOut,
                    cc.CallFunc.create(function () {
                    this.monster[i].removeFromParent();
                     }, this)
                    );

                     this.monster[i].runAction(cc.Sequence.create(
                    this.monster[i].createAnimationDie(),sequence2
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

        this.monster[i].rebacked=true;
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
    getSprite1:function(){
        return cc.SpriteFrameCache.getInstance().addSpriteFrames(ancestral_s_plist,ancestral_s);
    },
     getSprite2:function(){
        return cc.SpriteFrameCache.getInstance().addSpriteFrames(dkswordskill_s_plist,dkswordskill_s);
    },
     getSprite3:function(){
        return cc.SpriteFrameCache.getInstance().addSpriteFrames(fishskill_s_plist,fishskill_s);
    },
     getSprite4:function(){
        return cc.SpriteFrameCache.getInstance().addSpriteFrames(iceswordskill_s_plist,iceswordskill_s);
    },
     getSprite5:function(){
        return cc.SpriteFrameCache.getInstance().addSpriteFrames(laserskill_s_plist,laserskill_s);
    },
     getSprite6:function(){
        return cc.SpriteFrameCache.getInstance().addSpriteFrames(spiritskill_s_plist,spiritskill_s);
    },
     getSprite7:function(){
        return cc.SpriteFrameCache.getInstance().addSpriteFrames(swordrayskill_s_plist,swordrayskill_s);
    },
     getSprite8:function(){
        return cc.SpriteFrameCache.getInstance().addSpriteFrames(thunderskill_s_plist,thunderskill_s);
    },
    


});


