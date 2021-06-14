//Mission1 Variables; 
let singlemissionId;
let singlemissionName;
let singlemissionStory;
let singlemissionTime;
let singlemissionInputMoney;
let singlemissionInputPeople;
let singlemissionInputOre;
let singlemissionInputWater;
let singlemissionInputShips;
let singlemissionRewardMoney;
let singlemissionRewardPeople;
let singlemissionRewardOre;
let singlemissionRewardWater;
let singlemissionRank;
let singlemissionAcceptBtn;

//Mission2 Variables;
let singlemission2Id;
let singlemission2Name;
let singlemission2Story;
let singlemission2Time;
let singlemission2InputMoney;
let singlemission2InputPeople;
let singlemission2InputOre;
let singlemission2InputWater;
let singlemission2InputShips;
let singlemission2RewardMoney;
let singlemission2RewardPeople;
let singlemission2RewardOre;
let singlemission2RewardWater;
let singlemission2Rank;
let singlemission2AcceptBtn;

//Mission3 Variables;
let singlemission3Id;
let singlemission3Name;
let singlemission3Story;
let singlemission3Time;
let singlemission3InputMoney;
let singlemission3InputPeople;
let singlemission3InputOre;
let singlemission3InputWater;
let singlemission3InputShips;
let singlemission3RewardMoney;
let singlemission3RewardPeople;
let singlemission3RewardOre;
let singlemission3RewardWater;
let singlemission3Rank;
let singlemission3AcceptBtn;

//Mission4 Variables;
let singlemission4Id;
let singlemission4Name;
let singlemission4Story;
let singlemission4Time;
let singlemission4InputMoney;
let singlemission4InputPeople;
let singlemission4InputOre;
let singlemission4InputWater;
let singlemission4InputShips;
let singlemission4RewardMoney;
let singlemission4RewardPeople;
let singlemission4RewardOre;
let singlemission4RewardWater;
let singlemission4Rank;
let singlemission4AcceptBtn;

//Mission5 Variables;
let singlemission5Id;
let singlemission5Name;
let singlemission5Story;
let singlemission5Time;
let singlemission5InputMoney;
let singlemission5InputPeople;
let singlemission5InputOre;
let singlemission5InputWater;
let singlemission5InputShips;
let singlemission5RewardMoney;
let singlemission5RewardPeople;
let singlemission5RewardOre;
let singlemission5RewardWater;
let singlemission5Rank;
let singlemission5AcceptBtn;



function loadSoloMissions() {

   

    loadJSON('/getPlayerMissions/'+playerId, (dataReceived)=> {
      if (singleMissionsArr){
        previousMissions = singleMissionsArr;
      } else {
        previousMissions = [];
      }
      
      console.log(dataReceived);
      singleMissionsArr = [];

      //Respawn Timer
      missionRespawnTime = dataReceived.RespawnTime;
      

        //assign all variables of mission1. 
        singlemissionId = dataReceived.result[0].Solo_Missions_Id;
        singlemissionName = dataReceived.result[0].Name;
        singlemissionStory = dataReceived.result[0].Story;
        singlemissionTime = dataReceived.result[0].Time;
        singlemissionInputMoney = dataReceived.result[0].Input_Money;
        singlemissionInputPeople = dataReceived.result[0].Input_People;
        singlemissionInputOre = dataReceived.result[0].Input_Ore;
        singlemissionInputWater = dataReceived.result[0].Input_Water;
        singlemissionInputShips = dataReceived.result[0].Ships_Id;
        singlemissionRewardMoney = dataReceived.result[0].Reward_Money;
        singlemissionRewardPeople = dataReceived.result[0].Reward_People;
        singlemissionRewardOre = dataReceived.result[0].Reward_Ore;
        singlemissionRewardWater = dataReceived.result[0].Reward_Water;
        singlemissionRank = dataReceived.result[0].Rank;
  
        //mission2
        singlemission2Id = dataReceived.result[1].Solo_Missions_Id;
        singlemission2Name = dataReceived.result[1].Name;
        singlemission2Story = dataReceived.result[1].Story;
        singlemission2Time = dataReceived.result[1].Time;
        singlemission2InputMoney = dataReceived.result[1].Input_Money;
        singlemission2InputPeople = dataReceived.result[1].Input_People;
        singlemission2InputOre = dataReceived.result[1].Input_Ore;
        singlemission2InputWater = dataReceived.result[1].Input_Water;
        singlemission2InputShips = dataReceived.result[1].Ships_Id;
        singlemission2RewardMoney = dataReceived.result[1].Reward_Money;
        singlemission2RewardPeople = dataReceived.result[1].Reward_People;
        singlemission2RewardOre = dataReceived.result[1].Reward_Ore;
        singlemission2RewardWater = dataReceived.result[1].Reward_Water;
        singlemission2Rank = dataReceived.result[1].Rank;
  
        //mission3
        singlemission3Id = dataReceived.result[2].Solo_Missions_Id;
        singlemission3Name = dataReceived.result[2].Name;
        singlemission3Story = dataReceived.result[2].Story;
        singlemission3Time = dataReceived.result[2].Time;
        singlemission3InputMoney = dataReceived.result[2].Input_Money;
        singlemission3InputPeople = dataReceived.result[2].Input_People;
        singlemission3InputOre = dataReceived.result[2].Input_Ore;
        singlemission3InputWater = dataReceived.result[2].Input_Water;
        singlemission3InputShips = dataReceived.result[2].Ships_Id;
        singlemission3RewardMoney = dataReceived.result[2].Reward_Money;
        singlemission3RewardPeople = dataReceived.result[2].Reward_People;
        singlemission3RewardOre = dataReceived.result[2].Reward_Ore;
        singlemission3RewardWater = dataReceived.result[2].Reward_Water;
        singlemission3Rank = dataReceived.result[2].Rank;
  
        //mission4
        singlemission4Id = dataReceived.result[3].Solo_Missions_Id;
        singlemission4Name = dataReceived.result[3].Name;
        singlemission4Story = dataReceived.result[3].Story;
        singlemission4Time = dataReceived.result[3].Time;
        singlemission4InputMoney = dataReceived.result[3].Input_Money;
        singlemission4InputPeople = dataReceived.result[3].Input_People;
        singlemission4InputOre = dataReceived.result[3].Input_Ore;
        singlemission4InputWater = dataReceived.result[3].Input_Water;
        singlemission4InputShips = dataReceived.result[3].Ships_Id;
        singlemission4RewardMoney = dataReceived.result[3].Reward_Money;
        singlemission4RewardPeople = dataReceived.result[3].Reward_People;
        singlemission4RewardOre = dataReceived.result[3].Reward_Ore;
        singlemission4RewardWater = dataReceived.result[3].Reward_Water;
        singlemission4Rank = dataReceived.result[3].Rank;
        
        //mission5
        singlemission5Id = dataReceived.result[4].Solo_Missions_Id;
        singlemission5Name = dataReceived.result[4].Name;
        singlemission5Story = dataReceived.result[4].Story;
        singlemission5Time = dataReceived.result[4].Time;
        singlemission5InputMoney = dataReceived.result[4].Input_Money;
        singlemission5InputPeople = dataReceived.result[4].Input_People;
        singlemission5InputOre = dataReceived.result[4].Input_Ore;
        singlemission5InputWater = dataReceived.result[4].Input_Water;
        singlemission5InputShips = dataReceived.result[4].Ships_Id;
        singlemission5RewardMoney = dataReceived.result[4].Reward_Money;
        singlemission5RewardPeople = dataReceived.result[4].Reward_People;
        singlemission5RewardOre = dataReceived.result[4].Reward_Ore;
        singlemission5RewardWater = dataReceived.result[4].Reward_Water;
        singlemission5Rank = dataReceived.result[4].Rank;

        
        console.log(missionRespawnTime);
        createMissions();
        drawSoloMissions();
      })
}


//Load running mission from DB and put them in Running Missions array
function loadRunningMissions(){
    loadJSON('/getRunningMissions/'+playerId, (dataReceived)=> {
        runningSoloMissions = [];
        fullRunningSoloMissions = [];
        for(let i=0; i<dataReceived.length; i++){
          runningSoloMissions.push(dataReceived[i].Solo_Mission_Id);
          fullRunningSoloMissions.push(dataReceived[i]);
            }
          
           drawRunningMissions()
         }) ;
}


//Load Mission Respawn Time:
function loadMissionRespawnTime(){
  loadJSON('/getRespawnTimer/'+playerId, (dataReceived)=> {
    missionRespawnTime = dataReceived[0].RespawnMissionTime;
    })
}




//Get resources from DB
function loadResources(){
  
loadJSON('/getPlayerResources/'+playerId, (dataReceived)=> {
    money = dataReceived[0].Money;
    ore = dataReceived[0].Ore;
    water = dataReceived[0].Water;
    people = dataReceived[0].People;
    max_ore = dataReceived[0].Max_Ore;
    max_water = dataReceived[0].Max_Water;
    max_people = dataReceived[0].Max_People;
    createResourceBar();
    drawResourceValues();
    
  })  
}


//Get player ships;
function loadPlayerShips(){
  loadJSON('/getPlayerShips/'+playerId, (dataReceived)=> {
    ships = [];
    availableShips = [];
    blockedShips = [];
    Gridpages = [0];
    for(let i = 0; i<dataReceived.length; i++){
      ships.push(dataReceived[i]);
    }
    
    drawGrid();
    createships();
    drawShips();
    loop();
  }) 
}



//Get multiplayer Missions
function loadMultiplayerMissions(){
  loadJSON('/getMMissions', (dataReceived)=> {
    console.log(dataReceived);
    
    mmissionPages = [];
    mmissionsData = [];
    multiplayerMissions = [];
    
    
    for(let i=0; i<dataReceived.length; i++){
      mmissionsData.push(dataReceived[i]);
    }
  
    
    
    createMultiplayerMissions();
    loop();

  })
}



//load accepted Multiplayer Missions

function loadAcceptedMultiplayerMissions(){
  loadJSON('/getAcceptedMMissions/'+playerId, (dataReceived)=> {
    acceptedMultiplayerMissions = [];
    runningMultiplayerMissions = [];
   

  for(let i=0; i<dataReceived.length; i++){
    if (dataReceived[i].Status === 2){
      acceptedMultiplayerMissions.push(dataReceived[i]);
     
    }
    else if (dataReceived[i].Status === 1){
      runningMultiplayerMissions.push(dataReceived[i]);
      
    }
  }

  console.log('accepted multiplayer missions '+acceptedMultiplayerMissions);
  console.log('running multiplayer missions ' +runningMultiplayerMissions);

  })

}