var GameLayer = cc.LayerColor.extend({
    init: function() {
    this._super( new cc.Color4B( 135, 206, 250, 255 ),3555,1059 );

    this.setPosition( new cc.Point( 0, 0 ) );
    this.mapleground =new BackgroundMaple(0,400);    
    
    this.mushroom=new Array();
   
    this.character = new Character(400,134,this);
    
   // var nummonster=Math.floor(Math.random() * (20 - 5 + 5)) + 5;
    this.nummonster =10;
    this.mapleground.setPosition(new cc.Point(0,400));



   // this.character.setPosition( new cc.Point( 400, 500 ) );
    //this.character.speed=5;
    //alert(this.character.speed)
    this.click=true;
    this.attack=false;
    this.addChild(this.mapleground);
    this.scheduleUpdate();
    this.mapleground.scheduleUpdate();
    this.change=false
    
    
    for(i=0;i<this.nummonster;i++){
    var posmonster=Math.floor(Math.random() * (3599 - 1 + 1)) + 1;
    this.mushroom[i]=new Mushroom(posmonster,134);
    this.mushroom[i].setPosition(cc.p(posmonster,134));
    this.mushroom[i].scheduleUpdate();
    this.addChild(this.mushroom[i]);
    
    }
    this.character.reMonster(this.mushroom);
    //this.schedule(this.createMonster,1,Infinity,null);
    
    // var followAction = cc.Follow.create(this.character, cc.rect(0,0,3555,1059));
    // this.runAction(followAction); 

    this.addChild(this.character );

    this.character.scheduleUpdate();
   

    this.setKeyboardEnabled( true );

    },
    // slide:function(){
    // //var actionTo = cc.MoveBy.create(2, cc.p(300, 0);
    // //this.startWithTarget(actionTo);
    
    // var followAction = cc.Follow.create(this.character, cc.rect(0,0,200,0));
    // this.mapleground.runAction(followAction);

    // },
    update:function(){
    if(this.attack){
    this.character.attack();}
    var followAction = cc.Follow.create(this.character, cc.rect(0,0,3555,1059));
    this.runAction(followAction); 
   // this.checkScene();
    //this.schedule(this.createMonster(),10,Infinity,null);
    },
    // checkScene:function(){
    //     if(this.character.x<300||this.character.x>900){
    //         console.log("slide");
    //         this.slide();

    //     }

    

    // },
    createMonster:function(){
    this.monster =new Mushroom(400,200);
    this.monster.setPosition(cc.p(400,200));
    this.addChild(this.monster);
    this.monster.scheduleUpdate();

    },
    onKeyDown: function( e ) {
    if(e==cc.KEY.w){
        this.character.stop();
        this.character.movingAction=this.character.createAnimationEvo();
        this.change=true;
        this.character.start();

    }
     if(e==cc.KEY.e){
        this.character.stop();
        this.character.movingAction=this.character.createAnimationStand();
        this.change=false;
        this.character.start();

    }  
    if(this.change==false){   
    if ( e == cc.KEY.left) {
       
        
        this.character.direction=1;
        
        this.character.walk();
        if(this.click){
        this.character.stop();
        console.log(this.character.x);
        console.log( 'Down: ' + e );
        this.character.setFlippedX(false);
        this.character.movingAction = this.character.createAnimationWalk();
    
        console.log(this.click);
       // this.character.createAnimationWalkLeft();
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
        this.character.setFlippedX(true);
        this.character.movingAction = this.character.createAnimationWalk();

        console.log(this.click);
         //this.character.createAnimationWalkLeft();
        this.character.start();
        this.click=false;
        
        }
    }
    if(e==cc.KEY.c){
        
        if(this.click){
            this.character.reMonster(this.mushroom);
            if(this.character.direction==1){
            this.character.stop();
             console.log( 'Down: ' + e );
            this.character.setFlippedX(false);
             this.character.movingAction=this.character.createAnimationAttack();
             
             this.character.start();
             this.attack=true;
             
             
             this.click=false;
            }
            if(this.character.direction==2){
             this.character.stop();
             console.log( 'Down: ' + e );
             this.character.setFlippedX(true);
             this.character.movingAction=this.character.createAnimationAttack();
             
             this.character.start();
            this.attack=true;
             
              
             this.click=false;

            }
        }
    }
    }else{
        if ( e == cc.KEY.left) {
       
        
        this.character.direction=1;
        
        this.character.walk();
        if(this.click){
        this.character.stop();
        console.log(this.character.x);
        console.log( 'Down: ' + e );
        this.character.setFlippedX(false);
        this.character.movingAction = this.character.createAnimationDkWalk();
    
        console.log(this.click);
       // this.character.createAnimationWalkLeft();
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
        this.character.setFlippedX(true);
        this.character.movingAction = this.character.createAnimationDkWalk();

        console.log(this.click);
         //this.character.createAnimationWalkLeft();
        this.character.start();
        this.click=false;
        
        }
    }
    if(e==cc.KEY.c){
        
        if(this.click){
            this.character.reMonster(this.mushroom);
            if(this.character.direction==1){
            this.character.stop();
             console.log( 'Down: ' + e );
            this.character.setFlippedX(false);
             this.character.movingAction=this.character.createAnimationDkAttack();
             
             this.character.start();
             this.attack=true;
             
             
             this.click=false;
            }
            if(this.character.direction==2){
             this.character.stop();
             console.log( 'Down: ' + e );
             this.character.setFlippedX(true);
             this.character.movingAction=this.character.createAnimationDkAttack();
             
             this.character.start();
            this.attack=true;
             
              
             this.click=false;

            }
        }


    }}
    },
    onKeyUp: function( e ) {
     if(e==cc.KEY.e){
        this.character.stop();
        this.character.movingAction=this.character.createAnimationStand();
        this.change=false;
        this.character.start();

    } 
    if(this.change==false){    

    if(e==cc.KEY.left){
        
    this.click=true; 
    
    this.character.stop();
    this.character.setFlippedX(false);
    this.character.movingAction = this.character.createAnimationStand();
    this.character.start();
    console.log( 'Up: ' + e );

    }
    if(e==cc.KEY.right){
        
    this.click=true;
    this.character.stop();
    this.character.setFlippedX(true);
    this.character.movingAction = this.character.createAnimationStand();
    this.character.start();
    console.log( 'Up: ' + e );
    }
    if(e==cc.KEY.c){
        this.attack=false;
        this.click=true;
        this.character.stop();
        if(this.character.direction==2){
        this.character.setFlippedX(true);
        this.character.movingAction=this.character.createAnimationStand();
        }
        if(this.character.direction==1){
        this.character.setFlippedX(false);
         this.character.movingAction=this.character.createAnimationStand(); 

        }
        this.character.start();
        
        
     }
    
    }else{
    if(e==cc.KEY.left){
        
    this.click=true; 
    
    this.character.stop();
    this.character.setFlippedX(false);
    this.character.movingAction = this.character.createAnimationEvo();
    this.character.start();
    console.log( 'Up: ' + e );

    }
    if(e==cc.KEY.right){
        
    this.click=true;
    this.character.stop();
    this.character.setFlippedX(true);
    this.character.movingAction = this.character.createAnimationEvo();
    this.character.start();
    console.log( 'Up: ' + e );
    }
    if(e==cc.KEY.c){
        this.attack=false;
        this.click=true;
        this.character.stop();
        if(this.character.direction==2){
        this.character.setFlippedX(true);
        this.character.movingAction=this.character.createAnimationEvo();
        }
        if(this.character.direction==1){
        this.character.setFlippedX(false);
         this.character.movingAction=this.character.createAnimationEvo(); 

        }
        this.character.start();
        
       


    }

    }}

});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
        
    }

});

