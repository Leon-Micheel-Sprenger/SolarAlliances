
// In here, we are storing all available front-end components and designs of p5. 


// To find backend functions and executing commands, go to function-modules.js
let cur_status = 'status_login'; //status_login, status_register, status_play


//Global Variables:

//Resource Icon paths
let moneyIconPath = 'assets/money-icon.jpg';
let oreIconPath = 'assets/ore-icon.jpg';
let waterIconPath = 'assets/water-icon.jpg';
let peopleIconPath = 'assets/people-icon.jpg';
let rankIconPath = 'assets/rank-icon.jpg';
let emptyIconPath = 'assets/empty-icon.jpg';

//Ship Icon Paths
let transportShipIconPath =  'assets/transportship-icon.jpg';
let miningShipIconPath =  'assets/miningship-icon.jpg';
let warShipIconPath =  'assets/warship-icon.jpg';
let explorationShipIconPath =  'assets/explorationship-icon.jpg';

//Other paths
let exitButtonIconPath = 'assets/exit-icon.jpg';
let shipOnMissionIconPath = 'assets/exit-icon.jpg';




// //_____________________________________________________________________
// //Creating the Grid for the main menu. (not used, just for reference) 
// //Grid variables
// let tilesArr= [];
// let gridStartX=0;
// let gridStartY=0;
// let side = 100;
// let gridX = window.innerWidth/side;    //length of the grid
// let gridY = window.innerHeight/side;   // height of the grid

// function createGrid(){
//   for (r=gridStartX; r<gridX+gridStartX;r++){
//     tilesArr[r]= [];
//     for(c=gridStartY; c<gridY+gridStartY; c++){
//       tilesArr[r][c] = new Tile (r, c, side,txt=``,255);    //to let tile numbers appear, insert into txt: ${r},${c} 
//     } 
//   } 
// }

// function drawGrid(){
//   for (r=gridStartX; r<gridX+gridStartX;r++)
//     for(c=gridStartY; c<gridY+gridStartY; c++){
//       tilesArr[r][c].drawCharacter();
//   }
// }






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
  InputPass = createInput('Password', 'password').position(rx-100, ry);
  
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

    InputPassTwo = createInput('Repeat Password', 'password').position(rx-100, ry+30);
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
  createGrid();
  //createships();
  //loop();
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

// //btn for the ship yard
// shipFleetButton = new Button(width-1250,height-200,200,50,'Ship Fleet',0,255,20);
// shipFleetButton.drawButton();

// //btn for the station upgrades
// stationButton = new Button(width-1550,height-200,200,50,'Station Upgrades',0,255,20);
// stationButton.drawButton();

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




//_________________________________________________________________________________________________
//ship fleet grid
let tilesArr= [];
let gridStartX= window.innerWidth/3 /100;  
let gridStartY= (window.innerHeight-100)/100;
let side = 100;
let gridX = 5;    //length of the grid
let gridY = 1;   // height of the grid

function createGrid(){
  if(cur_status === 'status_play'){
    for (r=gridStartX; r<gridX+gridStartX;r++){
      tilesArr[r]= [];
      for(c=gridStartY; c<gridY+gridStartY; c++){
        tilesArr[r][c] = new Tile (r, c, side, txt='', 200);    //to let tile numbers appear, insert into txt: ${r},${c} 
      } 
    } 
  }
}

function drawGrid(){
  if(cur_status === 'status_play'){
    for (let r=gridStartX; r<gridX+gridStartX; r++){
      for(let c=gridStartY; c<gridY+gridStartY; c++){
        tilesArr[r][c].draw_tile();
      }
    }
  }
}



//____________________________________________________________
// Create ships and draw them 
let ships=[];   //array of all ship-rows in the ship fleet table (from DB every 30 seconds)

let availableShips = []; //array of all ship objects, that are available in shipfleet
let blockedShips = [];   //array of all ship objects, that are blocked ships in shipfleet
let shipList=[];  //array of all ship objects, that are created in createships for drawing (blocked and available)



function createships(){

 
  
  if(cur_status === 'status_play'){

  shipList = [];
  for (let i=0; i<ships.length; i++){
      
    let ship = new Ship(ships[i].Ship_Fleet_ID, ships[i].Ship_on_Mission, ships[i].Ship_UnderRepair, ships[i].Ship_Health, ships[i].Ship_UnderConstruction, ships[i].Spaceships_Id, 0,i, gridStartX, gridStartY, side, 30, 40, shipOnMissionIconPath);

      //assign blocked and available ships
      if(ship.Ship_on_Mission === 0){
        availableShips.push(ship);
      } else if (ship.Ship_on_Mission === 1){
        blockedShips.push(ship);
        ship.blockShip();
      }

      shipList.push(ship);

    }
  }
  print('ships '+ships);
  console.log('shipList '+shipList);
  console.log('available Ships '+availableShips);
  console.log('blocked Ships '+blockedShips);
}



function drawShips(){
  if(cur_status === 'status_play' && missionMenuEnable === false){
    for(let i=0; i<shipList.length; i++){
      for (r=gridStartX; r<gridX+gridStartX;r++){
        for(c=gridStartY; c<gridY+gridStartY; c++){
          shipList[i].drawShip();
        }
      }
    }
  }
}






//_________________________________________________________________________________________________
//create ship fleet frame
let shipfleetFrame;
let shipfleetExitBtn;
let buildWarshipBtn;
let buildTransportshipBtn;
let buildMiningtshipBtn;
let buildExplorationshipBtn;

function createShipFleetInterface(){
  rx= width*0.5;
  ry= height*0.5;
  rw= 700;
  rh= 750;

  shipfleetFrame = new OnScreenFrame(rx, ry, rw, rh);
  shipfleetFrame.drawScreen();

  shipfleetExitBtn = new ExitButton(rx+rw/2-30, ry-rh/2,30,30);
  shipfleetExitBtn.drawExitButton();

  buildWarshipBtn = new Button(rx-rx/2+270,ry+(rh/2-110),250,50,'Build War Ship',0,255,20)
  buildWarshipBtn.drawButton();

  buildTransportshipBtn = new Button(rx+200,ry+(rh/2-110),250,50,'Build Transport Ship',0,255,20)
  buildTransportshipBtn.drawButton();

  buildMiningtshipBtn = new Button(rx+200,ry+(rh/2-50),250,50,'Build Mining Ship',0,255,20);
  buildMiningtshipBtn.drawButton();

  buildExplorationshipBtn = new Button(rx-rx/2+270,ry+(rh/2-50),250,50,'Build Exploration Ship',0,255,20);
  buildExplorationshipBtn.drawButton();
}



//_________________________________________________________________________________________________
//create station upgrades frame
let stationFrame;
let stationExitBtn;

function createStationUpgradesInterface(){
  rx= width*0.5;
  ry= height*0.5;
  rw= 700;
  rh= 750;

  stationFrame = new OnScreenFrame(rx, ry, rw, rh);
  stationFrame.drawScreen();

  stationExitBtn = new ExitButton(rx+rw/2-30, ry-rh/2,30,30);
  stationExitBtn.drawExitButton();
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

let missionMenuEnable = false;




//Mission Frame and global Variables;
let singlemission1;
let singlemission2;
let singlemission3;
let singlemission4;
let singlemission5;

let singleMissionsArr = []; //all displayed Missions

let opensingleMissionsArr = []; //all open solo missions (reference by index of singleMissionsArr)

let runningSoloMissions = []; // all running missions (reference by MissionId)

let runningSoloMissionsIndex = [];

//Mission1 Variables; 
let singlemissionId;
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

//Mission2 Variables;
let singlemission2Id;
let singlemission2Name;
let singlemission2Story;
let singlemission2Time;
let singlemission2InputMoney;
let singlemission2InputPeople;
let singlemission2InputOre;
let singlemission2InputWater;
let singlemission2InputShips;
let singlemission2RewardMoney;
let singlemission2RewardPeople;
let singlemission2RewardOre;
let singlemission2RewardWater;
let singlemission2Rank;
let singlemission2AcceptBtn;

//Mission3 Variables;
let singlemission3Id;
let singlemission3Name;
let singlemission3Story;
let singlemission3Time;
let singlemission3InputMoney;
let singlemission3InputPeople;
let singlemission3InputOre;
let singlemission3InputWater;
let singlemission3InputShips;
let singlemission3RewardMoney;
let singlemission3RewardPeople;
let singlemission3RewardOre;
let singlemission3RewardWater;
let singlemission3Rank;
let singlemission3AcceptBtn;

//Mission4 Variables;
let singlemission4Id;
let singlemission4Name;
let singlemission4Story;
let singlemission4Time;
let singlemission4InputMoney;
let singlemission4InputPeople;
let singlemission4InputOre;
let singlemission4InputWater;
let singlemission4InputShips;
let singlemission4RewardMoney;
let singlemission4RewardPeople;
let singlemission4RewardOre;
let singlemission4RewardWater;
let singlemission4Rank;
let singlemission4AcceptBtn;

//Mission5 Variables;
let singlemission5Id;
let singlemission5Name;
let singlemission5Story;
let singlemission5Time;
let singlemission5InputMoney;
let singlemission5InputPeople;
let singlemission5InputOre;
let singlemission5InputWater;
let singlemission5InputShips;
let singlemission5RewardMoney;
let singlemission5RewardPeople;
let singlemission5RewardOre;
let singlemission5RewardWater;
let singlemission5Rank;
let singlemission5AcceptBtn;


//Create AND draw Missions Interface
 function createMissions(){
  if (missionMenuEnable === true){


    rx= width*0.5;
    ry= height*0.5;
    rw= 700;
    rh= 750;

    //Frame, title and buttons of Mission Interface;
    missionFrame = new OnScreenFrame(rx, ry, rw, rh);

    singleMissionsBtn = new Button(rx-rx/2+220,ry-rh/2+75,250,50,'Single Player Missions',0,255,20)

    multiMissionsBtn = new Button(rx+150,ry-rh/2+75,250,50,'Collaborative Missions',0,255,20)
    
    runningMissionsBtn = new Button(rx+150,ry+(rh/2-50),250,50,'Running Missions',0,255,20);
    
    missionExitBtn = new ExitButton(rx+rw/2-30, ry-rh/2,30,30);
    

    //___________________________________________________________________
    //Mission boxes and Input;
 

    singlemission1 = new SoloMissionBox(rx, ry-(rh/4), rw-50, rh/7,singlemissionId, singlemissionName, singlemissionStory, singlemissionTime, singlemissionInputMoney, singlemissionInputPeople, singlemissionInputOre, singlemissionInputWater, singlemissionInputShips, singlemissionRewardMoney, singlemissionRewardPeople, singlemissionRewardOre, singlemissionRewardWater, singlemissionRank);
    singlemission2 = new SoloMissionBox(rx, ry-(rh/4-100), rw-50, rh/7,singlemission2Id, singlemission2Name, singlemission2Story, singlemission2Time, singlemission2InputMoney, singlemission2InputPeople, singlemission2InputOre, singlemission2InputWater, singlemission2InputShips, singlemission2RewardMoney, singlemission2RewardPeople, singlemission2RewardOre, singlemission2RewardWater, singlemission2Rank);
    singlemission3 = new SoloMissionBox(rx, ry-(rh/4-200), rw-50, rh/7,singlemission3Id, singlemission3Name, singlemission3Story, singlemission3Time, singlemission3InputMoney, singlemission3InputPeople, singlemission3InputOre, singlemission3InputWater, singlemission3InputShips, singlemission3RewardMoney, singlemission3RewardPeople, singlemission3RewardOre, singlemission3RewardWater, singlemission3Rank);
    singlemission4 = new SoloMissionBox(rx, ry-(rh/4-300), rw-50, rh/7,singlemission4Id, singlemission4Name, singlemission4Story, singlemission4Time, singlemission4InputMoney, singlemission4InputPeople, singlemission4InputOre, singlemission4InputWater, singlemission4InputShips, singlemission4RewardMoney, singlemission4RewardPeople, singlemission4RewardOre, singlemission4RewardWater, singlemission4Rank);
    singlemission5 = new SoloMissionBox(rx, ry-(rh/4-400), rw-50, rh/7,singlemission5Id, singlemission5Name, singlemission5Story, singlemission5Time, singlemission5InputMoney, singlemission5InputPeople, singlemission5InputOre, singlemission5InputWater, singlemission5InputShips, singlemission5RewardMoney, singlemission5RewardPeople, singlemission5RewardOre, singlemission5RewardWater, singlemission5Rank);

    singleMissionsArr = [singlemission1, singlemission2, singlemission3, singlemission4, singlemission5];

  

    //Disable accepted missions and assign runningMissions and openMissions with index of singleMissionsArr (this needs to stay on here, because otherwise it will create a bugg, whenver we are opening the missions interface again with a recently accepted mission --> it will not show then)
  	runningSoloMissionsIndex = []; 
    for (let i=0; i<singleMissionsArr.length; i++){
       for (let j=0; j<runningSoloMissions.length; j++){
        if(singleMissionsArr[i].missionId === runningSoloMissions[j]){
          singleMissionsArr[i].acceptedMission();
          runningSoloMissionsIndex.push(i); 
        } 
      }
     }




     //assign openMissions array
     let dummyArray = [0,1,2,3,4];

    opensingleMissionsArr = dummyArray.filter(el => !runningSoloMissionsIndex.includes(el));


     //print arrays
     console.log('open Missions Index '+ opensingleMissionsArr);
     console.log('runningSoloMissions Index '+ runningSoloMissionsIndex);
     console.log('running missions unindexed '+runningSoloMissions);
     //console.log('Assigned missions '+singleMissionsArr.length);
    }
}




//Draw Missions Interface

function drawSoloMissions(){
  if (missionMenuEnable === true){

  rx= width*0.5;
  ry= height*0.5;
  rw= 700;
  rh= 750;


  missionFrame.drawScreen();
  singleMissionsBtn.drawButton();
  multiMissionsBtn.drawButton();
  runningMissionsBtn.drawButton();
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
}



//________________________________________________________
//Create and Draw Running Missions Interface


function createRunningMissionInterface(){

}
















