//classes.js



//_________________________________________________________
//ship class
class Ship {

    constructor(shipId, r, c,gridStartX, gridStartY, side, width, height){
  
      this.shipId = shipId;
      this.iconpath;
      this.r = r;           //place in grid (number eg. 5,2,3)
      this.c = c;
      this.side = side;
      this.width = width;     //image width
      this.height = height;  //image height
      this.gridStartX = gridStartX;
      this.gridStartY = gridStartY;
  
      this.posX =    this.gridStartX * side + (this.c * side);
      this.posY =    this.gridStartY * side + (this.r *side); //place in px (500px, 200px...)
  
    }
  
    drawShip(){
  
      switch (this.shipId) {
  
        case 3: 
          this.iconpath = warShipIconPath;
          break;
        case 4:
          this.iconpath = miningShipIconPath;
          break;
        case 5:
          this.iconpath = transportShipIconPath;
          break;
        case 6:
          this.iconpath = explorationShipIconPath;
          break;
        default:
          this.iconpath = emptyIconPath;
      }
  
      loadImage(this.iconpath, img => {
        image(img, this.posX-(this.side/5), this.posY-(this.side/5), this.width, this.height);
      })
  
      console.log(this.iconpath);
  
    }
  }



  //function-modules.js

  
      // add all the loadJSON paths below: 
      //ships
      loadJSON('/getPlayerShips/'+playerId, (dataReceived)=> {
        //shipId = dataReceived[0].Spaceships_Id;
        for(let i = 0; i<dataReceived.length; i++){
          shipId.push(dataReceived[i].Spaceships_Id);
        }
        console.log(dataReceived);
        loop(); 
      }) 



//design-modules.js

/__________________________________________________
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
  createships();
  //sendPlayerId_toServer();
  
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

  //btn for the ship yard
  shipFleetButton = new Button(width-1250,height-200,200,50,'Ship Fleet',0,255,20);
  shipFleetButton.drawButton();

  //btn for the station upgrades
  stationButton = new Button(width-1550,height-200,200,50,'Station Upgrades',0,255,20);
  stationButton.drawButton();
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
        tilesArr[r][c] = new Tile (r, c, side, txt='');    //to let tile numbers appear, insert into txt: ${r},${c} 
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
let shipId=[];   //array of all shipIDs in the ship fleet
let shipList=[];  //array of all ship objects

//problem --> in the new ship(shipId[i],...) shipId appears as Array(0) (doesn't read the shipId array)
//problem --> more than 1 shipList appears in the console (no errors appear about this)
function createships(){

  
  if(cur_status === 'status_play'){

    shipId = [5,4,4,5];     //to be deleted later!!!!

  for (let i=0; i<shipId.length; i++){
          let ship = new Ship(shipId[i],0,i, gridStartX, gridStartY, side, 30, 40);
          shipList.push(ship);
    }
  }
  console.log('shipList '+shipList);
}



function drawShips(){
  if(cur_status === 'status_play'){
    for(let i=0; i<shipList.length; i++){
      for (r=gridStartX; r<gridX+gridStartX;r++){
        for(c=gridStartY; c<gridY+gridStartY; c++){
          shipList[i].drawShip();
        }
      }
    }
  }
}



//sketch.js


function draw() {
    drawResourceValues();
    drawGrid();
    drawShips();
    
    noLoop();
    console.log(cur_status);
    
    
  }



  //server.js

  //Get Player Ships
app.get('/getPlayerShips/:playerId', (req, res)=> {
    let playerId = req.params.playerId
    
    let sql = `SELECT Spaceships_Id FROM ship_fleet WHERE Player_Id = ${playerId};`;
  
    db.query(sql, (err, result)=> {
      if(err) throw err;
  
      console.log(result);
      res.send(result);
    })
  })