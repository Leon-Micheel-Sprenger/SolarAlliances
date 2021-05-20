function loadSoloMissions() {

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
}


//Load running mission from DB and put them in Running Missions array
function loadRunningMissions(){
    loadJSON('/getRunningMissions/'+playerId, (dataReceived)=> {
        runningSoloMissions = [];
        for(let i=0; i<dataReceived.length; i++){
          runningSoloMissions.push(dataReceived[i].Solo_Mission_Id);
            }
         }) ;
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
    loop();
  })  
}


//Get player ships;
function loadPlayerShips(){
  loadJSON('/getPlayerShips/'+playerId, (dataReceived)=> {
    ships = [];
    availableShips = [];
    blockedShips = [];
    for(let i = 0; i<dataReceived.length; i++){
      ships.push(dataReceived[i]);
    }
    createships();
    loop(); 
  }) 
}