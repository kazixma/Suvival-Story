var bgstat2 = cc.Sprite.extend({
    ctor: function(x,y,s) {
        this._super();
        this.initWithFile( s );
       	
        this.x=x;
        this.y=y;
       	
       	this.setAnchorPoint(cc.p(0,0));
       
    },
    update:function(){
        this.updatePostion();
    },
    
    updatePostion:function(){
        this.setPosition( cc.p( this.x, this.y ) );
    } 

});


