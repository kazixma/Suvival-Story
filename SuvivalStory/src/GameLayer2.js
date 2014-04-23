var GameLayer2 = cc.LayerColor.extend({
    init: function() {
    // this._super( new cc.Color4B( 135, 206, 250, 255 ));
    // this.setPosition( new cc.Point( 0, 0 ) );
      var draw = cc.DrawNode.create();
            
         // art
        draw.drawSegment( new cc.Point(100,20), new cc.Point(300,20),10, new cc.Color4F(0,0.635,0.909,1)); // sound 
        draw.drawSegment( new cc.Point(100,50), new cc.Point(300,50),10, new cc.Color4F(0.423,0.184,0.517,1)); // writing
        this.addChild(draw);
    },
   
    update:function(){
   },
    
       


    

   

});





