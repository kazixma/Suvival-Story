var arrowkey = cc.Sprite.extend({
    ctor: function(x,y) {
        this._super();
       // this.initWithFile( 'images/stay_0.png' );

       	this.movingAction = null;
        
        this.x=x;
        this.y=y;
       	
       	this.setAnchorPoint(cc.p(0,0));
       
    },
    update:function(){
        this.updatePostion();
    },
    
    updatePostion:function(){
        this.setPosition( cc.p( this.x, this.y ) );
    },
     createAnimationStayUp: function() {
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 0; i++) {
            var str = "stay_" + i +"_u" +".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.RepeatForever.create(cc.Animate.create(animation));       
             
        
    },
     createAnimationStayDown: function() {
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 0; i++) {
            var str = "stay_" + i +"_d" +".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.RepeatForever.create(cc.Animate.create(animation));       
             
        
    },
     createAnimationStayLeft: function() {
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 0; i++) {
            var str = "stay_" + i +"_l" +".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.RepeatForever.create(cc.Animate.create(animation));       
             
        
    },
     createAnimationStayRight: function() {
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 0; i++) {
            var str = "stay_" + i +"_r" +".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.RepeatForever.create(cc.Animate.create(animation));       
             
        
    },
     createAnimationSuccessUp: function() {
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 4; i++) {
            var str = "success_" + i + "_u"+".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.07);


        return cc.RepeatForever.create(cc.Animate.create(animation));       
             
        
    },
     createAnimationSuccessDown: function() {
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 4; i++) {
            var str = "success_" + i + "_d"+".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.07);


        return cc.RepeatForever.create(cc.Animate.create(animation));       
             
        
    },
     createAnimationSuccessRight: function() {
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 4; i++) {
            var str = "success_" + i + "_r"+".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.07);


        return cc.RepeatForever.create(cc.Animate.create(animation));       
             
        
    },
     createAnimationSuccessLeft: function() {
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 4; i++) {
            var str = "success_" + i + "_l"+".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.07);


        return cc.RepeatForever.create(cc.Animate.create(animation));       
             
        
    },
     createAnimationFailUp: function() {
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 3; i++) {
            var str = "fail_" + i +"_u"+ ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.RepeatForever.create(cc.Animate.create(animation));       
             
        
    },
     createAnimationFailDown: function() {
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 3; i++) {
            var str = "fail_" + i +"_d"+ ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.RepeatForever.create(cc.Animate.create(animation));       
             
        
    },
     createAnimationFailRight: function() {
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 3; i++) {
            var str = "fail_" + i +"_r"+ ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.RepeatForever.create(cc.Animate.create(animation));       
             
        
    },
     createAnimationFailLeft: function() {
        this.getSprite();
        var animFrames = [];
        for (var i = 0; i <= 3; i++) {
            var str = "fail_" + i +"_l"+ ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.2);


        return cc.RepeatForever.create(cc.Animate.create(animation));       
             
        
    },
    start:function(){

        this.runAction( this.movingAction );
    },
    stop:function(){
    
        this.stopAction( this.movingAction );
    
    },
    getSprite:function(){
        return cc.SpriteFrameCache.getInstance().addSpriteFrames(arrow_s_plist,arrow_s);
    },


});


