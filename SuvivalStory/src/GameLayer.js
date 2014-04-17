var GameLayer = cc.LayerColor.extend({
    init: function() {
    this._super( new cc.Color4B( 135, 206, 250, 255 ) );
    this.setPosition( new cc.Point( 0, 0 ) );
    this.mapleground =new BackgroundMaple();    
    this.character = new Character(400,134);
    this.mushroom=new Array();
    
    var nummonster=Math.floor(Math.random() * (20 - 5 + 5)) + 5;

    this.mapleground.setPosition(new cc.Point(800,400));

   // this.character.setPosition( new cc.Point( 400, 500 ) );
    //this.character.speed=5;
    //alert(this.character.speed)
    this.click=true;
    this.addChild(this.mapleground);

    
    
    for(i=1;i<nummonster;i++){
    var posmonster=Math.floor(Math.random() * (1200 - 1 + 1)) + 1;
    this.mushroom[i]=new Mushroom(posmonster,134);
    this.mushroom[i].setPosition(cc.p(posmonster,134));
    this.mushroom[i].scheduleUpdate();
    this.addChild(this.mushroom[i]);
    
    }
    
    
    

    this.addChild(this.character );

    this.character.scheduleUpdate();
   

    this.setKeyboardEnabled( true );

    },
    onKeyDown: function( e ) {
    if ( e == cc.KEY.left) {
       
        
        this.character.direction=1;
        
        this.character.walk();
        if(this.click){
        this.character.stop();
        console.log( 'Down: ' + e );
         this.character.movingAction = this.character.createAnimationWalkLeft();
        console.log(this.click);
         //this.character.createAnimationWalkLeft();
        this.character.start();
        this.click=false;
        }
    }
    if(e==cc.KEY.right){
       
                
         this.character.direction=2;
         

        this.character.walk();
        if(this.click){
        this.character.stop();
        console.log( 'Down: ' + e );
        this.character.movingAction = this.character.createAnimationWalkRight();

        console.log(this.click);
         //this.character.createAnimationWalkLeft();
        this.character.start();
        this.click=false;
        
        }
    }
    if(e==cc.KEY.c){
        if(this.click){
            if(this.character.direction==1){
            this.character.stop();
             console.log( 'Down: ' + e );
             this.character.movingAction=this.character.createAnimationAttackLeft();
             this.character.start();
             this.click=false;
            }
            if(this.character.direction==2){
             this.character.stop();
             console.log( 'Down: ' + e );
             this.character.movingAction=this.character.createAnimationAttackRight();
             this.character.start();
             this.click=false;

            }
        }
    }
    },
    onKeyUp: function( e ) {
    if(e==cc.KEY.left){
        
    this.click=true; 
    
    this.character.stop();
    this.character.movingAction = this.character.createAnimationStandLeft();
    this.character.start();
    console.log( 'Up: ' + e );

    }
    if(e==cc.KEY.right){
        
    this.click=true;
    this.character.stop();
    this.character.movingAction = this.character.createAnimationStandRight();
    this.character.start();
    console.log( 'Up: ' + e );
    }
    if(e==cc.KEY.c){
        
        this.click=true;
        this.character.stop();
        if(this.character.direction==2){
        this.character.movingAction=this.character.createAnimationStandRight();
        }
        if(this.character.direction==1){
         this.character.movingAction=this.character.createAnimationStandLeft(); 

        }
        this.character.start();
        
        
     }
    
    

    }

});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
        
    }

});

