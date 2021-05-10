
// In here, we are storing all available front-end components and designs of p5. 
// To find backend functions and executing commands, go to function-modules.js
let cur_status = 'status_login'; //status_login, status_register, status_play


//Global Variables:

//Resource Icon paths
let moneyIconPath = 'assets/money-icon.jpg';
let oreIconPath = 'assets/money-icon.jpg';
let waterIconPath = 'assets/money-icon.jpg';
let peopleIconPath = 'assets/money-icon.jpg';
let rankIconPath = 'assets/money-icon.jpg';
let emptyIconPath = 'assets/money-icon.jpg';

//Ship Icon Paths
let transportShipIconPath =  'assets/money-icon.jpg';
let miningShipIconPath =  'assets/money-icon.jpg';
let warShipIconPath =  'assets/money-icon.jpg';
let explorationShipIconPath =  'assets/money-icon.jpg';

//Other paths
let exitButtonIconPath = 'assets/exit-icon.jpg';




//_____________________________________________________________________
//Creating the Grid for the main menu. (not used, just for reference) 
//Grid variables
let tilesArr= [];
let gridStartX=0;
let gridStartY=0;
let side = 100;
let gridX = window.innerWidth/side;    //length of the grid
let gridY = window.innerHeight/side;   // height of the grid

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






//______________________________________________
//Creating Login Interface
//Login Variables: 
let loginFrame;
let registerBtn;
let loginBtn;
let InputName;
let InputPass;




function loginScreen(){
  
  rx= width*0.5;
  ry= height*0.5;
  rw= 600;
  rh= 500;
  
  //Login Screen Frame, Title and Description

  if(cur_status=== 'status_login'){

  loginFrame = new OnScreenFrame(rx,ry,rw,rh)
  loginFrame.drawScreen();
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Login or Register", rx, ry-rh/2.2);
  textAlign(CENTER);
  textSize(15);
  text("Welcome to Solar Alliances. Please login into your existing account.",rx, ry-rh/3 )
  text("Or register as a new User, if you don't have an account.",rx, ry-rh/4 )
  

  //Create Buttons
  loginBtn = new Button(rx,ry+80,300,50,'Login',0,255,20);
  registerBtn = new Button(rx,ry+130,120,30,'Register as new Player',255,0,10);
  

  InputName = createInput('Name').position(rx-100, ry-60);
  InputPass = createInput('Password').position(rx-100, ry);
  
   //Draw Buttons
   rectMode(CENTER);
   loginBtn.drawButton();
   registerBtn.drawButton();

  } 
 
}


//_________________________________________________
//Creating and drawing Register Screen
//Variables
let InputPassTwo;
let InputEmail;
let registerFrame;
let submitRegisterBtn;

function registerScreen(){
  
  if(cur_status==='status_register'){
    	
    rx= width*0.5;
    ry= height*0.5;
    rw= 600;
    rh= 500;   

    InputPassTwo = createInput('Repeat Password').position(rx-100, ry+30);
    InputEmail = createInput('Email').position(rx-100, ry-30);
    

    //disable Loginbutton and Register player button
    loginBtn.disable();
    registerBtn.disable();
    fill(255);
    noStroke();
    rect(rx, ry+100, 310, 100);
    
    submitRegisterBtn = new Button(rx,ry+200,300,50,'Register',0,255,20);
    submitRegisterBtn.drawButton();
    console.log(cur_status);
  }
}





//__________________________________________________
//Creating and drawing main Menu.
//Variables:
let gameStatus= false;

function createGame(){

  gameStatus = true;
  cur_status = 'status_play';
  InputName.remove();
  InputPass.remove();
  background(220);
  
  createResourceBar();
  createButtons();
  
}



//_________________________
//Creating and Drawing Main Menu Buttons
//Variables:
let missionButton;
let stationButton;
let shipFleetButton;
let marketplaceButton;


function createButtons(){
missionButton = new Button(width-200,200,200,50,'Missions',0,255,20);
missionButton.drawButton();
}





//_____________________________________
// Creating and drawing Resource Bar
//Variables:
let barFrame;
let moneyIcon;
let oreIcon;
let waterIcon;
let peopleIcon;
let rankIcon;
let gameDate;

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
    fill(255);
    barFrame= new OnScreenFrame(rx, ry, rw, rh);
    barFrame.drawScreen();
    
    // create Icons
    moneyIcon = new Icon(moneyIconPath, rx-rw/2+5, ry-rh/3, 20, 32 );
    waterIcon = new Icon(waterIconPath, rx-rw/2+95, ry-rh/3, 20, 32 );
    oreIcon = new Icon(oreIconPath, rx-rw/2+195, ry-rh/3, 20, 32 );
    peopleIcon = new Icon(peopleIconPath, rx-rw/2+295, ry-rh/3, 20, 32 );
    rankIcon = new Icon(rankIconPath, rx-rw/2+495, ry-rh/3, 20, 32 );

  }
 
}




//Draw Resource-Values in Resourcebar
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
  text(`${rank}`,rx-rw/2+520, ry+5);
  text(`Year: ${gameDate}`,rx-rw/2+595, ry+5);
    
  pop();

  }
}





//________________________________
// Creating and drawing Missions Interface 
 //enables or disables interface
let missionFrame;
let singleMissionsBtn;
let multiMissionsBtn;
let runningMissionsBtn;
let missionRespawnTime;
let missionExitBtn;




//Mission Frame Variables:


let singlemission1;
let singlemission2;
let singlemission3;
let singlemission4;
let singlemission5;

let singleMissionsArr = [];

//Mission1 Variables; 
let singlemissionName;
let singlemissionStory;
let singlemissionTime;
let singlemissionInputMoney;
let singlemissionInputPeople;
let singlemissionInputOre;
let singlemissionInputWater;
let singlemissionInputShips;
let singlemissionRewardMoney;
let singlemissionRewardPeople;
let singlemissionRewardOre;
let singlemissionRewardWater;
let singlemissionRank;
let singlemissionAcceptBtn;


//Missions Interface
 function createMissionInterface(){

    rx= width*0.5;
    ry= height*0.5;
    rw= 700;
    rh= 750;

    //Frame, title and buttons of Mission Interface;
    missionFrame = new OnScreenFrame(rx, ry, rw, rh);
    missionFrame.drawScreen();

    singleMissionsBtn = new Button(rx-rx/2+220,ry-rh/2+75,250,50,'Single Player Missions',0,255,20)
    singleMissionsBtn.drawButton();

    multiMissionsBtn = new Button(rx+150,ry-rh/2+75,250,50,'Collaborative Missions',0,255,20)
    multiMissionsBtn.drawButton();

    runningMissionsBtn = new Button(rx+150,ry+(rh/2-50),250,50,'Running Missions',0,255,20);
    runningMissionsBtn.drawButton();

    missionExitBtn = new ExitButton(rx+rw/2-30, ry-rh/2,30,30);
    missionExitBtn.drawExitButton();
 
    push();
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("Missions", rx, ry-rh/2.2);
    textSize(15);
    text("Time until new Mission: ", rx-rw/2+100, ry+rh/2-50);
    fill('purple');
    textStyle(BOLD);
    text(`${missionRespawnTime} min.`, rx-rw/2+225, ry+rh/2-50 );
    pop();
    




    //___________________________________________________________________
    //Mission boxes and Input; (all of the same mission at this point)

    //create new missions in singleMissionsArr
 

    singlemission1 = new SoloMissionBox(rx, ry-(rh/4), rw-50, rh/7, singlemissionName, singlemissionStory, singlemissionTime, singlemissionInputMoney, singlemissionInputPeople, singlemissionInputOre, singlemissionInputWater, singlemissionInputShips, singlemissionRewardMoney, singlemissionRewardPeople, singlemissionRewardOre, singlemissionRewardWater, singlemissionRank);
    singlemission2 = new SoloMissionBox(rx, ry-(rh/4-100), rw-50, rh/7, singlemissionName, singlemissionStory, singlemissionTime, singlemissionInputMoney, singlemissionInputPeople, singlemissionInputOre, singlemissionInputWater, singlemissionInputShips, singlemissionRewardMoney, singlemissionRewardPeople, singlemissionRewardOre, singlemissionRewardWater, singlemissionRank);
    singlemission3 = new SoloMissionBox(rx, ry-(rh/4-200), rw-50, rh/7, singlemissionName, singlemissionStory, singlemissionTime, singlemissionInputMoney, singlemissionInputPeople, singlemissionInputOre, singlemissionInputWater, singlemissionInputShips, singlemissionRewardMoney, singlemissionRewardPeople, singlemissionRewardOre, singlemissionRewardWater, singlemissionRank);
    singlemission4 = new SoloMissionBox(rx, ry-(rh/4-300), rw-50, rh/7, singlemissionName, singlemissionStory, singlemissionTime, singlemissionInputMoney, singlemissionInputPeople, singlemissionInputOre, singlemissionInputWater, singlemissionInputShips, singlemissionRewardMoney, singlemissionRewardPeople, singlemissionRewardOre, singlemissionRewardWater, singlemissionRank);
    singlemission5 = new SoloMissionBox(rx, ry-(rh/4-400), rw-50, rh/7, singlemissionName, singlemissionStory, singlemissionTime, singlemissionInputMoney, singlemissionInputPeople, singlemissionInputOre, singlemissionInputWater, singlemissionInputShips, singlemissionRewardMoney, singlemissionRewardPeople, singlemissionRewardOre, singlemissionRewardWater, singlemissionRank);

    singleMissionsArr = [singlemission1, singlemission2, singlemission3, singlemission4, singlemission5];
   
    push()
    fill(255);
    stroke(5);
    singlemission1.drawBox();
    singlemission2.drawBox();
    singlemission3.drawBox();
    singlemission4.drawBox();
    singlemission5.drawBox();
    pop();
    
}











