var GameLayer2 = cc.LayerColor.extend({
   

    
    init: function(GameLayer) {
    // this._super( new cc.Color4B( 135, 206, 250, 255 ));
    // this.setPosition( new cc.Point( 0, 0 ) );
      var draw = cc.DrawNode.create();
            
         // art
      this.GameLayer1=GameLayer;
      this.callKey=true;
      this.bgstat=new bgstat(0,-2);
      this.bgstat2=new bgstat2(568,-3,'images/test3.png');
      this.bgstat3=new bgstat2(-9,-3,'images/test.png');
      this.bgstat3.setPosition( cc.p( this.bgstat3.x, this.bgstat3.y ) );
      this.bgstat.setPosition( cc.p( this.bgstat.x, this.bgstat.y ) );
      this.bgstat2.setPosition( cc.p( this.bgstat2.x, this.bgstat2.y ) );
      this.hp=new hp(630,30);
      this.hp.setPosition(cc.p(this.hp.x,this.hp.y));
      this.mp=new mp(630,5);
      this.mp.setPosition(cc.p(this.mp.x,this.mp.y));
      //this.hp.setScaleX(0.5);
      this.ehpmp1=new ehpmp(630,30);
      this.ehpmp1.setPosition(cc.p(this.ehpmp1.x,this.ehpmp1.y));
      this.ehpmp2=new ehpmp(630,5);
      this.ehpmp2.setPosition(cc.p(this.ehpmp2.x,this.ehpmp2.y));
      
        // draw.drawSegment( new cc.Point(100,20), new cc.Point(300,20),10, new cc.Color4F(0,0.635,0.909,1)); // sound 
        // draw.drawSegment( new cc.Point(100,50), new cc.Point(300,50),10, new cc.Color4F(0.423,0.184,0.517,1)); // writing
      //this.hp.setScaleX() ; 
      this.scheduleUpdate();
      //this.character=null;
      this.character=this.GameLayer1.getCharacter();
      
      this.addChild(this.bgstat);
      this.addChild(this.bgstat2);
      
      this.addChild(this.bgstat3);
      
      this.addChild(this.ehpmp1);
      this.addChild(this.hp);
      this.addChild(this.ehpmp2);
      this.addChild(this.mp);
      
      this.setKeyboardEnabled( true );

    },
    // restatus: function(character){
    //   this.character=character;
    // },
    
   
    update:function(){
      if(this.character.hp>0){
        this.hp.setScaleX(this.character.hp/500);
      }

   },
    onKeyDown: function( e ) {
      console.log(e);
       //this.skill.removeFromParent();
      if(this.character.useSkill){

        
         if(this.callKey){
          this.numKey=0;
          this.deleteAllKey();
          this.randomKey();
          this.callKey=false;

         } 
         
         if(e==38){
            this.checkKey(38);

         }
         else if(e==40){
            this.checkKey(40);

         }
         else if(e==39){
            this.checkKey(39);

         }
         else if(e==37){
          this.checkKey(37);

         }
      }
    },
    onKeyUp: function( e ) {
      //this.deleteKey();
       if(e==38){


       }
       else if(e==40){


       }
       else if(e==39){


       }
       else if(e==37){


       }


    },
    randomKey:function(){
      this.keyNum=Math.floor(Math.random() * (8 - 1 + 1)) + 1;
     // var typeKey=Math.floor(Math.random() * (4 - 1 + 1)) + 1;
      this.arrow=[];
        for(i=0;i<this.keyNum;i++){
            var typeKey=Math.floor(Math.random() * (4 - 1 + 1)) + 1;
            this.arrow.push(new arrowkey(90+(i*60),-7));
            this.arrow[i].setPosition( cc.p( this.arrow[i].x, this.arrow[i].y ) );
            if(typeKey==1){

              this.arrow[i].statusKey=38;
              this.arrow[i].movingAction=this.arrow[i].createAnimationStayUp();
              this.arrow[i].start();

            }
            else if(typeKey==2){
              this.arrow[i].statusKey=40;
              this.arrow[i].movingAction=this.arrow[i].createAnimationStayDown();
              this.arrow[i].start();
            }
            else if(typeKey==3){
              this.arrow[i].statusKey=39;
              this.arrow[i].movingAction=this.arrow[i].createAnimationStayRight();
              this.arrow[i].start();
            }
            else
            {
              this.arrow[i].statusKey=37;
              this.arrow[i].movingAction=this.arrow[i].createAnimationStayLeft();
              this.arrow[i].start();
            }
            this.addChild(this.arrow[i]);
          }
    },
    checkKey:function(pressKey){
      if(this.arrow[this.numKey].statusKey==pressKey){
         if(this.arrow[this.numKey].statusKey==38){ 
         this.arrow[this.numKey].stop(); 
         this.arrow[this.numKey].movingAction=this.arrow[this.numKey].createAnimationSuccessUp();    
         this.arrow[this.numKey].start();
         //this.deleteEachKey(this.numKey); 
         this.arrow[this.numKey].successKey=true;
         this.numKey=this.numKey+1;
        }
        else if(this.arrow[this.numKey].statusKey==40){ 
         this.arrow[this.numKey].stop(); 
         this.arrow[this.numKey].movingAction=this.arrow[this.numKey].createAnimationSuccessDown();    
         this.arrow[this.numKey].start(); 
        this.arrow[this.numKey].successKey=true;
         this.numKey=this.numKey+1;
        }
        else if(this.arrow[this.numKey].statusKey==39){ 
         this.arrow[this.numKey].stop(); 
         this.arrow[this.numKey].movingAction=this.arrow[this.numKey].createAnimationSuccessRight();    
         this.arrow[this.numKey].start();
        this.arrow[this.numKey].successKey=true ;
         this.numKey=this.numKey+1;
        }
        else if(this.arrow[this.numKey].statusKey==37){ 
         this.arrow[this.numKey].stop(); 
         this.arrow[this.numKey].movingAction=this.arrow[this.numKey].createAnimationSuccessLeft();    
         this.arrow[this.numKey].start(); 
          this.arrow[this.numKey].successKey=true;
         this.numKey=this.numKey+1;
        }
      }else{

      //    if(this.arrow[this.numKey].statusKey==38){ 
      //    this.arrow[this.numKey].stop(); 
      //    this.arrow[this.numKey].movingAction=this.arrow[this.numKey].createAnimationFailUp();    
      //    this.arrow[this.numKey].start();
      //     this.arrow[this.numKey].successKey=false;
      //    //this.deleteEachKey(this.numKey); 
      //    this.numKey=this.numKey+1;
      //   }
      //   else if(this.arrow[this.numKey].statusKey==40){ 
      //    this.arrow[this.numKey].stop(); 
      //    this.arrow[this.numKey].movingAction=this.arrow[this.numKey].createAnimationFailDown();    
      //    this.arrow[this.numKey].start();
      //    this.arrow[this.numKey].successKey=false; 
      //    this.numKey=this.numKey+1;
      //   }
      //   else if(this.arrow[this.numKey].statusKey==39){ 
      //    this.arrow[this.numKey].stop(); 
      //    this.arrow[this.numKey].movingAction=this.arrow[this.numKey].createAnimationFailRight();    
      //    this.arrow[this.numKey].start(); 
      //    this.arrow[this.numKey].successKey=false;
      //    this.numKey=this.numKey+1;
      //   }
      //   else if(this.arrow[this.numKey].statusKey==37){ 
      //    this.arrow[this.numKey].stop(); 
      //    this.arrow[this.numKey].movingAction=this.arrow[this.numKey].createAnimationFailLeft();    
      //    this.arrow[this.numKey].start();
      //    this.arrow[this.numKey].successKey=false; 
      //    this.numKey=this.numKey+1;


      // }
      this.deleteAllKey();
      this.callKey=true;
      this.character.useSkill=false;
    }
    if(this.keyNum==this.numKey){
      this.allKeyCorrect();

    }



    },
    deleteEachKey:function(i){
      this.removeChild(this.arrow[i]);

    },
    deleteAllKey:function(){
      for(i=0;i<this.keyNum;i++){
        this.removeChild(this.arrow[i]);
      }
    
        
    },
    allKeyCorrect:function(){
      var correct=false;
      this.countKeySuccess=0;
      for(i=0;i<this.keyNum;i++){
        if( this.arrow[i].successKey){
          this.countKeySuccess++;

        }

      }
      if(this.countKeySuccess==this.keyNum){
          console.log("allkey");
          this.deleteAllKey();
          this.callKey=true;
          this.character.useSkill=false;
         // var bskill=this.buildSkill();
         // var rskill=this.removeSkill();
           correct=true;
        if(this.character.change==false){   
           if(this.GameLayer1.pressSkill==49){
               this.GameLayer1.skill.runDkSwordSkill();
            }
            else if(this.GameLayer1.pressSkill==50){


            }
            else if(this.GameLayer1.pressSkill==51){

              
            }
            else if(this.GameLayer1.pressSkill==52){

              
            }
          }
          else{
            if(this.GameLayer1.pressSkill==49){
               this.GameLayer1.skill.runDkSwordSkill();
            }
            else if(this.GameLayer1.pressSkill==50){


            }
            else if(this.GameLayer1.pressSkill==51){

              
            }
            else if(this.GameLayer1.pressSkill==52){

              
            }


          }
          //this.skill.movingAction=this.skill.createAnimationAncestral();
          //this.skill.start();

      }
      //return correct;


    },
    // removeSkill:function(){
    //   this.skill.stop();

    // },
    // buildSkill:function(){
    //   this.skill.movingAction=this.skill.createAnimationAncestral();
    //   this.skill.start()

    // },
   

    
       


    

   

});





