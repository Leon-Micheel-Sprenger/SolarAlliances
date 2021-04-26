
// In here, we are storing all available front end components and designs of p5. 
// To find other functions and executing commands, go to function-modules.js



//Creating the Grid for the main menu. 

//Grid variables
let tilesArr= [];
let gridStartX=0;
let gridStartY=0;
let side = 100;
let gridX = window.innerWidth/side;    //length of the grid
let gridY = window.innerHeight/side;   // height of the grid



//Grid modules:

function createGrid(){
  for (r=gridStartX; r<gridX+gridStartX;r++){
    tilesArr[r]= [];
    for(c=gridStartY; c<gridY+gridStartY; c++){
      tilesArr[r][c] = new Tile (r, c, side,txt=``,255);    //to let tile numbers appear, insert into txt: ${r},${c} 
    } 
  } 
}


function drawGrid(){
  for (r=gridStartX; r<gridX+gridStartX;r++)
    for(c=gridStartY; c<gridY+gridStartY; c++){
      tilesArr[r][c].drawCharacter();
  }
}



//Creating and drawing main interface.

function createGame(){

  InputName.remove();
  InputPass.remove();
  InputEmail.remove();
  
  background(220);
  createGrid();
  drawGrid();
}





//Creating Login Interface

//Login Variables: 
let loginFrame;
let registerBtn;
let loginBtn;
let InputName;
let InputPass;
let InputEmail;
let username;
let password;
let email;
let playerId;



function loginScreen(){

  rx= width*0.5;
  ry= height*0.5
  rw= 600;
  rh= 500;
  
  //Login Screen Frame, Title and Description
  loginFrame = new OnScreenFrame(rx,ry,rw,rh)
  loginFrame.drawScreen();
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Login or Register", rx, ry-rh/2.2)
  
  textAlign(CENTER),
  textSize(15);
  text("Welcome to Solar Alliances. Please login into your existing account.",rx, ry-rh/3 )
  text("Or register as a new User, if you don't have an account.",rx, ry-rh/4 )
  

  //Create Buttons
  loginBtn = new Button(rx,ry+100,300,50,'Login / Register',0,255,20);
  InputName = createInput('Name').position(rx-100, ry-60);
  InputPass = createInput('Password').position(rx-100, ry-30);
  InputEmail = createInput('Email').position(rx-100, ry);

  //InputName.position(50,50);



  //Draw Buttons
  rectMode(CENTER);
  loginBtn.drawButton();
  
 
}




// Resource Bar









