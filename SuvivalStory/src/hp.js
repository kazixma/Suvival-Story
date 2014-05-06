var hp = cc.Sprite.extend({
    ctor: function(x,y) {
        this._super();
        this.initWithFile( 'images/hp.png');
       	
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


