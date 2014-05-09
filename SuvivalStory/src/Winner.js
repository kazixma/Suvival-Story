var Winner = cc.Sprite.extend({
    ctor: function(x,y) {
        this._super();
        this.initWithFile( 'images/winner.png' );
       	
        this.x=x;
        this.y=y;
       	this.tester=40;
       	this.setAnchorPoint(cc.p(0,0));
       
    },
    update:function(){
        this.updatePostion();
    },
    
    updatePostion:function(){
        this.setPosition( cc.p( this.x, this.y ) );
    } 

});


