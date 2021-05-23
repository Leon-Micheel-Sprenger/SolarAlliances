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
          createResourceBar();
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


    
// //Ship Fleet Button clicked
// if (gameStatus){
//   if(shipFleetButton.isClicked(mouseX, mouseY)){
//     createShipFleetInterface();
//   }
// }  

// //Ship Fleet Exit Button clicked
// if(cur_status === 'status_play'){
//   if (shipfleetExitBtn.isClicked(mouseX, mouseY)){
//     createGame();
//     loop();
//   }
// }

// //Station Upgrades Button clicked
// if (gameStatus){
//   if(stationButton.isClicked(mouseX, mouseY)){
//     createStationUpgradesInterface();
//   }
// }

// //Station Upgrades Exit Button clicked
// if(cur_status === 'status_play'){
//   if (stationExitBtn.isClicked(mouseX, mouseY)){
//     createGame();
//     loop();
//   }
// }
   
    

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

  console.log('inputResource1 '+acceptedMission.inputResource1);



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

// draw missions again.
//loop();
drawSoloMissions();
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









//___________________________________________________________________________________
//Ping function to get updated solo missions and completed running missions every 15 seconds. 

setInterval(function(){
 if(cur_status === 'status_play'){

  //Listening for completed missions in accepted solo_missions
 dataSent = {
   "playerId": playerId,
};
 

 httpPost('/getCompletedMissions', 'json', dataSent, (dataReceived)=> {
  console.log('mission completed '+dataReceived[0]);
   if (dataReceived.length > 0){
     alert('Your mission is finished');
   }
 });
 


  loadResources();
  loadPlayerShips(); 
  loadSoloMissions();
  loadRunningMissions();      //get solomissions data from DB       
  createMissions();           //assign data to missions
  createResourceBar();

  
  //draw 
  loop();
                         
 
}
},4000);
