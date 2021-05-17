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
        createMissionInterface();
      }
    }

//Solo Mission Accept Button clicked
    if (cur_status === 'status_play'){
      for (let i=0; i<5; i++){
        if(singleMissionsArr[i].acceptButton.isClicked(mouseX, mouseY)){
          acceptSoloMission(i);
          createResourceBar();
          loop();
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

    //station upgrades


    //SingleplayerMissions of the player: 
    loadJSON('/getPlayerMissions/'+playerId, (dataReceived)=> {
      //assign all variables of mission1. 
      singlemissionId = dataReceived[0].Solo_Missions_Id;
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

      //mission2
      singlemission2Id = dataReceived[1].Solo_Missions_Id;
      singlemission2Name = dataReceived[1].Name;
      singlemission2Story = dataReceived[1].Story;
      singlemission2Time = dataReceived[1].Time;
      singlemission2InputMoney = dataReceived[1].Input_Money;
      singlemission2InputPeople = dataReceived[1].Input_People;
      singlemission2InputOre = dataReceived[1].Input_Ore;
      singlemission2InputWater = dataReceived[1].Input_Water;
      singlemission2InputShips = dataReceived[1].Ships_Id;
      singlemission2RewardMoney = dataReceived[1].Reward_Money;
      singlemission2RewardPeople = dataReceived[1].Reward_People;
      singlemission2RewardOre = dataReceived[1].Reward_Ore;
      singlemission2RewardWater = dataReceived[1].Reward_Water;
      singlemission2Rank = dataReceived[1].Rank;

      //mission3
      singlemission3Id = dataReceived[2].Solo_Missions_Id;
      singlemission3Name = dataReceived[2].Name;
      singlemission3Story = dataReceived[2].Story;
      singlemission3Time = dataReceived[2].Time;
      singlemission3InputMoney = dataReceived[2].Input_Money;
      singlemission3InputPeople = dataReceived[2].Input_People;
      singlemission3InputOre = dataReceived[2].Input_Ore;
      singlemission3InputWater = dataReceived[2].Input_Water;
      singlemission3InputShips = dataReceived[2].Ships_Id;
      singlemission3RewardMoney = dataReceived[2].Reward_Money;
      singlemission3RewardPeople = dataReceived[2].Reward_People;
      singlemission3RewardOre = dataReceived[2].Reward_Ore;
      singlemission3RewardWater = dataReceived[2].Reward_Water;
      singlemission3Rank = dataReceived[2].Rank;

      //mission4
      singlemission4Id = dataReceived[3].Solo_Missions_Id;
      singlemission4Name = dataReceived[3].Name;
      singlemission4Story = dataReceived[3].Story;
      singlemission4Time = dataReceived[3].Time;
      singlemission4InputMoney = dataReceived[3].Input_Money;
      singlemission4InputPeople = dataReceived[3].Input_People;
      singlemission4InputOre = dataReceived[3].Input_Ore;
      singlemission4InputWater = dataReceived[3].Input_Water;
      singlemission4InputShips = dataReceived[3].Ships_Id;
      singlemission4RewardMoney = dataReceived[3].Reward_Money;
      singlemission4RewardPeople = dataReceived[3].Reward_People;
      singlemission4RewardOre = dataReceived[3].Reward_Ore;
      singlemission4RewardWater = dataReceived[3].Reward_Water;
      singlemission4Rank = dataReceived[3].Rank;
      
      //mission5
      singlemission5Id = dataReceived[4].Solo_Missions_Id;
      singlemission5Name = dataReceived[4].Name;
      singlemission5Story = dataReceived[4].Story;
      singlemission5Time = dataReceived[4].Time;
      singlemission5InputMoney = dataReceived[4].Input_Money;
      singlemission5InputPeople = dataReceived[4].Input_People;
      singlemission5InputOre = dataReceived[4].Input_Ore;
      singlemission5InputWater = dataReceived[4].Input_Water;
      singlemission5InputShips = dataReceived[4].Ships_Id;
      singlemission5RewardMoney = dataReceived[4].Reward_Money;
      singlemission5RewardPeople = dataReceived[4].Reward_People;
      singlemission5RewardOre = dataReceived[4].Reward_Ore;
      singlemission5RewardWater = dataReceived[4].Reward_Water;
      singlemission5Rank = dataReceived[4].Rank;
      
    })

    

    //Load Multiplayer Missions






    createGame();
   
       }
     })
    }
  }




//_____________________________________________________
//Accepting a Solo Mission!

function acceptSoloMission(missionNumber){
  
  let acceptedMission = singleMissionsArr[missionNumber];

  

  //Deduct resources of the mission from the player resources:
  money -= acceptedMission.InputMoney;
  people -= acceptedMission.InputPeople;
  ore -= acceptedMission.InputOre;
  water -= acceptedMission.InputWater;

  //Update resources on DB!
  dataSent = {
    "Player_Id": playerId,
    "Money": money,
    "Water": water,
    "Ore": ore,
    "People": people,
    "Mission_Id":  acceptedMission.missionId
  }
  
  httpPost('/updatePlayerResources', 'json', dataSent, (dataReceived)=> {} )

  //remove mission from playerMissions and put it into acceptedmission (running missions)  
  //singleMissionsArr.splice(missionNumber,1);
  httpPost('/updateAcceptedMissions', 'json', dataSent, (dataReceived)=> {})






//block ship for use of the player for time of mission (change status on DB): 




  
  //Disable button of accepted mission and make it grey:
  acceptedMission.acceptButton.disable();
  push();
  fill('rgba(148,148,148, 0.7)');
  rectMode(CENTER);
  rect(acceptedMission.rx, acceptedMission.ry, acceptedMission.rw, acceptedMission.rh);
  pop();

 

}

  

//Ping function for the solo Missions

function soloMissionPing(){
  
}

