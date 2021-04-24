
// In here, we are storing all available front end components and designs of p5. 
// To find other functions and executing commands, go to function-modules.js



//Createing the Grid for the main menu. 

//Grid variables
let tilesArr= [];
let gridStartX=0;
let gridStartY=0;
let side = 100;
let gridX = window.innerWidth/side;
let gridY = window.innerHeight/side;



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

//creating and drawing main interface.
function createGame(){

  InputName.remove();
  InputPass.remove();
  MyLoginBtn.remove();

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
let MyLoginBtn;


function loginScreen(){

  rx= width*0.5;
  ry= height*0.5
  rw= 600;
  rh= 500
  
  //Login Screen Frame, Title and Description
  loginFrame = new OnScreenFrame(rx,ry,rw,rh)
  loginFrame.drawScreen();
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Login or Register", rx, ry-rh/2.2)
  
  textAlign(CENTER),
  textSize(15);
  text("Welcome to Solar Alliances. Please login into your existing account.",rx, ry-rh/3 )
  text("Or register as a new User, if you don't have an account",rx, ry-rh/4 )
  

  //Create Buttons
  loginBtn = new Button(rx,ry+100,300,50,'Login',0,255,20);
  registerBtn= new Button(rx,ry+200,300,50,'Register new Player',0,255,20)
  InputName = createInput('Name');
  InputPass = createInput('Password');
  InputEmail = createInput('Email');
  MyLoginBtn = createButton('Login');


  //Draw Buttons
  rectMode(CENTER);
  loginBtn.drawButton();
  registerBtn.drawButton();
  
}



//CHANGE LOCATION OF MODULE: Do the Login

function doLogin(){

username = InputName.value();
password = InputPass.value();
email = InputEmail.value();

dataSent = {
  "username": username,
  "password": password,
  "email": email
}

httpPost('/Login', 'json', dataSent, (dataReceived)=>{

  playerId = dataReceived[0].Player_Id;
  console.log('playerId '+ playerId);
  createGame();
})


}




