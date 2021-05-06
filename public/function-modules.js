//In here, you will find all function components, that are executing commands, pushing and pulling data to the server and more.


//_______________________________________________________
// Mouse Pressed Function starts here
function mousePressed(){

//Login Button clicked
    if (loginBtn.isClicked(mouseX, mouseY) && cur_status==='status_login'){
        doLogin();
    } 

    if(registerBtn.isClicked(mouseX, mouseY)){
      cur_status = 'status_register';
      registerScreen();
      loop();
    
    }

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
        createMissionInterface();
      }
    }

//Mission Accept Button clicked
    if (cur_status === 'status_play'){
      if(singlemission1.acceptButton.isClicked(mouseX, mouseY)){
        console.log('click');
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
    loadJSON('/getPlayerShips/'+playerId, (dataReceived)=> {
      shipId = dataReceived[0].Spaceships_Id;
      console.log(dataReceived);
      loop(); 
    }) 

    //station upgrades


    //SingleplayerMissions of the player: 
    loadJSON('/getPlayerMissions/'+playerId, (dataReceived)=> {
      //assign all variables of the mission. 
      singlemissionName = dataReceived[0].Name;
      singlemissionStory = dataReceived[0].Story;
      singlemissionTime = dataReceived[0].Time;
      singlemissionInputMoney = dataReceived[0].Input_Money;
      singlemissionInputPeople = dataReceived[0].Input_People;
      singlemissionInputOre = dataReceived[0].Input_Ore;
      singlemissionInputWater = dataReceived[0].Input_Water;
      singlemissionInputShips = dataReceived[0].Ships_Id;
      singlemissionRewardMoney = dataReceived[0].Reward_Money;
      singlemissionRewardPeople = dataReceived[0].Reward_People;
      singlemissionRewardOre = dataReceived[0].Reward_Ore;
      singlemissionRewardWater = dataReceived[0].Reward_Water;
      singlemissionRank = dataReceived[0].Rank;
    })

    //Multiplayer Missions






    createGame();
    create_gride();
  }
  })

 

   }
  }


  


