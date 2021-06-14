//In here, you will find all function components, that are executing commands, pushing and pulling data to the server and more.




//_______________________________________________________
// Mouse Pressed Function starts here
function mousePressed(){
  

//Login Button clicked
    if (loginBtn.isClicked(mouseX, mouseY) && cur_status==='status_login'){
        doLogin();
    } 

    //'Register new player' button clicked
    if (cur_status === 'status_login'){
    if(registerBtn.isClicked(mouseX, mouseY)){
      cur_status = 'status_register';
      registerScreen();
      loop();
    }
    }

    //'Register' Button clicked
    if(cur_status === 'status_register'){
      if (submitRegisterBtn.isClicked(mouseX, mouseY)){
        doRegister();
        drawRegisteredScreen();
      }
    }
    

//Missions Button clicked
    if (cur_status === 'status_play'){
      if(missionButton.isClicked(mouseX, mouseY)){
        missionMenuEnable = true;
        missionButton.disable();
        createMissions();
        drawSoloMissions();
        //loop();
      }
    }

//Solo Mission Accept Button clicked
    if (cur_status === 'status_play' && missionMenuEnable){
      for (let i=0; i<5; i++){
        if(singleMissionsArr[i].acceptButton.isClicked(mouseX, mouseY)){
          acceptSoloMission(i);
          //createResourceBar();
          //loop();
        }
      }
    }

//Mission Exit Button clicked
    if(cur_status === 'status_play'){
      if(missionMenuEnable || mmissionEnable || openMissionEnable || contributionSzeneEnable){
        if (missionExitBtn.isClicked(mouseX, mouseY)){
          missionMenuEnable = false;
          mmissionEnable = false;
          openMissionEnable = false;
          contributionSzeneEnable = false;
          createGame();
          //createMultiplayerMissions();
          loop();
        }
      }
      
    }




    //Click arrow Left of collaboratiive missions
if (cur_status === 'status_play' && mmissionEnable){
  if ( missionFrame.arrowLeftIsClicked(mouseX, mouseY)){
    if(pageEnabled-1 >= 0){
      pageEnabled --;
      loop();
    }
  }
}

//Click arrow Right of collaboratiive missions
if (cur_status === 'status_play' && mmissionEnable){
  if (missionFrame.arrowRightIsClicked(mouseX, mouseY)){
    if(pageEnabled+1 < mmissionPages.length){
      pageEnabled ++;
      loop();
    }
  };
}



//Click arrow Right of Ships in grid
if (cur_status === 'status_play' ){
  if (gridArrowRightBtn.IsClicked(mouseX, mouseY)){
    if(gridPageEnable+1 < Gridpages.length){
     
      gridPageEnable ++;
      drawGrid();
      drawShips();
    }
  };
}

//Click arrow Left of Ships in grid
if (cur_status === 'status_play' ){
  if (gridArrowLeftBtn.IsClicked(mouseX, mouseY)){
    if(gridPageEnable-1 >= 0){
    
      gridPageEnable --;
      drawGrid();
      drawShips();
    }
  };
}


//Click arrow Right of Running Missions
if (cur_status === 'status_play'  && runningSoloMissions.length > 0){
  if (runningArrowRight.IsClicked(mouseX, mouseY)){
    if(runningMissionPageEnable+1 < pages.length ){

      runningMissionPageEnable ++;
      drawRunningMissions();
    }
  };
}


//Click arrow Left of Running Missions
if (cur_status === 'status_play' && runningSoloMissions.length > 0){
  if (runningArrowLeft.IsClicked(mouseX, mouseY)){
    if(runningMissionPageEnable-1 >= 0 ){
      runningMissionPageEnable --;
      drawRunningMissions();
    }
  };
}




//Click Collaborative Missions Button
if (cur_status === 'status_play' && missionMenuEnable){
  if (multiMissionsBtn.isClicked(mouseX, mouseY)){
    missionMenuEnable = false;
    mmissionEnable = true;
    createGame();
    loop();
  }
}


//Click 'Open' Button on Collaborative Missions
if (cur_status === 'status_play' && mmissionEnable){
    for (let i=0; i<multiplayerMissions.length; i++){
      if (multiplayerMissions[i].openBtn.isClicked(mouseX, mouseY) && multiplayerMissions[i].openBtnEnable === true){
        mmissionEnable = false;
        openMissionEnable = true;
        openMMission = multiplayerMissions[i];
        openMMission.index = i;
        //createMultiplayerMissions();
        loop();
     }
  }
  
  
}


//open Mission 'Back' Button clicked
if(cur_status === 'status_play' && openMissionEnable || contributionSzeneEnable){
  if (missionFrame.backBtn.isClicked(mouseX, mouseY)){
    mmissionEnable = true;
    openMissionEnable = false;
    contributionSzeneEnable = false;
    createGame();
    //createMultiplayerMissions();
    loop();
  }
}




//'Contribute to this Mission' Button on Multiplayer Mission
if(cur_status === 'status_play' && openMissionEnable){
  if (openMMission.openContributionBtn.isClicked(mouseX, mouseY)){
    // mmissionEnable = true;
    openMissionEnable = false;
    contributionSzeneEnable = true; 
    loop();
  }
}

//'Contribute Resources' Button on Multiplayer Mission
if(cur_status === 'status_play' && contributionSzeneEnable){
  if (openMMission.contributeToMissionBtn.isClicked(mouseX, mouseY)){
    // mmissionEnable = true;
    acceptMultiplayerMission(openMMission);
    loop();
  }
}






//Click Single Player Missions Button 
if (cur_status === 'status_play'){
  if (missionMenuEnable || mmissionEnable){
  if(singleMissionsBtn.isClicked(mouseX, mouseY)){
    missionMenuEnable = true;
    mmissionEnable = false;
    openMissionEnable = false;
    loop();
  }
}
}












    //Ship Fleet Button clicked
if (gameStatus){
  if(shipFleetButton.isClicked(mouseX, mouseY)){
    shipFleetEnable = true;
    createShipFleetInterface();
  }
}  

//Ship Fleet Exit Button clicked
if(cur_status === 'status_play' && shipFleetEnable){
  if (shipfleetExitBtn.isClicked(mouseX, mouseY)){
    shipFleetEnable = false;
    createGame();
    loop();
  }
}

//Build War Ship btn is clicked
if (cur_status === 'status_play' && shipFleetEnable){
  if(buildWarshipBtn.isClicked(mouseX,mouseY)){
    buildwarship();
    loop();
  }
}

//Build Mining Ship btn is clicked
if (cur_status === 'status_play' && shipFleetEnable){
  if(buildMiningtshipBtn.isClicked(mouseX,mouseY)){
    buildminingship();
    loop();
  }
}

//Build Transport Ship btn is clicked
if (cur_status === 'status_play' && shipFleetEnable){
  if(buildTransportshipBtn.isClicked(mouseX,mouseY)){
    buildtransportship();
    loop();
  }
}

//Build Exploration Ship btn is clicked
if (cur_status === 'status_play' && shipFleetEnable){
  if(buildExplorationshipBtn.isClicked(mouseX,mouseY)){
    buildexplorationship();
    loop();
  }
}

//Station Upgrades Button clicked
if (cur_status === 'status_play'){
  if(stationButton.isClicked(mouseX, mouseY)){
    stationUpgradeEnable = true;
    createStationUpgradesInterface();
  }
}

//Station Upgrades Exit Button clicked
if(cur_status === 'status_play' && stationUpgradeEnable){
  if (stationExitBtn.isClicked(mouseX, mouseY)){
    stationUpgradeEnable = false;
    createGame();
    loop();
  }
}

//Build station upgrade dome 1 btn is clicked
if (cur_status === 'status_play' && stationUpgradeEnable){
  if(buildDome1Btn.isClicked(mouseX,mouseY)){
    buildupgradedome1();
    loop();
  }
}

//Build station upgrade dome 2 btn is clicked
if (cur_status === 'status_play' && stationUpgradeEnable){
  if(buildDome2Btn.isClicked(mouseX,mouseY)){
    buildupgradedome2();
    loop();
  }
}

//Build station upgrade dome 3 btn is clicked
if (cur_status === 'status_play' && stationUpgradeEnable){
  if(buildDome3Btn.isClicked(mouseX,mouseY)){
    buildupgradedome3();
    loop();
  }
}
 
//Build station upgrade storage 1 btn is clicked
if (cur_status === 'status_play' && stationUpgradeEnable){
  if(buildStorage1Btn.isClicked(mouseX,mouseY)){
    buildupgradestorage1();
    loop();
  }
}

//Build station upgrade storage 2 btn is clicked
if (cur_status === 'status_play' && stationUpgradeEnable){
  if(buildStorage2Btn.isClicked(mouseX,mouseY)){
    buildupgradestorage2();
    loop();
  }
}

//Build station upgrade storage 3 btn is clicked
if (cur_status === 'status_play' && stationUpgradeEnable){
  if(buildStorage3Btn.isClicked(mouseX,mouseY)){
    buildupgradestorage3();
    loop();
  }
}



//"Dismiss" Button on Message is clicked
if (cur_status === 'status_play' && messageObjects.length>0){
  for (let i=0; i<messageObjects.length; i++){
    if(messageObjects[i].dismissBtn.isClicked(mouseX, mouseY)){
      messages.splice(0,1);
      createGame();
      loop();
      
    }
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
        submitRegisterBtn.disable();
        
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

  if (username && password){

  
  
  dataSent = {
    "username": username,
    "password": password
  }
  
  //Login player and get Player ID
  httpPost('/Login', 'json', dataSent, (dataReceived)=>{
    console.log(dataReceived);
    if (dataReceived.message === 'Wrong password'){
      alert('Password or username is wrong');
      console.log
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



     

   
    
    //Load Accepted Missions and put them in Running Missions array
    loadRunningMissions();


    // Get player ships from ship-fleet
    loadPlayerShips();


    //Load multiplayer missions:
    loadAcceptedMultiplayerMissions();
    
    loadMultiplayerMissions();

    

    // add all the loadJSON paths below: 

 

    //station upgrades
    





     //Create the game
     createGame();
      
   
       }
     })
     //loop();
    }
    else {
      alert('Please fill out the required fields');
  }
 
  }
  }




//_____________________________________________________
//Accepting a Solo Mission!

function acceptSoloMission(missionIndex){
  
  let acceptedMission = singleMissionsArr[missionIndex];
  let missionShip;

  console.log(acceptedMission);
  console.log(availableShips);


  //Verify, if player has resources and ship available for the mission.
  if (missionResourcesVerified(acceptedMission) && solomissionShipVerified(acceptedMission)){
    

  

  //Disable button of accepted mission and put it into running missions array on client
  acceptedMission.acceptedMission();
  runningSoloMissions.push(acceptedMission.missionId);
  

  //Deduct resources of the mission from the player resources:
  money -= acceptedMission.InputMoney;
  people -= acceptedMission.InputPeople;
  ore -= acceptedMission.InputOre;
  water -= acceptedMission.InputWater;


  //block ship for use of the player for time of mission: 
 for (let i=0; i<availableShips.length; i++){
  if (acceptedMission.InputShip === availableShips[i].shipId){
    missionShip = availableShips[i];
    missionShip.blockShip();
    blockedShips.push(missionShip);
    availableShips.splice(i,1);
    break;
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


  //put mission in accepted missions on db
  httpPost('/updateAcceptedMissions', 'json', dataSent, (dataReceived)=> {
   
 })

  
  //update resources
  httpPost('/updatePlayerResources', 'json', dataSent, (dataReceived)=> {
  } )


  //send updated Ships to DB:
  httpPost('/updateShipFleet', 'json', dataSent, (dataReceived)=> {
     
  });

    //message to player:
    let message1 = {message: `Commander, You accepted the mission ${acceptedMission.name}. Let's hope, everything goes as planned.`}
    messages.push(message1);

    let message2 = {message: "Commander, one of your ships has been deployed for a mission!"}
    messages.push(message2);

    let message3 = {message: "Resources were Deducted from the Storage."}
    messages.push(message2);
  
    drawMessages();

   



  
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
function solomissionShipVerified(acceptedMission){
  console.log('run');
  for (let i=0; i<availableShips.length; i++){
    if (acceptedMission.InputShip === availableShips[i].shipId){
      
      return true;
    }
    
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

//_______________________________________________________________________________________
//Accept a Multiplayer Mission function. Fires, when Contribution button is clicked!

function acceptMultiplayerMission(acceptedMission){


//console.log('index '+acceptedMission.index);
let index = acceptedMission.index;

//Verify, if player has resources and ship available for the mission. 

if (multiplayerMissionResourcesVerify(acceptedMission) && missionShipVerified(acceptedMission)){


  


//CLIENT SIDE IMPLICATIONS
//Disable the contribution Button of the accepted Multiplayer Mission. (on client)
 acceptedMission.acceptMission(2);

 //Deduct the resources from the player resources  (on client)
  money -= acceptedMission.MinMoney;
  ore -= acceptedMission.MinOre;
  water -= acceptedMission.MinWater;
  people -= acceptedMission.MinPeople;

  //block ship (on client)
  let missionShip;
  for (let i=0; i<availableShips.length; i++){
    if (acceptedMission.InputShipId === availableShips[i].shipId){
      missionShip = availableShips[i];
      missionShip.blockShip();
      blockedShips.push(missionShip);
      availableShips.splice(i,1);
      break;
    }
  }

  //increase submitted resources of mission and make mission accepted/running on client:
  multiplayerMissions[index].SubmittedResource +=  multiplayerMissions[index].MinResource;
  multiplayerMissions[index].SubmittedShips += 1;

  let SubmittedResource = multiplayerMissions[index].SubmittedResource ;
  let InputResource = multiplayerMissions[index].InputResource;
  let SubmittedShips =  multiplayerMissions[index].SubmittedShips;
  let InputShips =  multiplayerMissions[index].ShipAmount;
 
  console.log(multiplayerMissions[index]);
  

  if (SubmittedResource === InputResource && SubmittedShips === InputShips){
    multiplayerMissions[index].acceptMission(1)
    
    //message to player:
    let message = {message: `Commander, You are joining others on the glorious mission: ${acceptedMission.name}! The Martian Federal Republic wishes  you good fortune to a successful completion. `}
    messages.push(message);
  } else {
    multiplayerMissions[index].acceptMission(2);
    
     //message to player:
     let message = {message: `Commander, You are joining others on the glorious mission ${acceptedMission.name}! The Martian Federal Republic wishes  you good fortune and hopes to find other brave commanders to join.`}
     messages.push(message);
  }





//DATABASE IMPLICATIONS
// send update to DB (resources, ship and stored multiplayer mission in accepted (multiplayer) Missions

//Update DB!
dataSent = {
  "Player_Id": playerId,
  "Money": money,
  "Water": water,
  "Ore": ore,
  "People": people,
  "MMissions_Id":  acceptedMission.missions_Id,
  "Ship_Fleet_ID": missionShip.ship_Fleet_ID
}

//update resources on DB
httpPost('/updatePlayerResources', 'json', dataSent, (dataReceived)=> {
    console.log(dataReceived);
     //message to player:
     let message = {message: "Your Resources have been updated!"}
     messages.push(message);
  
} )

//put mission in accepted multiplayer missions on db
httpPost('/updateAcceptedMultiplayerMissions', 'json', dataSent, (dataReceived)=> {
 
    console.log(dataReceived);

  
})


//send updated Ships to DB:
httpPost('/updateShipFleet', 'json', dataSent, (dataReceived)=> {
 
    console.log(dataReceived)
     //message to player:
     let message = {message: "Commaner, A ship from your ship fleet has been deployed for a mission."}
     messages.push(message);

  
});








createResourceBar();
loop();

}
else {
  alert('You dont have the resources or Ships to contribute to this Mission');
}






}



//Verify Resources for Multiplayer mission
function multiplayerMissionResourcesVerify(acceptedMission){
  if (money < acceptedMission.MinMoney){
    return false;
  } 
  else if (people < acceptedMission.MinPeople){
    return false;
  }
  else if (ore < acceptedMission.MinOre){
    return false;
  }
  else if (water < acceptedMission.MinWater){
    return false;
  }

  else {
    return true;
  }
}



//verify, if the required ship is in available ships. (for multiplayer missions)
function missionShipVerified(acceptedMission){

  for (let i=0; i<availableShips.length; i++){
    if (acceptedMission.InputShipId === availableShips[i].shipId){
      return true;
    }
  }
}




//MissionRespawn Timer:
  setInterval(function(){
    rx= width*0.5;
    ry= height*0.5;
    rw= 700;
    rh= 750;

    missionRespawnTime --;  // how do I deduct from a timevalue?
    drawRespawnTimer(rx, ry, rw, rh);
  }, 10000)

 





//___________________________________________________________________________________
//Ping function to get updated solo missions and completed running missions every 30 seconds. 

setInterval(function(){
 if(cur_status === 'status_play'){

  //Listening for completed missions in accepted solo_missions
 dataSent = {
   "playerId": playerId,
};
 

 httpPost('/getCompletedMissions', 'json', dataSent, (dataReceived)=> {


  if (dataReceived.message){
    console.log(dataReceived);
    messages.push(dataReceived);

   
    loadPlayerShips(); 
    drawMessages(); 


  }    
 });

 httpPost('/getCompletedMultiplayerMissions', 'json', dataSent, (dataReceived)=> {
  
  if (dataReceived.message){
    console.log(dataReceived);
    messages.push(dataReceived);

    
    loadPlayerShips(); 
    drawMessages(); 
  }
  
   
 });

 loadPlayerShips(); 
 loadResources();
 loadMissionRespawnTime();
 loadSoloMissions();
 loadRunningMissions();
 loadAcceptedMultiplayerMissions(); 
 loadMultiplayerMissions();
 loadPlayerShips(); 




  // loadResources();
  // loadPlayerShips(); 
  // loadSoloMissions();
  // loadRunningMissions();      //get solomissions data from DB  
  // loadAcceptedMultiplayerMissions(); 
  // loadMultiplayerMissions(); 
                         
 
}
},30000);
