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
  
  httpPost('/Login', 'json', dataSent, (dataReceived)=>{
    playerId = dataReceived[0].Player_Id;
    console.log('playerId '+ playerId);
    createGame();
  })
  }


  


