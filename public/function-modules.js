//In here, you will find all function components, that are executing commands, pushing and pulling data to the server and more.



//_______________________________________________________
// Mouse Pressed Function starts here
function mousePressed(){

//Login Button clicked
    if (loginBtn.isClicked(mouseX, mouseY) && cur_status==='status_login'){
        doLogin();
    } 

    //'Register new player' button clicked
    if(registerBtn.isClicked(mouseX, mouseY)){
      cur_status = 'status_register';
      registerScreen();
      loop();
    
    }

    //Register Button clicked
    if(cur_status === 'status_register'){
      if (submitRegisterBtn.isClicked(mouseX, mouseY)){
        doRegister();
        if (playerId){
          cur_status === 'status_login';
          reactivateLogin();
        }
      }
    }
    

//Missions Button clicked
    if (gameStatus){
      if(missionButton.isClicked(mouseX, mouseY)){
        missionMenuEnable = true;
        createMissions();
        drawSoloMissions();
        //loop();
      }
    }

//Solo Mission Accept Button clicked
    if (cur_status === 'status_play'){
      for (let i=0; i<5; i++){
        if(singleMissionsArr[i].acceptButton.isClicked(mouseX, mouseY)){
          acceptSoloMission(i);
          //createResourceBar();
          //loop();
        }
      }
    }

//Solo Mission Exit Button clicked
    if(cur_status === 'status_play'){
      if (missionExitBtn.isClicked(mouseX, mouseY)){
        missionMenuEnable = false;
        createGame();
        loop();
      }
    }



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
    

   
    

} 
//_____________________________________________________
//END OF MOUSEPRESSED


//_________________________________________________
//Do Register
let username;
let password;
let email;
let playerId;


function doRegister(){
if (cur_status==='status_register'){

    username = InputName.value();
    email = InputEmail.value();

  
    //check if passwords are equal and all fields are filled. 
  if (email !== '' && username !== ''){

  if (InputPass.value() === InputPassTwo.value()){
      password = InputPass.value();

      dataSent = {
       "username": username,
       "password": password,
       "email": email
    }

    //create player
    httpPost('/Register', 'json', dataSent, (dataReceived)=> {
  
      if (dataReceived[0].Name === username){
        alert('The username is already taken');

      } else {
  
        playerId = dataReceived[0].Player_Id;
        console.log('New Player registered with player Id: '+ playerId);
        
      }
    })
  }
  else {
    alert('Passwords dont match');
  } 
}
  else {
    alert('Please fill out all required fields');
  }


}
}



//_________________________________________________
// Do the Login

function doLogin(){

if (cur_status=== 'status_login'){

  username = InputName.value();
  password = InputPass.value();
  
  dataSent = {
    "username": username,
    "password": password
  }
  
  //Login player and get Player ID
  httpPost('/Login', 'json', dataSent, (dataReceived)=>{
    
    if (dataReceived.length<1){
      alert('Password or username is wrong');
    } else {
      playerId = dataReceived[0].Player_Id;
      console.log('playerId '+ playerId);
    
    
    //__________________________________________________________
    //Load all initial stuff from DB, that we need for initial drawing


    //Get Rank from player
  loadJSON('/getPlayerRank/'+playerId, (dataReceived)=> {
    rank = dataReceived[0].Rank;
    gameDate = new Date(dataReceived[0].In_Game_Date).getFullYear();
    
  })


    //Get Resources from Database
    loadResources();



    //Get SingleplayerMissions of the player: 
    loadSoloMissions();


     //Load Mission Respawn timer
    loadJSON('/getRespawnTimer/'+playerId, (dataReceived)=> {
    missionRespawnTime = dataReceived[0].RespawnMissionTime;
    })

    
    //Load Accepted Missions and put them in Running Missions array
    loadRunningMissions();


    // Get player ships from ship-fleet
    loadPlayerShips();

    

    // add all the loadJSON paths below: 

    //ships

    //station upgrades
    

    //Load Multiplayer Missions




     //Create the game
     createGame();
      
   
       }
     })
     //loop();
    }
  }




//_____________________________________________________
//Accepting a Solo Mission!

function acceptSoloMission(missionIndex){
  
  let acceptedMission = singleMissionsArr[missionIndex];
  let missionShip;


  //Verify, if player has resources and ship available for the mission.
  if (missionResourcesVerified(acceptedMission) && missionShipVerified(acceptedMission)){

  console.log('inputResource1 '+acceptedMission.InputResource1);



  console.log('Input Ship '+ acceptedMission.InputShip);

  //Disable button of accepted mission and put it into running missions array on client
  acceptedMission.acceptedMission();
  runningSoloMissions.push(acceptedMission.missionId);

  //Deduct resources of the mission from the player resources:
  money -= acceptedMission.InputMoney;
  people -= acceptedMission.InputPeople;
  ore -= acceptedMission.InputOre;
  water -= acceptedMission.InputWater;


  //block ship for use of the player for time of mission (change status on DB): 
 for (let i=0; i<availableShips.length; i++){
  if (acceptedMission.InputShip === availableShips[i].shipId){
    missionShip = availableShips[i];
    missionShip.blockShip();
    blockedShips.push(missionShip);
    availableShips.splice(i,1);
  }
}

// create and draw missions again.
//loop();
 createMissions();
 drawSoloMissions();
 createResourceBar();
 drawResourceValues();



  //Update DB!
  dataSent = {
    "Player_Id": playerId,
    "Money": money,
    "Water": water,
    "Ore": ore,
    "People": people,
    "Mission_Id":  acceptedMission.missionId,
    "Ship_Fleet_ID": missionShip.ship_Fleet_ID
  }
  
  //update resources
  httpPost('/updatePlayerResources', 'json', dataSent, (dataReceived)=> {} )

  //put mission in accepted missions on db
  httpPost('/updateAcceptedMissions', 'json', dataSent, (dataReceived)=> {})


  //send updated Ships to DB:
  httpPost('/updateShipFleet', 'json', dataSent, (dataReceived)=> {});



  
  }

  else{
  alert ('You dont have the resources or available ships, to do this mission');
   }
}





//verify if enough resources are on the client.
function missionResourcesVerified(acceptedMission){

  if (money < acceptedMission.InputMoney){
    return false;
  } 
  else if (people < acceptedMission.InputPeople){
    return false;
  }
  else if (ore < acceptedMission.InputOre){
    return false;
  }
  else if (water < acceptedMission.InputWater){
    return false;
  }

  else {
    return true;
  }
 }







//verify, if the required ship is in available ships.
function missionShipVerified(acceptedMission){

  for (let i=0; i<availableShips.length; i++){
    if (acceptedMission.InputShip === availableShips[i].shipId){
      return true;
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





//___________________________________________________________________________________
//Ping function to get updated solo missions and completed running missions every 15 seconds. 

setInterval(function(){
 if(cur_status === 'status_play'){

  //Listening for completed missions in accepted solo_missions
 dataSent = {
   "playerId": playerId,
};
 

 httpPost('/getCompletedMissions', 'json', dataSent, (dataReceived)=> {
  console.log(dataReceived.message);
 });
 


  loadResources();
  loadPlayerShips(); 
  loadSoloMissions();
  loadRunningMissions();      //get solomissions data from DB       
  //createMissions();           //assign data to missions
  


  //draw 
  //loop();
                         
 
}
},15000);
