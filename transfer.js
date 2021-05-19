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