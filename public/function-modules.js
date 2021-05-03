//In here, you will find all function components, that are executing commands, pushing and pulling data to the server and more.



// Mouse Pressed Function starts here

function mousePressed(){

//Login Button clicked
    if (loginBtn.isClicked(mouseX, mouseY)){
        doLogin();
    } 


//Missions Button clicked
    if (gameStatus){
      if(missionButton.isClicked(mouseX, mouseY)){
        createMissionInterface();
        
      }
    }
    


} 




//_________________________________________________
// Do the Login

function doLogin(){

  username = InputName.value();
  password = InputPass.value();
  email = InputEmail.value();
  
  dataSent = {
    "username": username,
    "password": password,
    "email": email
  }
  
  //Get player Id
  httpPost('/Login', 'json', dataSent, (dataReceived)=>{
    playerId = dataReceived[0].Player_Id;
    console.log('playerId '+ playerId);
    

    //Get Rank from player
  loadJSON('/getPlayerRank/'+playerId, (dataReceived)=> {
    rank = dataReceived[0].Rank;
    gameDate = new Date(dataReceived[0].In_Game_Date).getFullYear();
    console.log(gameDate);
    
  })


    //Get Resources from Database
    loadJSON('/getPlayerResources/'+playerId, (dataReceived)=> {
      money = dataReceived[0].Money;
      ore = dataReceived[0].Ore;
      water = dataReceived[0].Water;
      people = dataReceived[0].People;
      max_ore = dataReceived[0].Max_Ore;
      max_water = dataReceived[0].Max_Water;
      max_people = dataReceived[0].Max_People;
      console.log(dataReceived);
      loop();
    })  


    // add all the loadJSON paths below: 

    //ships

    //station upgrades

    //SingleplayerMissions

    //Multiplayer Missions





  })

  createGame();
  
  }


  


