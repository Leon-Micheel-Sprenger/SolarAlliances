//function - modules.js
// some more changes
//Ship Fleet Button clicked
if (gameStatus){
    if(shipFleetButton.isClicked(mouseX, mouseY)){
      createShipFleetInterface();
    }
  }  
  
  //Ship Fleet Exit Button clicked
  if(cur_status === 'status_play'){
    //if (shipfleetExitBtn.isClicked(mouseX, mouseY)){
      //createGame();
      //loop();
    //}
  }
  
  //Build War Ship btn is clicked
  if (cur_status === 'status_play'){
    if(buildWarshipBtn.isClicked(mouseX,mouseY)){
      buildwarship();
      loop();
    }
  }
  
  //Build Mining Ship btn is clicked
  if (cur_status === 'status_play'){
    if(buildMiningtshipBtn.isClicked(mouseX,mouseY)){
      buildminingship();
      loop();
    }
  }
  
  //Build Transport Ship btn is clicked
  if (cur_status === 'status_play'){
    if(buildTransportshipBtn.isClicked(mouseX,mouseY)){
      buildtransportship();
      loop();
    }
  }
  
  //Build Exploration Ship btn is clicked
  if (cur_status === 'status_play'){
    if(buildExplorationshipBtn.isClicked(mouseX,mouseY)){
      buildexplorationship();
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
    //if (stationExitBtn.isClicked(mouseX, mouseY)){
      //createGame();
      //loop();
    //}
  }
  
  //Build station upgrade dome 1 btn is clicked
  if (cur_status === 'status_play'){
    if(buildDome1Btn.isClicked(mouseX,mouseY)){
      buildupgradedome1();
      loop();
    }
  }
  
  //Build station upgrade dome 2 btn is clicked
  if (cur_status === 'status_play'){
    if(buildDome2Btn.isClicked(mouseX,mouseY)){
      buildupgradedome2();
      loop();
    }
  }
  
  //Build station upgrade dome 3 btn is clicked
  if (cur_status === 'status_play'){
    if(buildDome3Btn.isClicked(mouseX,mouseY)){
      buildupgradedome3();
      loop();
    }
  }
   
  //Build station upgrade storage 1 btn is clicked
  if (cur_status === 'status_play'){
    if(buildStorage1Btn.isClicked(mouseX,mouseY)){
      buildupgradestorage1();
      loop();
    }
  }
  
  //Build station upgrade storage 2 btn is clicked
  if (cur_status === 'status_play'){
    if(buildStorage2Btn.isClicked(mouseX,mouseY)){
      buildupgradestorage2();
      loop();
    }
  }
  
  //Build station upgrade storage 3 btn is clicked
  if (cur_status === 'status_play'){
    if(buildStorage3Btn.isClicked(mouseX,mouseY)){
      buildupgradestorage3();
      loop();
    }
  }


  

  //_______________________________________________________________________________________________
  //build war ships
  function buildwarship(){
    if(buildWarshipBtn.isClicked(mouseX,mouseY)){
      if(people > 20 && ore > 50){
        let inputcrew=20;
        let inputore=50;
        ore=ore-inputore;
        people=people-inputcrew
        let dataSend={
          "Player_Id": playerId,
          "Ore": ore,
          "People": people
        }
        httpPost('/buildwarship','json',dataSend,(dataReceived)=>{
          console.log(dataReceived.message);
        });
      }else{
        alert ('You dont have the resources to build this ship');
      }
    }
  }
  
  //build mining ships
  function buildminingship(){
    if(buildMiningtshipBtn.isClicked(mouseX,mouseY)){
      if(ore > 50 && people > 20){
        let inputcrew=20;
        let inputore=50;
        ore=ore-inputore;
        people=people-inputcrew
        let dataSend={
          "Player_Id": playerId,
          "Ore": ore,
          "People": people
        }
        httpPost('/buildminingship','json',dataSend,(dataReceived)=>{
          console.log(dataReceived.message);
        });
      }else{
        alert ('You dont have the resources to build this ship');
      }
    }
  }




   //build transport ships
   function buildtransportship(){
    if(buildTransportshipBtn.isClicked(mouseX,mouseY)){
      if(ore > 50 && people > 20){
        let inputcrew=20;
        let inputore=50;
        ore=ore-inputore;
        people=people-inputcrew
        let dataSend={
          "Player_Id": playerId,
          "Ore": ore,
          "People": people
        }
        httpPost('/buildtransportship','json',dataSend,(dataReceived)=>{
          console.log(dataReceived.message);
        });
      }else{
        alert ('You dont have the resources to build this ship');
      }
    }
  }
  
  //build exploration ships
  function buildexplorationship(){
    if(buildExplorationshipBtn.isClicked(mouseX,mouseY)){
      if(ore > 50 && people > 20){
        let inputcrew=20;
        let inputore=50;
        ore=ore-inputore;
        people=people-inputcrew
        let dataSend={
          "Player_Id": playerId,
          "Ore": ore,
          "People": people
        }
        httpPost('/buildexplorationship','json',dataSend,(dataReceived)=>{
          console.log(dataReceived.message);
        });
      }else{
        alert ('You dont have the resources to build this ship');
      }
    }
  }
  
  
  //____________________________________________________________________________________
  //station Upgardes
  //build station upgrade dome 1
  function buildupgradedome1(){
    if(buildDome1Btn.isClicked(mouseX,mouseY)){
      if(money > 100){
        if(max_people === 100){
          let price=100;
          money=money-price;
          let dataSend={
            "Player_Id": playerId,
            "Money": money
          }
          httpPost('/builddome1','json',dataSend,(dataReceived)=>{
            console.log(dataReceived.message);
          });
        }else{
          alert ('You already did this upgrade');
        }
      }else{
        alert('You dont have the resources to do this upgrade')
      }
    }
  }
  
  //build station upgrade dome 2
  function buildupgradedome2(){
    if(buildDome2Btn.isClicked(mouseX,mouseY)){
      if(money > 200){
        if(max_people === 150){
          let price=200;
          money=money-price;
          let dataSend={
            "Player_Id": playerId,
            "Money": money
          }
          httpPost('/builddome2','json',dataSend,(dataReceived)=>{
            console.log(dataReceived.message);
          });
        }else{
          alert ('You already did this upgrade');
        }
      }else{
        alert('You dont have the resources to do this upgrade')
      }
    }
  }
  
  //build station upgrade dome 3
  function buildupgradedome3(){
    if(buildDome3Btn.isClicked(mouseX,mouseY)){
      if(money > 300){
        if(max_people === 250){
          let price=300;
          money=money-price;
          let dataSend={
            "Player_Id": playerId,
            "Money": money
          }
          httpPost('/builddome3','json',dataSend,(dataReceived)=>{
            console.log(dataReceived.message);
          });
        }else{
          alert ('You already did this upgrade');
        }
      }else{
        alert('You dont have the resources to do this upgrade')
      }
    }
  }
  
  //build station upgrade storage 1
  function buildupgradestorage1(){
    if(buildStorage1Btn.isClicked(mouseX,mouseY)){
      if(money > 100){
        if(max_water === 1000 && max_ore === 1000){
          let price=100;
          money=money-price
          let dataSend={
            "Player_Id": playerId,
            "Money": money
          }
          httpPost('/buildstorage1','json',dataSend,(dataReceived)=>{
            console.log(dataReceived.message);
          });
        }else{
          alert ('You already did this upgrade');
        }
      }else{
        alert('You dont have the resources to do this upgrade')
      }
    }
  }
  
  //build station upgrade storage 2
  function buildupgradestorage2(){
    if(buildStorage2Btn.isClicked(mouseX,mouseY)){
      if(money > 200){
        if(max_water === 1050 && max_ore === 1050){
          let price=200;
          money=money-price
          let dataSend={
            "Player_Id": playerId,
            "Money": money
          }
          httpPost('/buildstorage2','json',dataSend,(dataReceived)=>{
            console.log(dataReceived.message);
          });
        }else{
          alert ('You already did this upgrade');
        }
      }else{
        alert('You dont have the resources to do this upgrade')
      }
    }
  }
  
  //build station upgrade storage 3
  function buildupgradestorage3(){
    if(buildStorage3Btn.isClicked(mouseX,mouseY)){
      if(money > 300){
        if(max_water === 1150 && max_ore === 1150){
          let price=300;
          money=money-price
          let dataSend={
            "Player_Id": playerId,
            "Money": money
          }
          httpPost('/buildstorage3','json',dataSend,(dataReceived)=>{
            console.log(dataReceived.message);
          });
        }else{
          alert ('You already did this upgrade');
        }
      }else{
        alert('You dont have the resources to do this upgrade')
      }
    }
  }



  //design-modules.js

  //btn for the ship yard
shipFleetButton = new Button(width-1250,height-200,200,50,'Ship Fleet',0,255,20);
shipFleetButton.drawButton();

//btn for the station upgrades
stationButton = new Button(width-1550,height-200,200,50,'Station Upgrades',0,255,20);
stationButton.drawButton();




//_________________________________________________________________________________________________
//create ship fleet frame
let shipfleetFrame;
let shipfleetExitBtn;
let buildWarshipBtn;
let buildTransportshipBtn;
let buildMiningtshipBtn;
let buildExplorationshipBtn;
//btns
let btnW=250;
let btnH=50;
let btnclr=0;
let txtclr=255;

let spaceshipid;

function createShipFleetInterface(){
  rx= width*0.5;
  ry= height*0.5;
  rw= 700;
  rh= 750;

  shipfleetFrame = new OnScreenFrame(rx, ry, rw, rh);
  shipfleetFrame.drawScreen();

  shipfleetExitBtn = new ExitButton(rx+rw/2-exitbtnW, ry-rh/2,exitbtnW,exitbtnH);
  shipfleetExitBtn.drawExitButton();

  buildWarshipBtn = new Button(rx,ry-(rh/2-250),btnW,btnH,'Build War Ship',btnclr,txtclr,20);
  buildWarshipBtn.drawButton();

  buildTransportshipBtn = new Button(rx,ry-(rh/2-350),btnW,btnH,'Build Transport Ship',btnclr,txtclr,20);
  buildTransportshipBtn.drawButton();

  buildMiningtshipBtn = new Button(rx,ry-(rh/2-450),btnW,btnH,'Build Mining Ship',btnclr,txtclr,20);
  buildMiningtshipBtn.drawButton();

  buildExplorationshipBtn = new Button(rx,ry-(rh/2-550),btnW,btnH,'Build Exploration Ship',btnclr,txtclr,20);
  buildExplorationshipBtn.drawButton();

  //if(buildWarshipBtn.isClicked()){
    //spaceshipid=3;
  //}else if(buildTransportshipBtn.isClicked()){
    //spaceshipid=5;
  //}else if(buildMiningtshipBtn.isClicked()){
    //spaceshipid=4;
  //}else if(buildExplorationshipBtn.isClicked()){
    //spaceshipid=5;
  //}else{
    //spaceshipid=0;
  //}
}



//_________________________________________________________________________________________________
//create station upgrades frame
let stationFrame;
let stationExitBtn;
let exitbtnW=30;
let exitbtnH=30;
let buildDome1Btn;
let buildDome2Btn;
let buildDome3Btn;
let buildStorage1Btn;
let buildStorage2Btn;
let buildStorage3Btn;

function createStationUpgradesInterface(){
  rx= width*0.5;
  ry= height*0.5;
  rw= 700;
  rh= 750;
  let rank1;
  let rank2;
  let rank3;
  let btnrank1posY = ry-(rh/2-200);
  let btnrank2posY = ry-(rh/2-450);
  let btnrank3posY = ry+(rh/2-50);
  let btndomeposX = rx-rx/2+270;
  let btnstorageposX = rx+200;

  stationFrame = new OnScreenFrame(rx, ry, rw, rh);
  stationFrame.drawScreen();

  stationExitBtn = new ExitButton(rx+rw/2-exitbtnW, ry-rh/2,exitbtnW,exitbtnH);
  stationExitBtn.drawExitButton();

  buildDome1Btn = new Button(btndomeposX,btnrank1posY,btnW,btnH,'Build Dome Rank 1',btnclr,txtclr,20);
  buildDome1Btn.drawButton();

  buildDome2Btn = new Button(btndomeposX,btnrank2posY,btnW,btnH,'Build Dome Rank 2',btnclr,txtclr,20);
  buildDome2Btn.drawButton();

  buildDome3Btn = new Button(btndomeposX,btnrank3posY,btnW,btnH,'Build Dome Rank 3',btnclr,txtclr,20);
  buildDome3Btn.drawButton();

  buildStorage1Btn = new Button(btnstorageposX,btnrank1posY,btnW,btnH,'Build Storage Rank 1',btnclr,txtclr,20);
  buildStorage1Btn.drawButton();

  buildStorage2Btn = new Button(btnstorageposX,btnrank2posY,btnW,btnH,'Build Storage Rank 2',btnclr,txtclr,20);
  buildStorage2Btn.drawButton();

  buildStorage3Btn = new Button(btnstorageposX,btnrank3posY,btnW,btnH,'Build Storage Rank 3',btnclr,txtclr,20);
  buildStorage3Btn.drawButton();
}



//loadMission.js

//Get player ships;
function loadPlayerShips(){
    loadJSON('/getPlayerShips/'+playerId, (dataReceived)=> {
      ships = [];
      availableShips = [];
      blockedShips = [];
      for(let i = 0; i<dataReceived.length; i++){
        ships.push(dataReceived[i]);
      }
      shipsinputore = dataReceived[0].Input_Ore;
      shipsinputpeople = dataReceived[0].Input_Crew;
      createships();
      drawGrid();
      drawShips();
      //loop();
    }) 
  }




  //server.js

  //build war ship
app.post('/buildwarship', (req, res)=> {

    let Player_Id = req.body.Player_Id;
    let Ore = req.body.Ore;
    let People = req.body.People;
  
    let sql = `INSERT INTO ship_fleet (Ship_on_Mission, Ship_UnderRepair, Ship_Health, Ship_UnderConstruction, Player_Id, Spaceships_Id) VALUES ('0', '0', '100', '0', '${Player_Id}', '3');`;
  
    db.query(sql, (err, result)=> {
      if(err) throw err;
  
      let sql = `UPDATE player_resources SET Ore ='${Ore}', People ='${People}' WHERE Player_Id ='${Player_Id}';`;
  
      db.query(sql, (err, result)=> {
        if(err) throw err;
        res.send(result);
      })
    })
  
  })
  
  //build mining ship
  app.post('/buildminingship', (req, res)=> {
  
    let Player_Id = req.body.Player_Id;
    let Ore = req.body.Ore;
    let People = req.body.People;
  
    let sql = `INSERT INTO ship_fleet (Ship_on_Mission, Ship_UnderRepair, Ship_Health, Ship_UnderConstruction, Player_Id, Spaceships_Id) VALUES ('0', '0', '100', '0', '${Player_Id}', '4');`;
  
    db.query(sql, (err, result)=> {
      if(err) throw err;
  
      let sql = `UPDATE player_resources SET Ore ='${Ore}', People ='${People}' WHERE Player_Id ='${Player_Id}';`;
  
      db.query(sql, (err, result)=> {
        if(err) throw err;
        res.send(result);
      })
    })
  
  })
  
  //build transport ship
  app.post('/buildtransportship', (req, res)=> {
  
    let Player_Id = req.body.Player_Id;
    let Ore = req.body.Ore;
    let People = req.body.People;
  
    let sql = `INSERT INTO ship_fleet (Ship_on_Mission, Ship_UnderRepair, Ship_Health, Ship_UnderConstruction, Player_Id, Spaceships_Id) VALUES ('0', '0', '100', '0', '${Player_Id}', '5');`;
  
    db.query(sql, (err, result)=> {
      if(err) throw err;
  
      let sql = `UPDATE player_resources SET Ore ='${Ore}', People ='${People}' WHERE Player_Id ='${Player_Id}';`;
  
      db.query(sql, (err, result)=> {
        if(err) throw err;
        res.send(result);
      })
    })
  
  })
  
  //build exploration ship
  app.post('/buildexplorationship', (req, res)=> {
  
    let Player_Id = req.body.Player_Id;
    let Ore = req.body.Ore;
    let People = req.body.People;
  
    let sql = `INSERT INTO ship_fleet (Ship_on_Mission, Ship_UnderRepair, Ship_Health, Ship_UnderConstruction, Player_Id, Spaceships_Id) VALUES ('0', '0', '100', '0', '${Player_Id}', '6');`;
  
    db.query(sql, (err, result)=> {
      if(err) throw err;
  
      let sql = `UPDATE player_resources SET Ore ='${Ore}', People ='${People}' WHERE Player_Id ='${Player_Id}';`;
  
      db.query(sql, (err, result)=> {
        if(err) throw err;
        res.send(result);
      })
    })
  
  })
  
  //___________________________________________________________________________________________________________________________
  //station Upgardes
  
  //build station upgrade dome 1
  app.post('/builddome1', (req, res)=> {
  
    let Player_Id = req.body.Player_Id;
    let Money = req.body.Money;
  
    let sql = `INSERT INTO player_upgrades (Player_Id, SSUpgrade_Id) VALUES ('${Player_Id}', '1');`;
  
    db.query(sql, (err, result)=> {
      if(err) throw err;
  
      let sql = `UPDATE player_resources SET Max_People = 150, Money = '${Money}' WHERE Player_Id = ${Player_Id};`;
  
      db.query(sql, (err, result)=> {
        if(err) throw err;
        res.send(result);
      })
    })
  
  })
  
  //build station upgrade dome 2
  app.post('/builddome2', (req, res)=> {
  
    let Player_Id = req.body.Player_Id;
    let Money = req.body.Money;
  
    let sql = `INSERT INTO player_upgrades (Player_Id, SSUpgrade_Id) VALUES ('${Player_Id}', '2');`;
  
    db.query(sql, (err, result)=> {
      if(err) throw err;
  
      let sql = `UPDATE player_resources SET Max_People = 250, Money = '${Money}' WHERE Player_Id = ${Player_Id};`;
  
      db.query(sql, (err, result)=> {
        if(err) throw err;
        res.send(result);
      })
    })
  
  })
  
  //build station upgrade dome 3
  app.post('/builddome3', (req, res)=> {
  
    let Player_Id = req.body.Player_Id;
    let Money = req.body.Money;
  
    let sql = `INSERT INTO player_upgrades (Player_Id, SSUpgrade_Id) VALUES ('${Player_Id}', '3');`;
  
    db.query(sql, (err, result)=> {
      if(err) throw err;
  
      let sql = `UPDATE player_resources SET Max_People = 400, Money = '${Money}' WHERE Player_Id = ${Player_Id};`;
  
      db.query(sql, (err, result)=> {
        if(err) throw err;
        res.send(result);
      })
    })
  
  })
  
  //build station upgrade storage 1
  app.post('/buildstorage1', (req, res)=> {
  
    let Player_Id = req.body.Player_Id;
    let Money = req.body.Money;
  
    let sql = `INSERT INTO player_upgrades (Player_Id, SSUpgrade_Id) VALUES ('${Player_Id}', '4');`;
  
    db.query(sql, (err, result)=> {
      if(err) throw err;
  
      let sql = `UPDATE player_resources SET Max_Ore = 1050, Max_Water = 1050, Money = '${Money}' WHERE Player_Id = ${Player_Id};`;
  
      db.query(sql, (err, result)=> {
        if(err) throw err;
        res.send(result);
      })
    })
  
  })
  
  //build station upgrade storage 2
  app.post('/buildstorage2', (req, res)=> {
  
    let Player_Id = req.body.Player_Id;
    let Money = req.body.Money;
  
    let sql = `INSERT INTO player_upgrades (Player_Id, SSUpgrade_Id) VALUES ('${Player_Id}', '5');`;
  
    db.query(sql, (err, result)=> {
      if(err) throw err;
  
      let sql = `UPDATE player_resources SET Max_Ore = 1150, Max_Water = 1150, Money = '${Money}' WHERE Player_Id = ${Player_Id};`;
  
      db.query(sql, (err, result)=> {
        if(err) throw err;
        res.send(result);
      })
    })
  
  })
  
  //build station upgrade storage 3
  app.post('/buildstorage3', (req, res)=> {
  
    let Player_Id = req.body.Player_Id;
    let Money = req.body.Money;
  
    let sql = `INSERT INTO player_upgrades (Player_Id, SSUpgrade_Id) VALUES ('${Player_Id}', '3');`;
  
    db.query(sql, (err, result)=> {
      if(err) throw err;
  
      let sql = `UPDATE player_resources SET Max_Ore = 1300, Max_Water = 1300, Money = '${Money}' WHERE Player_Id = ${Player_Id};`;
  
      db.query(sql, (err, result)=> {
        if(err) throw err;
        res.send(result);
      })
    })
  
  })
