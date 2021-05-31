const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql');
const app = express()
const port = 3000

app.use(express.static('public'));

// parse application/x-www-form-urlencoded --> we need this to encrypt the data coming from the httpPost in the script
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// connect to database
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'solaralliances',
    port: '3306'
});

db.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + db.threadId);
});


//______________________________________________________________
//______________________________________________________________
//Other server logic



//_______________________________________________________________
//update Solo missions every 5 minutes (a new Mission is coming on top and all others are shifted down)
setInterval(function(){

  //get mission ids from player_missions:

  let sql = `SELECT * FROM player_missions;`;
  
  db.query(sql, (err, result)=> {
    if (err) throw err;
    //here you could use a for loop to make it for all players at the same time
    let Missions = [result[0].Mission1, result[0].Mission2, result[0].Mission3, result[0].Mission4, result[0].Mission5 ];
    let playerId = result[0].Player_Id;

    let sql = `SELECT Solo_Missions_Id FROM solo_missions WHERE Rank=1 AND NOT Solo_Missions_Id IN (${Missions[0]}, ${Missions[1]}, ${Missions[2]}, ${Missions[3]}) ORDER BY RAND() LIMIT 1`;
    
    db.query(sql, (err, result)=> {
      if (err) throw err;
      let newMissionId = result[0].Solo_Missions_Id;

      let sql = `UPDATE player_missions SET Mission1=${newMissionId}, Mission2=${Missions[0]}, Mission3=${Missions[1]}, Mission4=${Missions[2]}, Mission5=${Missions[3]} WHERE Player_Id=${playerId};`;

      db.query(sql, (err, result)=> {
        if (err) throw err;
        
      })

    })
  
  })
  
}, 300000);







//_____________________________________________________________
// Deduct 30 seconds from all running missions (accepted missions), every 30 seconds.
setInterval(function(){

    let sql = `Select * from accepted_solomissions`;

    db.query(sql, (err, result)=> {

      if (result.length>0){
        
    let sql = `UPDATE accepted_solomissions SET Mission_Time = subtime(Mission_Time, '00:00:30') WHERE Mission_Time > '00:00:00';`;

    db.query(sql, (err, result)=> {
      if(err) throw err;
    })

      }
    })

}, 30000);



//______________________________________________________________
//Gets and Posts start here



//_______________________________________________________________
//Register Post !!(also populate default resources.)!!!

app.post('/Register', (req, res)=> {

  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;


  let sql = `SELECT * FROM player WHERE  Name = '${username}';`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    
    if (result.length > 0) {
      res.send(result);
    }
    else {

      let sql = `INSERT INTO player (Name, Password, Email) VALUES ('${username}', '${password}', '${email}');`;

     db.query(sql, (err, result)=> {
     if (err) throw err;

    if (result.affectedRows == 1){
      
      let sql = `SELECT Player_Id FROM player WHERE Name='${username}';`
       
      db.query(sql, (err, result)=> {
        if (err) throw err;
        res.send(result);
        let playerId = result[0].Player_Id;

        let sql = `INSERT INTO player_resources (Money, Water, Ore, People, Max_People, Max_Ore, Max_Water, Player_Id) VALUES ('200', '200', '200', '25', '100', '1000', '1000', '${result[0].Player_Id}' ) ; `

          db.query(sql, (err, result)=> {
            if (err) throw err;
           

            let sql = `INSERT INTO ship_fleet (Ship_on_Mission, Ship_UnderRepair, Ship_Health, Ship_UnderConstruction, Player_Id, Spaceships_Id) VALUES ('0', '0', '100', '0', '${playerId}', '5') ;`
            
            db.query(sql, (err, result)=> {
              if (err) throw err;
              console.log(result);

              let sql = `SELECT DISTINCT Solo_Missions_Id FROM solo_missions WHERE Rank=1 ORDER BY RAND() LIMIT 5;`;

              db.query(sql, (err, result) => {
                if (err) throw err;
                console.log(result);

                let Mission1 = result[0].Solo_Missions_Id;
                let Mission2 = result[1].Solo_Missions_Id;
                let Mission3 = result[2].Solo_Missions_Id;
                let Mission4 = result[3].Solo_Missions_Id;
                let Mission5 = result[4].Solo_Missions_Id;

                let sql = `INSERT INTO player_missions (Player_Id, Mission1, Mission2, Mission3, Mission4, Mission5) VALUES('${playerId}', '${Mission1}', '${Mission2}', '${Mission3}', '${Mission4}', '${Mission5}');`;

                db.query(sql, (err, result)=> {
                  if (err) throw err;
                  //res.send(result);
                })

              })

          })
        })
      })
    }
  })
    }
  })
})



//___________________________________________________________
// Login Post

app.post('/Login', (req, res)=> {

  let username = req.body.username;
  let password = req.body.password;
 

  let sql = `SELECT * FROM player WHERE Name='${username}' AND Password='${password}';`;

  db.query(sql, (err, result)=> {     
    if (err) throw err;
    

    if (result.length<1){    //if user exists not
      
      res.send(result);
      

        } else res.send(result);  
     
     console.log('new playerId sent to client');
  })
});







//______________________________________________________________
//Get Player Resources
app.get('/getPlayerResources/:playerId', (req, res)=> {
  let playerId = req.params.playerId
  
  let sql = `SELECT Money, Water, Ore, People, Max_People, Max_Ore, Max_Water FROM player_resources WHERE Player_Id = ${playerId};`;

  db.query(sql, (err, result)=> {
    if(err) throw err;

    res.send(result);
  })
})



//get player Rank
app.get('/getPlayerRank/:playerId', (req, res)=> {
 
  let playerId = req.params.playerId;
  let sql = `SELECT Rank, In_Game_Date FROM player WHERE Player_Id = ${playerId};`;
  
  db.query(sql, (err, result)=> {
    if (err) throw err;
    res.send(result);
  })
})


//Get Player Ships
app.get('/getPlayerShips/:playerId', (req, res)=> {
  let playerId = req.params.playerId
  
  let sql = `SELECT * FROM ship_fleet WHERE Player_Id = ${playerId};`;

  db.query(sql, (err, result)=> {
    if(err) throw err;

    
    res.send(result);
  })
})



//Get Solo Player Missions
app.get('/getPlayerMissions/:playerId', (req, res)=> {
  let playerId = req.params.playerId;

  let sql= `SELECT Mission1, Mission2, Mission3, Mission4, Mission5 FROM player_missions WHERE Player_Id = ${playerId};`;

  db.query(sql, (err, result)=> {
    if(err) throw err;
   
    if(result.length>0){

      let Missions = [result[0].Mission1, result[0].Mission2, result[0].Mission3, result[0].Mission4, result[0].Mission5]
      

      //let sql = `SELECT * FROM solo_missions WHERE Solo_Missions_Id = ${result[0].Mission1} OR Solo_Missions_Id = ${result[0].Mission2} OR Solo_Missions_Id = ${result[0].Mission3} OR Solo_Missions_Id = ${result[0].Mission4} OR Solo_Missions_Id = ${result[0].Mission5};`
      let sql = `SELECT * FROM solo_missions WHERE Solo_Missions_Id = ${Missions[0]} OR Solo_Missions_Id = ${Missions[1]} OR Solo_Missions_Id = ${Missions[2]} OR Solo_Missions_Id = ${Missions[3]} OR Solo_Missions_Id = ${Missions[4]}
                 ORDER BY CASE WHEN Solo_Missions_Id = ${Missions[0]} THEN '1' 
                               WHEN Solo_Missions_Id = ${Missions[1]} THEN '2'
                               WHEN Solo_Missions_Id = ${Missions[2]} THEN '3'
                               WHEN Solo_Missions_Id = ${Missions[3]} THEN '4'
                               WHEN Solo_Missions_Id = ${Missions[4]} THEN '5'
                               ELSE NAME END ASC`;


      db.query(sql, (err, result)=> {
        if(err) throw err;
        res.send(result);
      })
    }
  })
})



//get soloMission respawn timer
app.get('/getRespawnTimer/:playerId', (req, res)=> {
  let playerId = req.params.playerId;

  let sql = `SELECT RespawnMissionTime FROM player_missions WHERE Player_Id = ${playerId};`;

  db.query(sql, (err, result)=> {
    if(err) throw err;
    res.send(result);
    
  })
})





//get Running Missions from DB
app.get('/getRunningMissions/:playerId', (req, res)=> {
  let playerId = req.params.playerId;

  let sql = `SELECT * FROM accepted_solomissions WHERE Player_Id=${playerId} AND Mission_Time > '00:00:00';`;

  db.query(sql, (err, result)=> {
    if(err) throw err;
    res.send(result);
  })
});





//Update player resources after accepted solo mission
app.post('/updatePlayerResources', (req, res)=> {
  
  let Player_Id = req.body.Player_Id;
  let Money = req.body.Money;
  let Water = req.body.Water;
  let Ore = req.body.Ore;
  let People = req.body.People;

  let sql = `UPDATE player_resources SET Money=${Money}, Water=${Water}, Ore=${Ore}, People=${People} WHERE Player_Id=${Player_Id}; `;

  db.query(sql, (err, result)=> {
    if(err) throw err;
    res.send(result);
  })

})


//Update Accepted Missions of Player, when Mission was accepted
app.post('/updateAcceptedMissions', (req, res)=> {
  
  let Player_Id = req.body.Player_Id;
  let Mission_Id = req.body.Mission_Id;
  let Ship_Fleet_ID = req.body.Ship_Fleet_ID;
  

  let sql = `SELECT Time from solo_missions WHERE Solo_Missions_Id = ${Mission_Id};`;

  db.query(sql, (err, result)=> {
    if(err) throw err;

    let time = result[0].Time; 
    
    let sql = `INSERT INTO accepted_solomissions (Player_Id, Solo_Mission_Id, Mission_Time, Ship_Fleet_ID) VALUES (${Player_Id}, ${Mission_Id}, '${time}', ${Ship_Fleet_ID});`

    db.query(sql, (err, result)=> {
      if(err) throw err;
      res.send(result);
           
    })
  })
})





//Update Ship Fleet, when Mission was accepted
app.post('/updateShipFleet', (req, res)=> {

  let Ship_Fleet_ID = req.body.Ship_Fleet_ID;

  let sql = `UPDATE ship_fleet SET Ship_on_Mission = 1 WHERE Ship_Fleet_ID = ${Ship_Fleet_ID};`;

  db.query(sql, (err, result)=> {
    if(err) throw err;
    res.send(result);
  })

})





//Get completed missions from accepted_solomissions (fired by client every 30 seconds)

app.post('/getCompletedMissions', (req, res)=> {

  let playerId = req.body.playerId;

  let sql = `SELECT * FROM accepted_solomissions WHERE Player_Id = ${playerId} AND Mission_Time = '00:00:00' AND Confirmation_Sent_To_Player = 0;`;

  db.query(sql, (err, result)=> {
    if (err) throw err;

    if (result.length>0){

      //put it into these arrays
      let completedMissions = [];
      let Ship_Fleet_IDs = [];

      for (let i=0; i<result.length; i++){
        completedMissions.push(result[i]);
        Ship_Fleet_IDs.push(result[i].Ship_Fleet_ID);
      }


      //get the mission inputs and rewards
      let sql = `SELECT * FROM solo_missions WHERE Solo_Missions_Id = ${completedMissions[0].Solo_Mission_Id};`;

      db.query(sql, (err, result)=> {
        if (err) throw err;
       
        //give player the rewards of the completed mission && set ship back to not on a mission in ship_fleet
        let sql = `UPDATE player_resources SET Money = Money + ${result[0].Reward_Money}, Water= Water+${result[0].Reward_Water}, Ore= Ore+${result[0].Reward_Ore}, People= People + ${result[0].Reward_People} WHERE Player_Id=${playerId};
                   `;
        
      db.query(sql, (err, result)=> {
          if (err) throw err;

          let sql = `UPDATE ship_fleet SET Ship_on_Mission = 0 WHERE Player_Id= ${playerId} AND Ship_Fleet_ID = ${Ship_Fleet_IDs[0]};`; 

          db.query(sql, (err, result)=> {
            if (err) throw err;

            let sql = `UPDATE accepted_solomissions SET Confirmation_Sent_To_Player = 1 WHERE Player_Id= ${playerId} AND Ship_Fleet_ID = ${Ship_Fleet_IDs[0]};`
            db.query(sql, (err, result)=> {
              if (err) throw err;
              res.send({message: 'mission completed successfully'});
              console.log('mission completed successfully');
            })
          })
            
          })

      })
    }
    else res.send(result);
  })
})




//Get Multiplayer Missions!
app.get('/getMMissions', (req, res)=> {

  let sql = 'SELECT * FROM multiplayer_missions;';

  db.query(sql, (err, result)=> {
    if (err) throw err;
    res.send(result);
  })

})




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




//Server listening is always on the bottom!
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })