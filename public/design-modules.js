
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
let gameStatus= false;

function createGame(){

  gameStatus = true;
  InputName.remove();
  InputPass.remove();
  InputEmail.remove();
  
  background(220);
  
  createResourceBar()
  //createGrid();
  //drawGrid();


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


  //Draw Buttons
  rectMode(CENTER);
  loginBtn.drawButton();
  
 
}




// Resource Bar
//Variables:
let barFrame;
let moneyIcon;
let oreIcon;
let waterIcon;
let peopleIcon;
let rankIcon

let money;
let ore;
let water;
let people;
let rank;

let max_ore;
let max_water;
let max_people;


function createResourceBar(){
  if (gameStatus){
    rx=width-650/2;
    ry=20;
    rw=660;
    rh= 50;
  
    //create bar frame
    barFrame= new OnScreenFrame(rx, ry, rw, rh);
    barFrame.drawScreen();
    
    // create Icons
    moneyIcon = new Icon('assets/money-icon.jpg', rx-rw/2+5, ry-rh/3, 20, 32 );
    waterIcon = new Icon('assets/money-icon.jpg', rx-rw/2+95, ry-rh/3, 20, 32 );
    oreIcon = new Icon('assets/money-icon.jpg', rx-rw/2+195, ry-rh/3, 20, 32 );
    peopleIcon = new Icon('assets/money-icon.jpg', rx-rw/2+295, ry-rh/3, 20, 32 );
    rankIcon = new Icon('assets/money-icon.jpg', rx-rw/2+580, ry-rh/3, 20, 32 );


    //Get Rank from player
    loadJSON('/getPlayerRank/'+playerId, (dataReceived)=> {
    rank = dataReceived[0].Rank;
    console.log(rank);
    
  })


    //Get Resources from Database
    loadJSON('/getPlayerResources/'+playerId, (dataReceived)=> {
      money = dataReceived[0].Money;
      ore = dataReceived[0].Ore;
      water = dataReceived[0].Water;
      people = dataReceived[0].People;
      max_ore = dataReceived[0].Max_Ore;
      max_water = dataReceived[0].Max_Water;
      max_people = dataReceived[0].Max_People;
      console.log(dataReceived);
      loop();
    })  

  
    console.log('rank' +rank);
    
  }
 
}



//Draw Resources
function drawResourceValues(){
  if (gameStatus){
   //Resource bar Coordinates;
    rx=width-650/2;
    ry=20;
    rw=660;
    rh= 50;
 

  push();
  fill(0);
  textSize(12);
  text(`${money}`,(rx-rw/2+5)+40, ry+5);
  text(`${water}/${max_water}`,(rx-rw/2+5)+140, ry+5);
  text(`${ore}/${max_ore}`,(rx-rw/2+5)+240, ry+5);
  text(`${people}/${max_people}`,(rx-rw/2+5)+340, ry+5);
  text(`${rank}`,rx-rw/2+595, ry+5);
  pop();

  }
}









