var skill2 = cc.Sprite.extend({
    ctor: function(x,y) {
        this._super();
       // this.initWithFile( 'images/stay_0.png' );

       	  this.movingAction = this.createAnimationIceSwordSkill();
        // this.start();
       
        
        this.x=x;
        this.y=y;
       	this.statusKey=null;
        this.successKey=false;
        //this.failKey=false;

       	this.setAnchorPoint(cc.p(0.5,0.5));
        //this.runIceSwordSkill();
       
    },
    update:function(){
        this.updatePostion();
        this.attack();
        //  if(this.movingAction.isDone()){
        //     this.removeFromParent();
        //     this.test2=true;

        // }
        
    },
    
    updatePostion:function(){
        this.setPosition( cc.p( this.x, this.y ) );
    },
     
    createAnimationIceSwordSkill: function() {
       // this.stopAllActions();
        this.getSprite();
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
       
         // var sequence2 = cc.Sequence.create(
         //            cc.CallFunc.create(function () {
         //            this.stopAllActions();
         //             }, this),
         //            cc.CallFunc.create(function () {
         //            this.removeFromParent();
         //             }, this)
         //            );

                     this.runAction(cc.Sequence.create(
                    this.createAnimationIceSwordSkill(), cc.CallFunc.create(function () {
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
    actionNull:function(){
        this.movingAction=null;

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
   
     getSprite:function(){
        return cc.SpriteFrameCache.getInstance().addSpriteFrames(iceswordskill_s_plist,iceswordskill_s);
    },
    
    


});


