//design-modules.js


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




//function-modules.js

//Ship Fleet Button clicked
if (gameStatus){
    if(shipFleetButton.isClicked(mouseX, mouseY)){
      createShipFleetInterface();
    }
  }  

//Ship Fleet Exit Button clicked
  if(cur_status === 'status_play'){
    if (shipfleetExitBtn.isClicked(mouseX, mouseY)){
      createGame();
      loop();
    }
  }

//Station Upgrades Button clicked
  if (gameStatus){
    if(stationButton.isClicked(mouseX, mouseY)){
      createStationUpgradesInterface();
    }
  }

//Station Upgrades Exit Button clicked
  if(cur_status === 'status_play'){
    if (stationExitBtn.isClicked(mouseX, mouseY)){
      createGame();
      loop();
    }
  }