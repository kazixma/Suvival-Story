var BackgroundMaple = cc.Sprite.extend({
    ctor: function(x,y) {
        this._super();
        this.initWithFile( 'images/MapleMap_image.png' );
       	
        this.x=x;
        this.y=y;
       	this.tester=40;
       
    },
    update:function(){
    this.updatePostion();
    },
    slide:function(){
   	var actionBy = cc.MoveTo.create(2, cc.p(80, 80));
   	this.runAction( actionBy );

    },
    updatePostion:function(){
    	this.setPosition( cc.p( this.x, this.y ) );
    } 

});


