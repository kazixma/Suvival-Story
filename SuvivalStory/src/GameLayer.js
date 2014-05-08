var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 135, 206, 250, 255 ),3555,1059 );

        this.setPosition( new cc.Point( 0, 0 ) );
        this.mapleground =new BackgroundMaple(0,400);    
    
        this.mushroom=new Array();
        //this.GameLayer2=GameLayer2;
        this.character = new Character(400,134,this);
        this.walk=false;
       // var nummonster=Math.floor(Math.random() * (20 - 5 + 5)) + 5;
        this.nummonster =10;
        this.mapleground.setPosition(new cc.Point(0,400));
        this.gamelayer2=new GameLayer2(this);
       // this.gamelayer2.restatus(this.character);
       

       // this.character.setPosition( new cc.Point( 400, 500 ) );
        //this.character.speed=5;
        //alert(this.character.speed)
        this.pressSkill=0;
        this.click=true;
        this.character.sta_attack=false;
        this.addChild(this.mapleground);
        this.scheduleUpdate();
        this.mapleground.scheduleUpdate();
        
        
        
        for(i=0;i<this.nummonster;i++){
            var posmonster=Math.floor(Math.random() * (3599 - 1 + 1)) + 1;
            this.mushroom[i]=new Mushroom(posmonster,134);
            this.mushroom[i].setPosition(cc.p(posmonster,134));
            this.mushroom[i].scheduleUpdate();
            this.mushroom[i].reCharacter(this.character);
            this.addChild(this.mushroom[i]);
        
        }
        this.character.reMonster(this.mushroom);
        //this.schedule(this.createMonster,1,Infinity,null);
        
        // var followAction = cc.Follow.create(this.character, cc.rect(0,0,3555,1059));
        // this.runAction(followAction); 
        var followAction = cc.Follow.create(this.character, cc.rect(0,0,3555,1059));
        this.runAction(followAction); 
        //  var followAction2 = cc.Follow.create(, cc.rect(0,0,3555,1059));
        // this.runAction(followAction2); 
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
        if(this.character.sta_attack){
        this.character.attack();}

   // this.checkScene();
    //this.schedule(this.createMonster(),10,Infinity,null);
    },
    // checkScene:function(){
    //     if(this.character.x<300||this.character.x>900){
    //         console.log("slide");
    //         this.slide();

    //     }

    

    // },
    getCharacter:function(){
        return this.character;

    },
    createMonster:function(){
        this.monster =new Mushroom(400,200);
        this.monster.setPosition(cc.p(400,200));
        this.addChild(this.monster);
        this.monster.scheduleUpdate();

    },
    callSkill:function(){
        this.skill=new skill(this.character.x+50,this.character.y+120);
        this.skill.setPosition(cc.p(this.skill.x,this.skill.y));
       this.skill.scheduleUpdate();
       this.addChild(this.skill);

    },
    onKeyDown: function( e ) {
     if(!this.character.useSkill){   
        if(e==cc.KEY.w){
            this.character.Evo();


        }
        if(e==cc.KEY.e){
           this.character.Normal();

        }  
        if(this.character.change==false){   
            if ( e == cc.KEY.left) {
           
            
            this.character.direction=1;
            
            this.walk=true;
                if(this.click){
                     this.character.NormalWalk();
                    this.click=false;

            }
        }
       else if(e==cc.KEY.right){
           
                    
            this.character.direction=2;
             

            this.walk=true;
            if(this.click){
                this.character.NormalWalk();
                this.click=false;
            
            }
        }
        else if(e==cc.KEY.c){
            
            if(this.click){
                this.character.reMonster(this.mushroom);
                this.character.AttackDir();
                this.character.NormalAttack();
                 this.character.sta_attack=true;
                     
                     
                this.click=false;
            }
        }
        else if(e==49){
          this.pressSkill=49;               
          this.character.useSkill=true;   
          this.callSkill();
          this.skill.reMonster(this.mushroom);
          
          
        }
        else if(e==50){
            this.pressSkill=50;
          this.character.useSkill=true; 
           this.callSkill();
          this.skill.reMonster(this.mushroom);
        
          
        }
         else if(e==51){
            this.pressSkill=51;
          this.character.useSkill=true; 
           this.callSkill();
          this.skill.reMonster(this.mushroom);
        
          
        }
         else if(e==52){
            this.pressSkill=52;
          this.character.useSkill=true; 
           this.callSkill();
          this.skill.reMonster(this.mushroom);
        
          
        }
        }else{
            if ( e == cc.KEY.left) {
           
            
                this.character.direction=1;
                
                this.walk=true;
                if(this.click){
                    this.character.EvoWalk();
                    this.click=false;

            }
        }
        else if(e==cc.KEY.right){
           
                    
            this.character.direction=2;
             

            this.walk=true;
            if(this.click){
                this.character.EvoWalk();
                this.click=false;
            
            }
        }
        else if(e==cc.KEY.c){
            
            if(this.click){
                this.character.reMonster(this.mushroom);
                
                    this.character.AttackDir();
                    this.character.EvoAttack();
                     
                    this.character.sta_attack=true;
                     
                     
                     this.click=false;
                
              
            }


        }
        else if(e==49){
            this.pressSkill=49;
          this.character.useSkill=true; 
           this.callSkill();
          this.skill.reMonster(this.mushroom);
        
          
        }
         else if(e==50){
            this.pressSkill=50;
          this.character.useSkill=true; 
           this.callSkill();
          this.skill.reMonster(this.mushroom);
        
          
        }
         else if(e==51){
            this.pressSkill=51;
          this.character.useSkill=true; 
           this.callSkill();
          this.skill.reMonster(this.mushroom);
        
          
        }
         else if(e==52){
            this.pressSkill=52;
          this.character.useSkill=true; 
           this.callSkill();
          this.skill.reMonster(this.mushroom);
        
          
        }
    }}
    },
    onKeyUp: function( e ) {
      if(!this.character.useSkill){  
       
        if(this.character.change==false){    

            if(e==cc.KEY.left){
                
                this.click=true; 
                this.walk=false;
                this.character.Normal();
                console.log( 'Up: ' + e );

            }
            else if(e==cc.KEY.right){
                this.walk=false;
                this.click=true;
                this.character.Normal();
                console.log( 'Up: ' + e );
            }
            else if(e==cc.KEY.c){
                this.character.sta_attack=false;
                this.click=true;
                this.character.Normal();
                
                
             }
        
        }
        else{
            if(e==cc.KEY.left){
                
                this.click=true; 
                this.walk=false;
                this.character.Evo();
                console.log( 'Up: ' + e );

            }
            else if(e==cc.KEY.right){
                this.walk=false;
                this.click=true;
                this.character.Evo();
                console.log( 'Up: ' + e );
            }
            else if(e==cc.KEY.c){
                 this.character.sta_attack=false;
                 this.click=true;
                 this.character.Evo();
            
       


    }

    }}}

});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        var layer2 = new GameLayer2();
        layer.init();
        
        layer2.init(layer);
        this.addChild( layer );
        this.addChild( layer2 );
        
    }

});

