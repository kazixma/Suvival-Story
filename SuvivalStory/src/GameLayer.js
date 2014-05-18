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
       this.nummonster =Math.floor(Math.random() * (40 - 5 + 5)) + 5;
       //this.nummonster=2;
        this.mapleground.setPosition(new cc.Point(0,400));
        this.gamelayer2=new GameLayer2(this);
       // this.gamelayer2.restatus(this.character);
       

       // this.character.setPosition( new cc.Point( 400, 500 ) );
        //this.character.speed=5;
        //alert(this.character.speed)
       // this.skill=new skill(this.character.x+50,this.character.y+120);
       // this.skill2=new skill2(this.character.x+50,this.character.y+120);
        this.pressSkill=0;
        this.click=true;
        this.character.sta_attack=false;
        this.addChild(this.mapleground);
        this.scheduleUpdate();
        this.mapleground.scheduleUpdate();
        
        
        
        for(i=0;i<this.nummonster;i++){
            var posmonster=Math.floor(Math.random() * (3599 - 1 + 1)) + 1;
            if(i!=this.nummonster-1){
            this.mushroom[i]=new Mushroom(posmonster,134);
            this.mushroom[i].setPosition(cc.p(posmonster,134));
            this.mushroom[i].scheduleUpdate();
            this.mushroom[i].reCharacter(this.character);
            this.addChild(this.mushroom[i]);
            }
            else{
              this.mushroom[i]=new Boss(2800,35);
            this.mushroom[i].setPosition(cc.p(2800,35));
            this.mushroom[i].scheduleUpdate();
            this.mushroom[i].reCharacter(this.character);
            this.addChild(this.mushroom[i]);

            }
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
       
       

        //this.skill=[];
       //  for(i=0;i<=7;i++){
       //  this.skill[i]=new skill(this.character.x+50,this.character.y+120,this);
       //  this.skill[i].setPosition(cc.p(this.skill[i].x,this.skill[i].y));
       //  this.skill[i].scheduleUpdate();
       //  this.addChild(this.skill[i]);
       //  this.skill[i].reMonster(this.mushroom);
       // }
        
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
        //console.log(this.pressSkill);

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
            this.skill=new skill3(this.character.x+50,this.character.y+120,this);
            this.skill.setPosition(cc.p(this.skill.x,this.skill.y));
            this.skill.scheduleUpdate();
           
           
            
            this.skill.reMonster(this.mushroom);
            this.addChild(this.skill);

    },
    callSkill2:function(){
            this.skill2=new skill2(this.character.x+50,this.character.y+120);
            this.skill2.setPosition(cc.p(this.skill2.x,this.skill2.y));
            this.skill2.scheduleUpdate();
           
           
            
            this.skill2.reMonster(this.mushroom);
            this.addChild(this.skill2);

    },
    // callSkill1:function(){
            
    //         this.addChild(this.skill);
            
            

    //     //this.skill.stop();
    //    //  this.skill=[];
    //    //  for(i=0;i<=7;i++){
    //    //  this.skill[i]=new skill(this.character.x+50,this.character.y+120);
    //    //  this.skill[i].setPosition(cc.p(this.skill[i].x,this.skill[i].y));
    //    //  this.skill[i].scheduleUpdate();
    //    //  this.addChild(this.skill[i]);
    //    //  this.skill[i].reMonster(this.mushroom);
    //    //  if(i==0){
    //    //      this.skill[i].movingAction=this.skill[i].createAnimationThunderSkill();

    //    //  }
    //    //  else if(i==1){
    //    //      this.skill[i].movingAction=this.skill[i].createAnimationIceSwordSkill();

    //    //  }
    //    // }


    // },
    //  callSkill2:function(){
    
    //         this.addChild(this.skill2);
           

    //     //this.skill.stop();
    //    //  this.skill=[];
    //    //  for(i=0;i<=7;i++){
    //    //  this.skill[i]=new skill(this.character.x+50,this.character.y+120);
    //    //  this.skill[i].setPosition(cc.p(this.skill[i].x,this.skill[i].y));
    //    //  this.skill[i].scheduleUpdate();
    //    //  this.addChild(this.skill[i]);
    //    //  this.skill[i].reMonster(this.mushroom);
    //    //  if(i==0){
    //    //      this.skill[i].movingAction=this.skill[i].createAnimationThunderSkill();

    //    //  }
    //    //  else if(i==1){
    //    //      this.skill[i].movingAction=this.skill[i].createAnimationIceSwordSkill();

    //    //  }
    //    // }


    // },
    deleteAllSkill:function(){
        // for(i=0;i<=7;i++){
        //     this.removeChild(this.skill[i]);

        // }
        this.removeChild(this.skill);

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

         //this.deleteAllSkill();

          this.character.useSkill=true;   
           this.callSkill();
         
          this.pressSkill=49; 
          
          
          
        }
        else if(e==50){
         // this.deleteAllSkill(); 
          this.character.useSkill=true;
            
         //  this.callSkill2();
           this.pressSkill=50;
          //this.skill.reMonster(this.mushroom);
        
          
        }
         else if(e==51){
             
          this.character.useSkill=true; 
           //this.callSkill();
           this.pressSkill=51;
         // this.skill.reMonster(this.mushroom);
        
          
        }
         else if(e==52){
            
          this.character.useSkill=true; 
          //this.callSkill();
          this.pressSkill=52;
         // this.skill.reMonster(this.mushroom);
        
          
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
            this.character.mp-=1;
            if(this.click){
                this.character.reMonster(this.mushroom);
                
                    this.character.AttackDir();
                    this.character.EvoAttack();
                     
                    this.character.sta_attack=true;
                     
                     
                     this.click=false;
                
              
            }


        }
        else if(e==49){
            
          this.character.useSkill=true; 
          // this.callSkill();
           this.pressSkill=49;
         // this.skill.reMonster(this.mushroom);
        
          
        }
         else if(e==50){
            
          this.character.useSkill=true; 
         // this.callSkill();
           this.pressSkill=50;
         // this.skill.reMonster(this.mushroom);
        
          
        }
         else if(e==51){
            
          this.character.useSkill=true; 
         //this.callSkill();
           this.pressSkill=51;
        //  this.skill.reMonster(this.mushroom);
        
          
        }
         else if(e==52){
            
          this.character.useSkill=true; 
         //this.callSkill();
           this.pressSkill=52;
         // this.skill.reMonster(this.mushroom);
        
          
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
        this.layer = new GameLayer();
        var layer2 = new GameLayer2();
        this.layer.init();
        this.temp=1;
        layer2.init(this.layer);
        this.addChild( this.layer );
        this.addChild( layer2 );
        this.scheduleUpdate();
        
    },
    update:function(){
      if(this.layer.character.hp<=0){
          if(this.temp==1){
            this.temp++;
          var gameover=new GameOver(-350,-200);
          this.addChild(gameover);
          gameover.scheduleUpdate();
        }

        }
      else if(this.layer.mushroom[this.layer.nummonster-1].hp<=0){
          if(this.temp==1){
            this.temp++;
          var winner=new Winner(100,-100);
          this.addChild(winner);
          winner.scheduleUpdate();
        }
      }


    }

});

