//All the variables
var canvas;
var form;
var valuer2;
var bg;
var back1 , back2 , back3 , back4 ;
var feedbackpic;
function preload(){
    bg = loadImage('image.jpg');
  feedbackpic = loadImage(' feedback.jpeg')
}
function setup (){
    canvas = createCanvas(displayWidth,displayHeight);
    form  = new Form();
    back1   = new Button('Back',50,750,'back1');  
    back2  = new Button('Back',200,750,'back2');
    back3 = new Button('Back',650,750,'back3');
}

function draw (){ 
    
    background(bg);
    form.display();  
    if(gameState === "form2"){
     valuer2 = valuer;
     }
    if(gameState === "Home"){
    //    back1.hide();
        form.display();
    }
    if(gameState == "didyouknow"){
    back1.display();
    back1.show();



    }
    else{
        back1.hide();
    }   
    if(gameState === "back1"){
        
        form.greeting.show();
        form.greeting2.show();
        form.didyouknow.show();
        form.feedback.show();
        form.Explore.show();
      }
   if(gameState === "Explore"){
            back2.display();
       back2.show();
   }else{
       back2.hide();
   }
   if(gameState === "back2"){
       form.greeting.show();
       form.greeting2.show();
       form.greeting3.show();
       form.Explore.show();
       form.feedback.show();
       form.didyouknow.show();
   }
   if(gameState === "feedback"){
       back3.display();
       back3.show();
   }
   else{
       back3.hide();
   }
   if(gameState === "back3"){
       form.greeting.show();
       form.greeting2.show();
       form.greeting3.show();
       form.feedback.show();
   }
   if(gameState === "feedback"){
    background(feedbackpic)
   }
}  