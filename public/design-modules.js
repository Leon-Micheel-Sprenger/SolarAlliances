// In here, we are storing all available front-end components and designs of p5.

// To find backend functions and executing commands, go to function-modules.js
let cur_status = "status_login"; //status_login, status_register, status_play
let mainMenuEnable = true;

//Global Variables:

//Resource Icon paths
let moneyIconPath = "assets/money-icon.png";
let oreIconPath = "assets/ore-icon.png";
let waterIconPath = "assets/water-icon.png";
let peopleIconPath = "assets/people-icon.png";
let rankIconPath = "assets/rank-icon.png";
let emptyIconPath = "assets/empty-icon.jpg";

//Ship Icon Paths
let transportShipIconPath = "assets/Raumschiff_1.png";
let miningShipIconPath = "assets/Raumschiff_2.png";
let warShipIconPath = "assets/Raumschiff_3.png";
let explorationShipIconPath = "assets/Raumschiff_4.png";

//Faction Icon Paths
let marsIconPath = "assets/Mars-logo.png"; //!!NEED DIMENSIONS 35px TO 25px!!
let earthIconPath = "assets/Earth-logo.png"; //!!NEED DIMENSIONS 35px TO 25px!!
let beltIconPath = "assets/Belt-logo.png"; //!!NEED DIMENSIONS 35px TO 25px!!
let emptyFactionPath = "assets/empty-faction.png";

// Upgrades Icon Paths
let domeUpgradeIconPath = "assets/dome-icon.png";
let storageUpgradeIconPath = "assets/storage-icon.png";

//Other paths
let exitButtonIconPath = "assets/exit-icon.png";
let backButtonIconPath = "assets/exit-icon.png";
let shipOnMissionIconPath = "assets/relogio.png";
let arrowLeft = "assets/Button_Left.png";
let arrowRight = "assets/Button_Right.png";
let tabletFrame = "assets/tablet-frame.png";
let cortana = "assets/assistant.png";
let missionInterfaceFrame = "assets/Frame_Main_01.png";
let runningMissionsFramePath = "assets/RunningMissionsFrame.png";
let terminalFramePath = "assets/TerminalFrame.png";
let markerPath = "assets/Maker_1.png";
let stoneLayerPath = "assets/Stone-layer.png";

//Colors:
let Primary = "rgb(159,177,217)";
let Secondary = "rgb(26,30,48)";
let TimeClr = "rgb(60, 253, 47)";
let ImageStoneLayer;

//Load Images
let ImageMoneyIcon;
let ImageWaterIcon;
let ImageOreIcon;
let ImagePeopleIcon;
let ImageRankIcon;

let ImageDomeUpgradeIcon;
let ImageStorageUpgradeIcon;

let ImageAssistant;

let ImageExitButton;
let ImageArrowLeft;
let ImageArrowRight;
let ImageShipOnMission;

let ImageTabletFrame;
let ImageMissionInterfaceFrame;
let ImageRunningMissionsFrame;
let ImageTerminalFrame;
let ImageMarker;

let ImageTransportShip;
let ImageWarShip;
let ImageExploarationShip;
let ImageMiningShip;

let ImageDomeUpgrade;
let ImageStorageUpgrade;

let ImageMarsFactionIcon;
let ImageEarthFactionIcon;
let ImageBeltFactionIcon;
let ImageEmptyFaction;

let ImageEmptyIcon;

function loadImages() {
  bg = loadImage("assets/background.png");
  bgLoginRegister = loadImage("assets/login-register-bkg.png");

  //Resources;
  ImageMoneyIcon = loadImage(moneyIconPath);
  ImageWaterIcon = loadImage(waterIconPath);
  ImageOreIcon = loadImage(oreIconPath);
  ImagePeopleIcon = loadImage(peopleIconPath);
  ImageRankIcon = loadImage(rankIconPath);

  //Assistant;
  ImageAssistant = loadImage(cortana);

  //Ships;
  ImageTransportShip = loadImage(transportShipIconPath);
  ImageWarShip = loadImage(warShipIconPath);
  ImageExploarationShip = loadImage(explorationShipIconPath);
  ImageMiningShip = loadImage(miningShipIconPath);

  //Faction Icons:
  ImageMarsFactionIcon = loadImage(marsIconPath);
  ImageEarthFactionIcon = loadImage(earthIconPath);
  ImageBeltFactionIcon = loadImage(beltIconPath);
  ImageEmptyFaction = loadImage(emptyFactionPath);

  //Upgrade Icons
  ImageDomeUpgradeIcon = loadImage(domeUpgradeIconPath);
  ImageStorageUpgradeIcon = loadImage(storageUpgradeIconPath);

  //Other
  ImageTabletFrame = loadImage(tabletFrame);
  ImageExitButton = loadImage(exitButtonIconPath);
  ImageArrowLeft = loadImage(arrowLeft);
  ImageArrowRight = loadImage(arrowRight);
  ImageEmptyIcon = loadImage(emptyIconPath);
  ImageShipOnMission = loadImage(shipOnMissionIconPath);

  ImageMissionInterfaceFrame = loadImage(missionInterfaceFrame);
  ImageRunningMissionsFrame = loadImage(runningMissionsFramePath);
  ImageTerminalFrame = loadImage(terminalFramePath);
  ImageMarker = loadImage(markerPath);

  ImageStoneLayer = loadImage(stoneLayerPath);
}

//_____________________________________________________
//SOUNDS
let soundInterfaceOpen;
let soundButtonClick;
let soundError;
let soundMessageReceived;
let soundMMissionsBkg;
let soundWelcom;
let soundNewSMission;
let soundAcceptedSMission;
let soundJoinMMission;
let soundBkgMusic;

function loadSounds() {
  soundInterfaceOpen = loadSound("assets/sounds/openInterface.wav");
  soundButtonClick = loadSound("assets/sounds/button-click.wav");
  soundError = loadSound("assets/sounds/error.wav");
  soundMessageReceived = loadSound("assets/sounds/message-arrived.wav");
  soundTest = loadSound("assets/sounds/test-sound.mp3");
  //soundLogin = loadSound("assets/sounds/loadgame.mp3"); //to loud
  soundMMissionsBkg = loadSound("assets/sounds/mmissions-bkg.wav");
  soundWelcom = loadSound("assets/sounds/welcom.wav"); //mesage
  soundNewSMission = loadSound("assets/sounds/new-solomission.wav"); //message
  soundAcceptedSMission = loadSound("assets/sounds/accepted-solomission.wav"); //message
  soundJoinMMission = loadSound("assets/sounds/joining-mmission.wav"); //message
  soundBkgMusic = loadSound("assets/sounds/bkg-music.mp3");
}

//______________________________________________
//Creating Login Interface
//Login Variables:
let loginFrame;
let registerBtn;
let loginBtn;
let InputName;
let InputPass;

function loginScreen() {
  rx = width * 0.5;
  ry = height * 0.5;
  rw = 600;
  rh = 500;

  //Login Screen Frame, Title and Description

  if (cur_status === "status_login") {
    background(bgLoginRegister);
    loginFrame = new OnScreenFrame(rx, ry, rw, rh, ImageTabletFrame, Secondary);
    loginFrame.drawScreen();
    textAlign(CENTER, CENTER);
    push();
    textFont(ftRetroGaming);
    textSize(30);
    fill(255);
    text("Login", rx, ry - rh / 2.2);
    //textAlign(CENTER, CENTER);
    textSize(13);
    text(
      "Welcome to Solar Alliances. Please login into your existing account.",
      rx,
      ry - rh / 3
    );
    text(
      "Or register as a new User, if you don't have an account.",
      rx,
      ry - rh / 4
    );
    pop();

    //Create Buttons
    loginBtn = new Button(
      rx,
      ry + 80,
      300,
      50,
      "Login",
      0,
      255,
      20,
      20,
      ftRetroGaming
    );
    registerBtn = new Button(
      rx,
      ry + 130,
      160,
      30,
      "Register as new Player",
      255,
      0,
      8,
      20,
      ftRetroGaming
    );

    InputName = createInput("Leon1").position(rx - 100, ry - 60);
    InputPass = createInput("Password", "Password").position(rx - 100, ry);

    InputPass.attribute("placeholder", "Password");
    InputName.attribute("placeholder", "Username");

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

function registerScreen() {
  if (cur_status === "status_register") {
    background(bgLoginRegister);
    rx = width * 0.5;
    ry = height * 0.5;
    rw = 600;
    rh = 500;

    registerFrame = new OnScreenFrame(
      rx,
      ry,
      rw,
      rh,
      ImageTabletFrame,
      Secondary
    );
    registerFrame.drawScreen();

    push();
    textFont(ftRetroGaming);
    textSize(30);
    fill(255);
    text("Register", rx, ry - rh / 2.2);
    textAlign(CENTER);
    textSize(15);
    text("Welcome to Solar Alliances. Please register.", rx, ry - rh / 3.6);
    pop();

    InputPassTwo = createInput("", "password").position(rx - 100, ry + 30);
    InputEmail = createInput("").position(rx - 100, ry - 30);

    InputPassTwo.attribute("placeholder", "Repeat Password");
    InputEmail.attribute("placeholder", "Email");

    //disable Loginbutton and Register player button
    loginBtn.disable();
    registerBtn.disable();
    fill(255);
    noStroke();
    fill(Secondary);
    rect(rx, ry + 100, 310, 100);

    submitRegisterBtn = new Button(
      rx,
      ry + 200,
      300,
      50,
      "Register",
      0,
      255,
      20,
      20,
      ftRetroGaming
    );
    submitRegisterBtn.drawButton();
    console.log(cur_status);
  }
}

//__________________________________________________
//Creating and drawing main Menu.
//Variables:
let gameStatus = false;
function createGame() {
  gameStatus = true;
  mainMenuEnable = true;
  cur_status = "status_play";
  InputName.remove();
  InputPass.remove();
  background(bg);
  drawAssistant();
  drawLogo();

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

let TerminalFrame;

function createButtons() {
  rx = width * 0.15;
  ry = height * 0.75;
  rw = 250;
  rh = 300;

  TerminalFrame = new OnScreenFrame(rx, ry, rw, rh, ImageTerminalFrame, false);
  TerminalFrame.drawScreen();

  // push();
  // fill("rgba(255,255,255,0.4)");
  // rect(rx, ry, rw, rh, 20);
  // pop();

  missionButton = new Button(
    width * 0.15,
    height * 0.65,
    200,
    50,
    "Missions",
    "rgba(117, 114, 110,0)",
    "rgb(0,0,0)",
    20,
    20,
    ftRetroGaming,
    "rgba(0,0,0,0)",
    ImageMarker
  );
  missionButton.drawButton();

  //btn for the ship yard
  shipFleetButton = new Button(
    width * 0.15,
    height * 0.75,
    200,
    50,
    "Ship Fleet",
    "rgba(0,0,0,0)",
    Secondary,
    20,
    20,
    ftRetroGaming,
    "rgba(0,0,0,0)",
    ImageMarker
  );
  shipFleetButton.drawButton();

  //btn for the station upgrades
  stationButton = new Button(
    width * 0.15,
    height * 0.85,
    200,
    50,
    "Upgrades",
    "rgba(0,0,0,0)",
    Secondary,
    20,
    20,
    ftRetroGaming,
    "rgba(0,0,0,0)",
    ImageMarker
  );
  stationButton.drawButton();
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

function createResourceBar() {
  if (gameStatus) {
    rx = 0;
    ry = 0;
    rw = 600;
    rh = 50;

    //create bar frame

    push();
    rectMode(CORNER);
    fill(Secondary);
    rect(rx, ry, rw, rh, 20);
    pop();

    // create Icons
    moneyIcon = new Icon(ImageMoneyIcon, rx + 25, ry + 10, 20, 32);
    waterIcon = new Icon(ImageWaterIcon, rx + 125, ry + 10, 20, 32);
    oreIcon = new Icon(ImageOreIcon, rx + 225, ry + 10, 20, 32);
    peopleIcon = new Icon(ImagePeopleIcon, rx + 325, ry + 10, 20, 32);
    rankIcon = new Icon(ImageRankIcon, rx + 425, ry + 10, 20, 32);
  }
}

//Draw Resource-Values in Resourcebar
function drawResourceValues() {
  if (gameStatus) {
    //Resource bar Coordinates;
    rx = 0;
    ry = 0;
    rw = 660;
    rh = 50;

    push();

    noStroke();
    fill(255);
    textSize(12);
    textAlign(CENTER, CENTER);
    text(`${money}`, rx + 25 + 40, ry + 30);
    text(`${water}/${max_water}`, rx + 125 + 50, ry + 30);
    text(`${ore}/${max_ore}`, rx + 225 + 50, ry + 30);
    text(`${people}/${max_people}`, rx + 325 + 50, ry + 30);
    text(`${rank}`, rx + 425 + 30, ry + 30);
    text(`Year: ${gameDate}`, rx + 530, ry + 30);

    pop();
  }
}

//_________________________________________________________________________________________________
//ship fleet grid
let tilesArr = [];
let gridStartX = window.innerWidth / 3 / 100;
let gridStartY = (window.innerHeight - 100) / 100;
let side = 100;
let gridX = 5; //length of the grid
let gridY = 1; // height of the grid

let gridArrowRightBtn;
let gridArrowLeftBtn;

function createGrid() {
  if (cur_status === "status_play") {
    for (r = gridStartX; r < gridX + gridStartX; r++) {
      tilesArr[r] = [];
      for (c = gridStartY; c < gridY + gridStartY; c++) {
        tilesArr[r][c] = new Tile(r, c, side, (txt = ""), Secondary); //to let tile numbers appear, insert into txt: ${r},${c}
      }
    }
  }
}

function drawGrid() {
  if (
    cur_status === "status_play" &&
    missionMenuEnable === false &&
    mmissionEnable === false &&
    openMissionEnable === false &&
    contributionSzeneEnable === false &&
    shipFleetEnable === false &&
    stationUpgradeEnable === false
  ) {
    for (let r = gridStartX; r < gridX + gridStartX; r++) {
      for (let c = gridStartY; c < gridY + gridStartY; c++) {
        tilesArr[r][c].draw_tile();
      }
    }
    gridArrowLeftBtn = new ImageButton(
      tilesArr[gridStartX][gridStartY].posX - 75,
      tilesArr[gridStartX][gridStartY].posY,
      40,
      40,
      ImageArrowLeft
    );
    gridArrowRightBtn = new ImageButton(
      tilesArr[gridStartX + 4][gridStartY].posX + 75,
      tilesArr[gridStartX][gridStartY].posY,
      40,
      40,
      ImageArrowRight
    );
    gridArrowRightBtn.drawImageButton();
    gridArrowLeftBtn.drawImageButton();
  }
}

//____________________________________________________________
// Create ships and draw them
let ships = []; //array of all ship-rows in the ship fleet table (from DB every 30 seconds)

let availableShips = []; //array of all ship objects, that are available in shipfleet
let blockedShips = []; //array of all ship objects, that are blocked ships in shipfleet
let shipList = []; //array of all ship objects, that are created in createships for drawing (blocked and available)

let Gridpages = [0];
let gridPageEnable = 0;

function createships() {
  if (cur_status === "status_play") {
    shipList = [];
    let column = 0;

    for (let i = 0; i < ships.length; i++) {
      let ship;

      if (i % 5 === 0 && i !== 0) {
        column = 0;
        Gridpages.push(Gridpages.length);
        ship = new Ship(
          ships[i].Ship_Fleet_ID,
          Gridpages[Gridpages.length - 1],
          ships[i].Ship_on_Mission,
          ships[i].Ship_UnderRepair,
          ships[i].Ship_Health,
          ships[i].Ship_UnderConstruction,
          ships[i].Spaceships_Id,
          0,
          column,
          gridStartX,
          gridStartY,
          side,
          60,
          84,
          shipOnMissionIconPath
        );
        column++;
      } else {
        ship = new Ship(
          ships[i].Ship_Fleet_ID,
          Gridpages[Gridpages.length - 1],
          ships[i].Ship_on_Mission,
          ships[i].Ship_UnderRepair,
          ships[i].Ship_Health,
          ships[i].Ship_UnderConstruction,
          ships[i].Spaceships_Id,
          0,
          column,
          gridStartX,
          gridStartY,
          side,
          60,
          84,
          shipOnMissionIconPath
        );
        column++;
      }

      //assign blocked and available ships
      if (ship.Ship_on_Mission === 0) {
        availableShips.push(ship);
      } else if (ship.Ship_on_Mission === 1) {
        blockedShips.push(ship);
        ship.blockShip();
      }

      shipList.push(ship);
    }
  }
  // print('ships '+ships);
  // console.log('shipList '+shipList);
  // console.log('available Ships '+availableShips);
  // console.log('blocked Ships '+blockedShips);
}

function drawShips() {
  if (
    cur_status === "status_play" &&
    missionMenuEnable === false &&
    mmissionEnable === false &&
    openMissionEnable === false &&
    contributionSzeneEnable === false &&
    shipFleetEnable === false &&
    stationUpgradeEnable === false
  ) {
    for (let i = 0; i < shipList.length; i++) {
      for (r = gridStartX; r < gridX + gridStartX; r++) {
        for (c = gridStartY; c < gridY + gridStartY; c++) {
          shipList[i].drawShip();
        }
      }
    }
  }
}

//_________________________________________________________________________________________________
//create ship fleet frame
let shipFleetEnable = false;

let shipfleetFrame;
let shipfleetExitBtn;
let buildWarshipBtn;
let buildTransportshipBtn;
let buildMiningtshipBtn;
let buildExplorationshipBtn;
//btns
let btnW = 250;
let btnH = 50;
let btnclr = 0;
let txtclr = 255;

let spaceshipid;

function createShipFleetInterface() {
  let btnW = 250;
  let btnH = 50;

  shipfleetFrame = new OnScreenFrame(
    rx,
    ry,
    rw,
    rh,
    false,
    Secondary,
    15,
    ImageMissionInterfaceFrame
  );
  shipfleetFrame.drawScreen();
  shipfleetFrame.drawExtendedFrame();

  shipfleetExitBtn = new ExitButton(
    rx + rw / 2 - 42,
    ry - rh / 2 + 8,
    exitbtnW,
    exitbtnH
  );
  shipfleetExitBtn.drawExitButton();

  buildWarshipBtn = new Button(
    rx - rw / 2 + 200,
    ry - (rh / 2 - 300),
    btnW,
    btnH,
    "Build",
    0,
    255,
    15,
    20,
    ftRetroGaming,
    Primary
  );
  buildWarshipBtn.drawButton();

  buildTransportshipBtn = new Button(
    rx - rw / 2 + 200,
    ry - (rh / 2 - 600),
    btnW,
    btnH,
    "Build",
    0,
    255,
    15,
    20,
    ftRetroGaming,
    Primary
  );
  buildTransportshipBtn.drawButton();

  buildMiningtshipBtn = new Button(
    rx + rw / 2 - 200,
    ry - (rh / 2 - 300),
    btnW,
    btnH,
    "Build",
    0,
    255,
    15,
    20,
    ftRetroGaming,
    Primary
  );
  buildMiningtshipBtn.drawButton();

  buildExplorationshipBtn = new Button(
    rx + rw / 2 - 200,
    ry - (rh / 2 - 600),
    btnW,
    btnH,
    "Build",
    0,
    255,
    15,
    20,
    ftRetroGaming,
    Primary
  );
  buildExplorationshipBtn.drawButton();

  let warshipinfo = new DrawInfoShipfleet(
    rx - rw / 2 + 200,
    ry - (rh / 2 - 150),
    250,
    150,
    shipscosts[0].Input_Crew,
    shipscosts[0].Input_Ore,
    shipscosts[0].Spaceships_Id
  );
  let miningshipinfo = new DrawInfoShipfleet(
    rx + rw / 2 - 200,
    ry - (rh / 2 - 150),
    250,
    150,
    shipscosts[1].Input_Crew,
    shipscosts[1].Input_Ore,
    shipscosts[1].Spaceships_Id
  );
  let transportshipinfo = new DrawInfoShipfleet(
    rx - rw / 2 + 200,
    ry - (rh / 2 - 450),
    250,
    150,
    shipscosts[2].Input_Crew,
    shipscosts[2].Input_Ore,
    shipscosts[2].Spaceships_Id
  );
  let explorationshipinfo = new DrawInfoShipfleet(
    rx + rw / 2 - 200,
    ry - (rh / 2 - 450),
    250,
    150,
    shipscosts[3].Input_Crew,
    shipscosts[3].Input_Ore,
    shipscosts[3].Spaceships_Id
  );

  push();
  textFont(ftRetroGaming);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Ship Fleet", rx, ry - rh / 2.2);
  warshipinfo.draw_shipfleetInfo();
  miningshipinfo.draw_shipfleetInfo();
  transportshipinfo.draw_shipfleetInfo();
  explorationshipinfo.draw_shipfleetInfo();
  pop();
}

//_________________________________________________________________________________________________
//create station upgrades frame
let stationUpgradeEnable = false;

let stationFrame;
let stationExitBtn;
let exitbtnW = 30;
let exitbtnH = 30;
let buildDome1Btn;
let buildDome2Btn;
let buildDome3Btn;
let buildStorage1Btn;
let buildStorage2Btn;
let buildStorage3Btn;

function createStationUpgradesInterface() {
  rx = width * 0.5;
  ry = height * 0.5;
  rw = 700;
  rh = 750;
  let btnrank1posY = ry - (rh / 2 - 260);
  let btnrank2posY = ry - (rh / 2 - 480);
  let btnrank3posY = ry - (rh / 2 - 700);
  let btndomeposX = rx - rw / 2 + 200;
  let btnstorageposX = rx + rw / 2 - 200;

  stationFrame = new OnScreenFrame(
    rx,
    ry,
    rw,
    rh,
    false,
    Secondary,
    15,
    ImageMissionInterfaceFrame
  );
  stationFrame.drawScreen();
  stationFrame.drawExtendedFrame();

  stationExitBtn = new ExitButton(
    rx + rw / 2 - 42,
    ry - rh / 2 + 8,
    exitbtnW,
    exitbtnH
  );
  stationExitBtn.drawExitButton();

  buildDome1Btn = new Button(
    btndomeposX,
    btnrank1posY,
    btnW,
    btnH,
    "Build",
    0,
    255,
    15,
    20,
    ftRetroGaming,
    Primary
  );
  buildDome1Btn.drawButton();

  buildDome2Btn = new Button(
    btndomeposX,
    btnrank2posY,
    btnW,
    btnH,
    "Build",
    0,
    255,
    15,
    20,
    ftRetroGaming,
    Primary
  );
  buildDome2Btn.drawButton();

  buildDome3Btn = new Button(
    btndomeposX,
    btnrank3posY,
    btnW,
    btnH,
    "Build",
    0,
    255,
    15,
    20,
    ftRetroGaming,
    Primary
  );
  buildDome3Btn.drawButton();

  buildStorage1Btn = new Button(
    btnstorageposX,
    btnrank1posY,
    btnW,
    btnH,
    "Build",
    0,
    255,
    15,
    20,
    ftRetroGaming,
    Primary
  );
  buildStorage1Btn.drawButton();

  buildStorage2Btn = new Button(
    btnstorageposX,
    btnrank2posY,
    btnW,
    btnH,
    "Build",
    0,
    255,
    15,
    20,
    ftRetroGaming,
    Primary
  );
  buildStorage2Btn.drawButton();

  buildStorage3Btn = new Button(
    btnstorageposX,
    btnrank3posY,
    btnW,
    btnH,
    "Build",
    0,
    255,
    15,
    20,
    ftRetroGaming,
    Primary
  );
  buildStorage3Btn.drawButton();

  let dome1 = new DrawInfoDomes(
    rx - rw / 2 + 200,
    ry - (rh / 2 - 150),
    200,
    150,
    stationupgrades[0].Upgrade_Level,
    stationupgrades[0].Price,
    stationupgrades[0].Increase_People,
    stationupgrades[0].SSUpgrade_Id
  );
  let dome2 = new DrawInfoDomes(
    rx - rw / 2 + 200,
    ry - (rh / 2 - 370),
    200,
    150,
    stationupgrades[1].Upgrade_Level,
    stationupgrades[1].Price,
    stationupgrades[1].Increase_People,
    stationupgrades[1].SSUpgrade_Id
  );
  let dome3 = new DrawInfoDomes(
    rx - rw / 2 + 200,
    ry - (rh / 2 - 590),
    200,
    150,
    stationupgrades[2].Upgrade_Level,
    stationupgrades[2].Price,
    stationupgrades[2].Increase_People,
    stationupgrades[2].SSUpgrade_Id
  );
  let storage1 = new DrawInfoStorage(
    rx + rw / 2 - 200,
    ry - (rh / 2 - 150),
    200,
    150,
    stationupgrades[3].Upgrade_Level,
    stationupgrades[3].Price,
    stationupgrades[3].Increase_Water,
    stationupgrades[3].Increase_Ore,
    stationupgrades[3].SSUpgrade_Id
  );
  let storage2 = new DrawInfoStorage(
    rx + rw / 2 - 200,
    ry - (rh / 2 - 370),
    200,
    150,
    stationupgrades[4].Upgrade_Level,
    stationupgrades[4].Price,
    stationupgrades[4].Increase_Water,
    stationupgrades[4].Increase_Ore,
    stationupgrades[4].SSUpgrade_Id
  );
  let storage3 = new DrawInfoStorage(
    rx + rw / 2 - 200,
    ry - (rh / 2 - 590),
    200,
    150,
    stationupgrades[5].Upgrade_Level,
    stationupgrades[5].Price,
    stationupgrades[5].Increase_Water,
    stationupgrades[5].Increase_Ore,
    stationupgrades[5].SSUpgrade_Id
  );

  push();
  textFont(ftRetroGaming);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Station Upgrades", rx, ry - rh / 2.2);
  dome1.draw_DomesInfo();
  dome2.draw_DomesInfo();
  dome3.draw_DomesInfo();
  storage1.draw_StorageInfo();
  storage2.draw_StorageInfo();
  storage3.draw_StorageInfo();
  pop();
}

//________________________________
// Creating and drawing Missions Interface
//enables or disables interface
let missionFrame;
let singleMissionsBtn;
let multiMissionsBtn;
let runningMissionsBtn;
let missionRespawnTime; //Value from Database
let missionExitBtn;

let missionMenuEnable = false;

//Mission Frame and global Variables;
let singlemission1;
let singlemission2;
let singlemission3;
let singlemission4;
let singlemission5;

let singleMissionsArr; //all displayed Missions

let opensingleMissionsArr = []; //all open solo missions (reference by index of singleMissionsArr)

let runningSoloMissions = []; // all running missions (reference by MissionId)

let runningSoloMissionsIndex = []; //all running missions by index of the singleMissionsArr

let previousMissions; //all five solo missions at last ping function!

//Create AND draw Missions Interface
function createMissions() {
  rx = width * 0.5;
  ry = height * 0.5;
  rw = 700;
  rh = 750;

  //Frame, title and buttons of Mission Interface;
  push();
  missionFrame = new OnScreenFrame(
    rx,
    ry,
    rw,
    rh,
    false,
    Secondary,
    15,
    ImageMissionInterfaceFrame
  );

  singleMissionsBtn = new Button(
    rx - rw / 2 + rw / 4,
    ry - rh / 2.6,
    250,
    50,
    "Single Player Missions",
    0,
    255,
    15,
    20,
    ftRetroGaming,
    Primary
  );

  multiMissionsBtn = new Button(
    rx + rw / 2 - rw / 4,
    ry - rh / 2.6,
    250,
    50,
    "Collaborative Missions",
    0,
    255,
    15,
    20,
    ftRetroGaming,
    Primary
  );

  missionExitBtn = new ExitButton(rx + rw / 2 - 42, ry - rh / 2 + 8, 30, 30);
  pop();

  //___________________________________________________________________
  //Mission boxes and Input;

  singlemission1 = new SoloMissionBox(
    rx,
    ry - rh / 4,
    rw - 50,
    rh / 7,
    singlemissionId,
    singlemissionName,
    singlemissionStory,
    singlemissionTime,
    singlemissionInputMoney,
    singlemissionInputPeople,
    singlemissionInputOre,
    singlemissionInputWater,
    singlemissionInputShips,
    singlemissionRewardMoney,
    singlemissionRewardPeople,
    singlemissionRewardOre,
    singlemissionRewardWater,
    singlemissionRank
  );
  singlemission2 = new SoloMissionBox(
    rx,
    ry - (rh / 4 - 100),
    rw - 50,
    rh / 7,
    singlemission2Id,
    singlemission2Name,
    singlemission2Story,
    singlemission2Time,
    singlemission2InputMoney,
    singlemission2InputPeople,
    singlemission2InputOre,
    singlemission2InputWater,
    singlemission2InputShips,
    singlemission2RewardMoney,
    singlemission2RewardPeople,
    singlemission2RewardOre,
    singlemission2RewardWater,
    singlemission2Rank
  );
  singlemission3 = new SoloMissionBox(
    rx,
    ry - (rh / 4 - 200),
    rw - 50,
    rh / 7,
    singlemission3Id,
    singlemission3Name,
    singlemission3Story,
    singlemission3Time,
    singlemission3InputMoney,
    singlemission3InputPeople,
    singlemission3InputOre,
    singlemission3InputWater,
    singlemission3InputShips,
    singlemission3RewardMoney,
    singlemission3RewardPeople,
    singlemission3RewardOre,
    singlemission3RewardWater,
    singlemission3Rank
  );
  singlemission4 = new SoloMissionBox(
    rx,
    ry - (rh / 4 - 300),
    rw - 50,
    rh / 7,
    singlemission4Id,
    singlemission4Name,
    singlemission4Story,
    singlemission4Time,
    singlemission4InputMoney,
    singlemission4InputPeople,
    singlemission4InputOre,
    singlemission4InputWater,
    singlemission4InputShips,
    singlemission4RewardMoney,
    singlemission4RewardPeople,
    singlemission4RewardOre,
    singlemission4RewardWater,
    singlemission4Rank
  );
  singlemission5 = new SoloMissionBox(
    rx,
    ry - (rh / 4 - 400),
    rw - 50,
    rh / 7,
    singlemission5Id,
    singlemission5Name,
    singlemission5Story,
    singlemission5Time,
    singlemission5InputMoney,
    singlemission5InputPeople,
    singlemission5InputOre,
    singlemission5InputWater,
    singlemission5InputShips,
    singlemission5RewardMoney,
    singlemission5RewardPeople,
    singlemission5RewardOre,
    singlemission5RewardWater,
    singlemission5Rank
  );

  singleMissionsArr = [
    singlemission1,
    singlemission2,
    singlemission3,
    singlemission4,
    singlemission5,
  ];

  //message to player, when missions have changed!
  if (previousMissions.length === 0) {
  } else if (previousMissions[0].missionId === singleMissionsArr[0].missionId) {
  } else if (previousMissions[0].missionId !== singleMissionsArr[0].missionId) {
    let message = { message: `Commander, a new Solo Mission is available!` };
    messages.push(message);
    soundMessageReceived.play();
    soundNewSMission.play();
    drawMessages();
  }

  //empty previousMissions again!
  previousMissions = [];

  //Disable accepted missions and assign runningMissions and openMissions with index of singleMissionsArr (this needs to stay on here, because otherwise it will create a bugg, whenver we are opening the missions interface again with a recently accepted mission --> it will not show then)
  runningSoloMissionsIndex = [];
  for (let i = 0; i < singleMissionsArr.length; i++) {
    for (let j = 0; j < runningSoloMissions.length; j++) {
      if (singleMissionsArr[i].missionId === runningSoloMissions[j]) {
        singleMissionsArr[i].acceptedMission();
        runningSoloMissionsIndex.push(i);
      }
    }
  }

  //assign openMissions array
  let dummyArray = [0, 1, 2, 3, 4];

  opensingleMissionsArr = dummyArray.filter(
    (el) => !runningSoloMissionsIndex.includes(el)
  );

  //print arrays
  console.log("open Missions Index " + opensingleMissionsArr);
  console.log("runningSoloMissions Index " + runningSoloMissionsIndex);
  console.log("running missions ID " + runningSoloMissions);
  //console.log('Assigned missions '+singleMissionsArr.length);
}

//Draw Missions Interface

function drawSoloMissions() {
  rx = width * 0.5;
  ry = height * 0.5;
  rw = 700;
  rh = 750;

  if (missionMenuEnable === true && mmissionEnable === false) {
    missionFrame.drawScreen();
    missionFrame.drawExtendedFrame();
    singleMissionsBtn.drawButton();
    multiMissionsBtn.drawButton();
    missionExitBtn.drawExitButton();

    console.log(missionRespawnTime);

    push();
    textFont(ftRetroGaming);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("Missions", rx, ry - rh / 2.2);
    textSize(15);
    text("Time until new Mission: ", rx - rw / 2 + 130, ry + rh / 2 - 80);

    drawRespawnTimer(rx, ry, rw, rh);

    textStyle(BOLD);
    fill(255, 1);
    stroke(TimeClr);
    rect(rx - rw / 2 + 160, ry + rh / 2 - 48, 100, 40);
    fill(TimeClr);
    noStroke();
    pop();

    push();
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

//Draw missionRespawnTimer:

function drawRespawnTimer(rx, ry, rw, rh) {
  if (missionMenuEnable === true && mmissionEnable === false) {
    rx = width * 0.5;
    ry = height * 0.5;
    rw = 700;
    rh = 750;

    push();
    fill(Secondary);
    stroke(TimeClr);
    rect(rx - rw / 2 + 160, ry + rh / 2 - 48, 100, 40);

    textFont(ftRetroGaming);
    textStyle(BOLD);
    noStroke();
    fill(255);
    text(`${missionRespawnTime}`, rx - rw / 2 + 160, ry + rh / 2 - 50);
    pop();
  }
}

//_________________________________________________________________
//Create Multiplayer Missions

let mmissionEnable = false;

let mmissionsData = []; //data loaded from db

let multiplayerMissions = []; //instances of mmissions created.

let acceptedMultiplayerMissions = []; //accepted Multiplayer Missions (status 2 --> not runnign yet)

let runningMultiplayerMissions = []; //running Multiplayer Missions (status 1 --> running)

let mmissionPages = [];

let pageEnabled = 0; //currently enabled page!

function createMultiplayerMissions() {
  console.log(mmissionsData);

  rx = width * 0.5;
  ry = height * 0.5;
  rw = 700;
  rh = 750;

  //fixed 6 positions to display multiplayer missions.
  let positions = [
    { rx: rx - rw / 3, ry: ry - ry / 3 },
    { rx: rx, ry: ry - ry / 3 },
    { rx: rx + rw / 3, ry: ry - ry / 3 },
    { rx: rx - rw / 3, ry: ry + ry / 3 },
    { rx: rx, ry: ry + ry / 3 },
    { rx: rx + rw / 3, ry: ry + ry / 3 },
  ];

  let positionCounter;

  //create instances of multiplayer missions class in a loop depending on multiplayermissions array.

  for (let i = 0; i < mmissionsData.length; i++) {
    if (multiplayerMissions.length % 6 === 0) {
      //make a new page

      mmissionPages.push(mmissionPages.length);

      positionCounter = 0;

      //initiate mission at position 0;
      multiplayerMissions[i] = new MultipiplayerMission(
        positions[positionCounter].rx,
        positions[positionCounter].ry,
        mmissionPages[mmissionPages.length - 1],
        175,
        200,
        mmissionsData[i].MMissions_Id,
        mmissionsData[i].MMission_Name,
        mmissionsData[i].Story,
        mmissionsData[i].Time,
        mmissionsData[i].Ship_Id,
        mmissionsData[i].Reward_Water,
        mmissionsData[i].Reward_People,
        mmissionsData[i].Reward_Ore,
        mmissionsData[i].Reward_Money,
        mmissionsData[i].Input_Water,
        mmissionsData[i].Input_People,
        mmissionsData[i].Input_Ore,
        mmissionsData[i].Input_Money,
        mmissionsData[i].Ship_amount,
        mmissionsData[i].Minimum_Water,
        mmissionsData[i].Minimum_Money,
        mmissionsData[i].Minimum_People,
        mmissionsData[i].Minimum_Ore,
        mmissionsData[i].Submitted_Ore,
        mmissionsData[i].Submitted_Water,
        mmissionsData[i].Submitted_People,
        mmissionsData[i].Submitted_Money,
        mmissionsData[i].Submitted_Ships,
        mmissionsData[i].Rank,
        mmissionsData[i].Faction
      );
    } else {
      positionCounter++;

      //create new instance of a mission object in multiplayerMissions.

      multiplayerMissions[i] = new MultipiplayerMission(
        positions[positionCounter].rx,
        positions[positionCounter].ry,
        mmissionPages[mmissionPages.length - 1],
        175,
        200,
        mmissionsData[i].MMissions_Id,
        mmissionsData[i].MMission_Name,
        mmissionsData[i].Story,
        mmissionsData[i].Time,
        mmissionsData[i].Ship_Id,
        mmissionsData[i].Reward_Water,
        mmissionsData[i].Reward_People,
        mmissionsData[i].Reward_Ore,
        mmissionsData[i].Reward_Money,
        mmissionsData[i].Input_Water,
        mmissionsData[i].Input_People,
        mmissionsData[i].Input_Ore,
        mmissionsData[i].Input_Money,
        mmissionsData[i].Ship_amount,
        mmissionsData[i].Minimum_Water,
        mmissionsData[i].Minimum_Money,
        mmissionsData[i].Minimum_People,
        mmissionsData[i].Minimum_Ore,
        mmissionsData[i].Submitted_Ore,
        mmissionsData[i].Submitted_Water,
        mmissionsData[i].Submitted_People,
        mmissionsData[i].Submitted_Money,
        mmissionsData[i].Submitted_Ships,
        mmissionsData[i].Rank,
        mmissionsData[i].Faction
      );
    }
  }

  console.log(multiplayerMissions);

  //Change status of accepted and/or running Multiplayer Missions;

  for (let i = 0; i < multiplayerMissions.length; i++) {
    for (let j = 0; j < acceptedMultiplayerMissions.length; j++) {
      if (
        acceptedMultiplayerMissions[j].amm_MMissions_Id ===
        multiplayerMissions[i].missions_Id
      ) {
        multiplayerMissions[i].acceptMission(2);
        loop();
      }
    }
  }

  for (let i = 0; i < multiplayerMissions.length; i++) {
    for (let j = 0; j < runningMultiplayerMissions.length; j++) {
      if (
        runningMultiplayerMissions[j].amm_MMissions_Id ===
        multiplayerMissions[i].missions_Id
      ) {
        multiplayerMissions[i].acceptMission(1);
        multiplayerMissions[i].time =
          runningMultiplayerMissions[j].Mission_Time;

        loop();
      }
    }
  }

  //multiplayerMissions[0].acceptMission(2);

  console.log("pages " + mmissionPages);
}

//_______________________________________________________________
//Draw Multiplayer Missions Interface

function drawMultiplayerMissions() {
  rx = width * 0.5;
  ry = height * 0.5;
  rw = 700;
  rh = 750;

  if (mmissionEnable === true) {
    missionFrame.drawScreen();
    missionFrame.drawExtendedFrame();
    singleMissionsBtn.drawButton();
    multiMissionsBtn.drawButton();
    missionExitBtn.drawExitButton();

    missionFrame.drawPageArrows();

    push();
    textFont(ftRetroGaming);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("Missions", rx, ry - rh / 2.2);
    pop();

    //draw Multiplayer missions!
    for (let i = 0; i < multiplayerMissions.length; i++) {
      multiplayerMissions[i].drawMission();
    }
  }
}

//_______________________________________________________
//Draw open Multiplayer Mission Screen

let openMissionEnable = false;
let openMMission;

function drawOpenMMission() {
  rx = width * 0.5;
  ry = height * 0.5;
  rw = 700;
  rh = 750;

  if (openMissionEnable) {
    push();
    missionFrame.drawScreen();
    missionFrame.drawExtendedFrame();
    missionFrame.backBtn.drawButton();
    missionExitBtn.drawExitButton();

    fill(0);
    textSize(30);
    textStyle(BOLD);
    textFont(ftRetroGaming);
    fill(255);
    text(`${openMMission.name}`, rx, ry - rh / 2.2);
    pop();

    //draw open mission class
    push();
    openMMission.drawOpenMission(rx, ry, rw, rh);
    pop();
  }
}

//_________________________________________________________________________
// Draw Contribution screen of open Multiplayer Mission

let contributionSzeneEnable = false;

function drawContributionScene() {
  rx = width * 0.5;
  ry = height * 0.5;
  rw = 700;
  rh = 750;

  if (contributionSzeneEnable === true) {
    push();
    missionFrame.drawScreen();
    missionFrame.drawExtendedFrame();
    missionFrame.backBtn.drawButton();
    missionExitBtn.drawExitButton();

    fill(255);
    textFont(ftRetroGaming);
    textSize(35);
    textStyle(BOLD);
    text(`${openMMission.name}`, rx, ry - rh / 2.2);

    pop();

    push();
    openMMission.drawContribution(rx, ry, rw, rh);
    pop();
  }
}

//_________________________________________________________________
// Draw Messages to the client:

let messages = [];

let messageObjects = [];
//let messages = [];

function drawMessages() {
  if (
    cur_status === "status_play" &&
    missionMenuEnable === false &&
    mmissionEnable === false &&
    openMissionEnable === false &&
    contributionSzeneEnable === false &&
    shipFleetEnable === false &&
    stationUpgradeEnable === false
  ) {
    if (messages[0]) {
      messageObjects = [];

      messageObjects[0] = new Message(messages[0].message, 0);

      //  for (let i=0; i<messageObjects.length; i++){
      //   messageObjects[i].drawMessage();
      //  }

      push();
      messageObjects[0].drawMessage();
      pop();

      console.log(messages);
      console.log(messageObjects);
    }
  }
}

//______________________________________________________________________
//Draw Running Missions Interface

let fullRunningSoloMissions = []; //Data from the accepted_solo_missions entity
let runningMissionFrame;
let runningMissionPageEnable = 0; //enabled page on the interface

let displayedRunningMissions; //array of all created Running Mission to be displayed

let runningArrowLeft;
let runningArrowRight;
let pages = [0];

function drawRunningMissions() {
  if (cur_status === "status_play") {
    rx = width * 0.15;
    ry = height * 0.3;
    rw = 300;
    rh = 300;

    let positions = [ry - rh * 0.3, ry, ry + rh * 0.29];
    displayedRunningMissions = [];
    let positionIndex = 0;
    pages = [0];

    //Frame
    runningMissionFrame = new OnScreenFrame(
      rx,
      ry,
      rw,
      rh,
      ImageRunningMissionsFrame,
      false
    );
    runningMissionFrame.drawScreen();

    if (fullRunningSoloMissions.length > 0) {
      for (let i = 0; i < fullRunningSoloMissions.length; i++) {
        if (i % 3 === 0 && i !== 0) {
          positionIndex = 0;
          pages.push(pages.length);
          displayedRunningMissions[i] = new RunningMission(
            rx + 30,
            positions[positionIndex],
            rw,
            rh * 0.33,
            pages[pages.length - 1],
            fullRunningSoloMissions[i].Name,
            fullRunningSoloMissions[i].Mission_Time,
            fullRunningSoloMissions[i].Story
          );
        } else {
          displayedRunningMissions[i] = new RunningMission(
            rx + 30,
            positions[positionIndex],
            rw,
            rh * 0.33,
            pages[pages.length - 1],
            fullRunningSoloMissions[i].Name,
            fullRunningSoloMissions[i].Mission_Time,
            fullRunningSoloMissions[i].Story
          );
          positionIndex++;
        }
      }

      console.log(displayedRunningMissions);
      for (let i = 0; i < displayedRunningMissions.length; i++) {
        displayedRunningMissions[i].drawRunningMission();
      }

      //Arrows
      runningArrowLeft = new ImageButton(
        rx + 10,
        ry + rh / 2.3,
        30,
        30,
        ImageArrowLeft
      );
      runningArrowRight = new ImageButton(
        rx + 55,
        ry + rh / 2.3,
        30,
        30,
        ImageArrowRight
      );

      runningArrowLeft.drawImageButton();
      runningArrowRight.drawImageButton();
    } else {
      push();
      fill(TimeClr);
      textSize(12);
      textFont(ftRetroGaming);
      text("No Solo Missions Running", rx + 30, positions[0] - 30, 130, 50);
      pop();
    }
  }
}

function drawAssistant() {
  image(ImageAssistant, width - 500, height - 600, 500, 600);
}

function drawLogo() {
  image(ImageMarsFactionIcon, width * 0.84, height * 0.03, 200, 200);
}

function drawRegisteredScreen() {
  push();
  fill("green");
  rect(width * 0.5, height * 0.7, 400, 150, 20);
  fill(255);
  textAlign(CENTER, CENTER);
  fill(255);
  textStyle(BOLD);
  text(
    "You have successfully registered as a new Player. Please refresh this page and login again with your credentials.",
    width * 0.5,
    height * 0.7,
    350,
    400
  );
  pop();
}
