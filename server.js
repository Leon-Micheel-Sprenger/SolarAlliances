const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();
const port = 3000;
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(express.static("public"));

// parse application/x-www-form-urlencoded --> we need this to encrypt the data coming from the httpPost in the script
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// connect to database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "solaralliances",
  port: "8889",
});

db.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + db.threadId);
});

//______________________________________________________________
//______________________________________________________________
//Other server logic

//______________________________________________________________
//Reset Mission Respawn Time to 5 min after the server starts
setTimeout(function () {
  let sql = `UPDATE player_missions SET RespawnMissionTime = '00:05:00';`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("reset mission respawn time");
  });
}, 100);

//_______________________________________________________________
//update Solo missions every 5 minutes (a new Mission is coming on top and all others are shifted down)
setInterval(function () {
  //get mission ids from player_missions:

  let sql = `SELECT * FROM player_missions
             INNER JOIN player ON player_missions.Player_Id = player.Player_Id;`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    //here you could use a for loop to make it for all players at the same time

    for (let i = 0; i < result.length; i++) {
      let Missions = [
        result[i].Mission1,
        result[i].Mission2,
        result[i].Mission3,
        result[i].Mission4,
        result[i].Mission5,
      ];
      let playerId = result[i].Player_Id;
      let rank = result[i].Rank;

      let sql = `SELECT Solo_Missions_Id FROM solo_missions WHERE Rank=${rank} AND NOT Solo_Missions_Id IN (${Missions[0]}, ${Missions[1]}, ${Missions[2]}, ${Missions[3]}, ${Missions[4]} ) ORDER BY RAND() LIMIT 1`;

      db.query(sql, (err, result) => {
        if (err) throw err;
        let newMissionId = result[0].Solo_Missions_Id;

        let sql = `UPDATE player_missions SET Mission1=${newMissionId}, Mission2=${Missions[0]}, Mission3=${Missions[1]}, Mission4=${Missions[2]}, Mission5=${Missions[3]} WHERE Player_Id=${playerId};`;

        db.query(sql, (err, result) => {
          if (err) throw err;

          //set respawn time value back to 5min!
          let sql = `UPDATE player_missions SET RespawnMissionTime = '00:05:00';`;

          db.query(sql, (err, result) => {
            if (err) throw err;
          });
        });
      });
    }
  });
  console.log("updated solo missions");
}, 300000);

//Deduct 10 seconds from the mission respawn timer
setInterval(function () {
  //select time value.
  let sql = `SELECT RespawnMissionTime FROM player_missions WHERE RespawnMissionTime > '00:00:00';`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    //if above 0, decrease
    let sql = `UPDATE player_missions SET RespawnMissionTime = subtime(RespawnMissionTime, '00:00:10') WHERE   RespawnMissionTime >= '00:00:30';`;

    db.query(sql, (err, result) => {
      if (err) throw err;
    });
  });
}, 10000);

//_____________________________________________________________
// Deduct 30 seconds from all running solo missions (accepted missions), every 30 seconds.
setInterval(function () {
  let sql = `Select * from accepted_solomissions`;

  db.query(sql, (err, result) => {
    if (result.length > 0) {
      let sql = `UPDATE accepted_solomissions SET Mission_Time = subtime(Mission_Time, '00:00:30') WHERE Mission_Time > '00:00:00';`;

      db.query(sql, (err, result) => {
        if (err) throw err;
      });
    }
  });
}, 30000);

//_____________________________________________________________
// Deduct 30 seconds from all running multiplayer missions (accepted missions), every 30 seconds.
setInterval(function () {
  let sql = `Select * from accepted_multiplayer_missions`;

  db.query(sql, (err, result) => {
    if (result.length > 0) {
      let sql = `UPDATE accepted_multiplayer_missions SET Mission_Time = subtime(Mission_Time, '00:00:30') WHERE Mission_Time > '00:00:00' AND Status = 1;`;

      db.query(sql, (err, result) => {
        if (err) throw err;
      });
    }
  });
}, 30000);

//_____________________________________________________________
//Autogenerate people for players every 5 minutes
setInterval(function () {
  let sql = `Update player_resources 
             Join player on player_resources.Player_Id = player.Player_Id
             Set People = People + 10
             Where Max_People >= People + 10 ;`;

  db.query(sql, (err, result) => {
    if (err) throw err;
  });
}, 300000);

//______________________________________________________________
//Gets and Posts start here

//_______________________________________________________________
//Register Post !!(also populate default resources.)!!!

app.post("/Register", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;

  bcrypt.hash(password, saltRounds, function (err, hash) {
    let sql = `SELECT * FROM player WHERE  Name = '${username}';`;

    db.query(sql, (err, result) => {
      if (err) throw err;

      if (result.length > 0) {
        res.send(result);
      } else {
        let sql = `INSERT INTO player (Name, Password, Email) VALUES ('${username}', '${hash}', '${email}');`;

        db.query(sql, (err, result) => {
          if (err) throw err;

          if (result.affectedRows == 1) {
            let sql = `SELECT Player_Id FROM player WHERE Name='${username}';`;

            db.query(sql, (err, result) => {
              if (err) throw err;
              res.send(result);
              let playerId = result[0].Player_Id;

              let sql = `INSERT INTO player_resources (Money, Water, Ore, People, Max_People, Max_Ore, Max_Water, Player_Id) VALUES ('200', '150', '150', '25', '100', '300', '300', '${result[0].Player_Id}' ) ; `;

              db.query(sql, (err, result) => {
                if (err) throw err;

                let sql = `INSERT INTO ship_fleet (Ship_on_Mission, Player_Id, Spaceships_Id) VALUES ('0', '${playerId}', '5') ;`;

                db.query(sql, (err, result) => {
                  if (err) throw err;
                  console.log(result);

                  let sql = `SELECT DISTINCT Solo_Missions_Id FROM solo_missions WHERE Rank=1 ORDER BY RAND() LIMIT 5;`;

                  db.query(sql, (err, result) => {
                    if (err) throw err;

                    let Mission1 = result[0].Solo_Missions_Id;
                    let Mission2 = result[1].Solo_Missions_Id;
                    let Mission3 = result[2].Solo_Missions_Id;
                    let Mission4 = result[3].Solo_Missions_Id;
                    let Mission5 = result[4].Solo_Missions_Id;

                    let sql = `INSERT INTO player_missions (Player_Id, Mission1, Mission2, Mission3, Mission4, Mission5) VALUES('${playerId}', '${Mission1}', '${Mission2}', '${Mission3}', '${Mission4}', '${Mission5}');`;

                    db.query(sql, (err, result) => {
                      if (err) throw err;
                      //res.send(result);
                    });
                  });
                });
              });
            });
          }
        });
      }
    });
  });
});

//___________________________________________________________
// Login Post

app.post("/Login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let sql = `SELECT Password FROM player WHERE Name = '${username}';`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    if (result.length > 0) {
      hash = result[0].Password;

      bcrypt.compare(password, hash, function (err, result) {
        if (result === true) {
          let sql = `SELECT * FROM player WHERE Name='${username}' AND Password='${hash}';`;

          db.query(sql, (err, result) => {
            if (err) throw err;

            if (result.length < 1) {
              //if user exists not

              res.send(result);
            } else res.send(result);

            console.log("new playerId sent to client");
          });
        } else if (result === false) {
          res.send({ message: "Wrong password" });
        }
      });
    } else {
      res.send({ message: "Wrong password" });
    }
  });
});

//______________________________________________________________
//Get Player Resources
app.get("/getPlayerResources/:playerId", (req, res) => {
  let playerId = req.params.playerId;

  let sql = `SELECT Money, Water, Ore, People, Max_People, Max_Ore, Max_Water FROM player_resources WHERE Player_Id = ${playerId};`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});

//get player Rank
app.get("/getRank/:playerId", (req, res) => {
  let playerId = req.params.playerId;
  let sql = `SELECT Rank, In_Game_Date FROM player WHERE Player_Id = ${playerId};`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//Get Player Ships
app.get("/getPlayerShips/:playerId", (req, res) => {
  let playerId = req.params.playerId;

  let sql = `SELECT * FROM ship_fleet WHERE Player_Id = ${playerId};`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});

//Get Station Upgardes
app.get("/getStationUpgrades", (req, res) => {
  let sql = `SELECT * FROM space_station`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});

//Get spaceships Costs
app.get("/getSpaceShipsCosts", (req, res) => {
  let sql = `SELECT Input_Crew, Input_Ore, Spaceships_Id FROM spaceships`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});

//Get Solo Player Missions
app.get("/getPlayerMissions/:playerId", (req, res) => {
  let playerId = req.params.playerId;

  let sql = `SELECT Mission1, Mission2, Mission3, Mission4, Mission5, RespawnMissionTime FROM player_missions WHERE Player_Id = ${playerId};`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    if (result.length > 0) {
      let RespawnTime = result[0].RespawnMissionTime;
      let Missions = [
        result[0].Mission1,
        result[0].Mission2,
        result[0].Mission3,
        result[0].Mission4,
        result[0].Mission5,
      ];

      //let sql = `SELECT * FROM solo_missions WHERE Solo_Missions_Id = ${result[0].Mission1} OR Solo_Missions_Id = ${result[0].Mission2} OR Solo_Missions_Id = ${result[0].Mission3} OR Solo_Missions_Id = ${result[0].Mission4} OR Solo_Missions_Id = ${result[0].Mission5};`
      let sql = `SELECT * FROM solo_missions WHERE Solo_Missions_Id = ${Missions[0]} OR Solo_Missions_Id = ${Missions[1]} OR Solo_Missions_Id = ${Missions[2]} OR Solo_Missions_Id = ${Missions[3]} OR Solo_Missions_Id = ${Missions[4]}
                 ORDER BY CASE WHEN Solo_Missions_Id = ${Missions[0]} THEN '1' 
                               WHEN Solo_Missions_Id = ${Missions[1]} THEN '2'
                               WHEN Solo_Missions_Id = ${Missions[2]} THEN '3'
                               WHEN Solo_Missions_Id = ${Missions[3]} THEN '4'
                               WHEN Solo_Missions_Id = ${Missions[4]} THEN '5'
                               ELSE NAME END ASC`;

      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send({ result: result, RespawnTime: RespawnTime });
      });
    }
  });
});

//get soloMission respawn timer
app.get("/getRespawnTimer/:playerId", (req, res) => {
  let playerId = req.params.playerId;

  let sql = `SELECT RespawnMissionTime FROM player_missions WHERE Player_Id = ${playerId};`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//get Running Missions from DB
app.get("/getRunningMissions/:playerId", (req, res) => {
  let playerId = req.params.playerId;

  let sql = `SELECT * FROM accepted_solomissions a
  INNER JOIN solo_missions b ON a.Solo_Mission_Id = b.Solo_Missions_Id
  WHERE Player_Id=${playerId} AND Mission_Time > '00:00:00';`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//Update player resources after accepted solo mission
app.post("/updatePlayerResources", (req, res) => {
  let Player_Id = req.body.Player_Id;
  let Money = req.body.Money;
  let Water = req.body.Water;
  let Ore = req.body.Ore;
  let People = req.body.People;

  let sql = `UPDATE player_resources SET Money=${Money}, Water=${Water}, Ore=${Ore}, People=${People} WHERE Player_Id=${Player_Id}; `;

  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send({ message: "Your Resources have been updated" });
    }
  });
});

//Update Accepted Solo Missions of Player, when Mission was accepted
app.post("/updateAcceptedMissions", (req, res) => {
  let Player_Id = req.body.Player_Id;
  let Mission_Id = req.body.Mission_Id;
  let Ship_Fleet_ID = req.body.Ship_Fleet_ID;

  let sql = `SELECT Time from solo_missions WHERE Solo_Missions_Id = ${Mission_Id};`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    let time = result[0].Time;

    let sql = `INSERT INTO accepted_solomissions (Player_Id, Solo_Mission_Id, Mission_Time, Ship_Fleet_ID) VALUES (${Player_Id}, ${Mission_Id}, '${time}', ${Ship_Fleet_ID});`;

    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
});

//Update Accepted Multiplayer Missions of Player, when Mission was accepted
app.post("/updateAcceptedMultiplayerMissions", (req, res) => {
  let Player_Id = req.body.Player_Id;
  let Mission_Id = req.body.MMissions_Id;
  let Ship_Fleet_ID = req.body.Ship_Fleet_ID;

  let sql = `UPDATE multiplayer_missions
             SET Submitted_Ore = Submitted_Ore + Minimum_Ore, Submitted_Water = Submitted_Water + Minimum_Water, Submitted_People = Submitted_People + Minimum_People, Submitted_Money = Submitted_Money + Minimum_Money, Submitted_Ships = Submitted_Ships + 1
             WHERE MMissions_Id = '${Mission_Id}';`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    let sql = `SELECT * FROM multiplayer_missions WHERE MMissions_Id = ${Mission_Id};`;

    db.query(sql, (err, result) => {
      if (err) throw err;

      let time = result[0].Time;

      let SubmittedArr = [
        result[0].Submitted_Money,
        result[0].Submitted_Ore,
        result[0].Submitted_People,
        result[0].Submitted_Water,
        result[0].Submitted_Ships,
      ];
      let InputArr = [
        result[0].Input_Money,
        result[0].Input_Ore,
        result[0].Input_People,
        result[0].Input_Water,
        result[0].Ship_amount,
      ];

      let sql = `INSERT INTO accepted_multiplayer_missions (Player_Id, amm_MMissions_Id, Mission_Time, Ship_Fleet_Id, Status) VALUES (${Player_Id}, ${Mission_Id}, '${time}', ${Ship_Fleet_ID}, 2);`;

      db.query(sql, (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
          //update status of accepted missions 1, when submitted resources are 100% of input resources!;
          let check;
          for (let i = 0; i < SubmittedArr.length; i++) {
            if (SubmittedArr[i] !== InputArr[i]) {
              check = false;
              break;
            } else {
              check = true;
            }
          }

          if (check === false) {
            res.send({ message: "Mission successfully accepted!" });
          } else if (check === true) {
            let sql = `UPDATE accepted_multiplayer_missions 
                     SET Status = 1 
                     WHERE amm_MMissions_Id = ${Mission_Id};`;

            db.query(sql, (err, result) => {
              if (err) throw err;

              if (result.affectedRows > 0) {
                res.send({ message: "Mission Accepted and Running !" });
                //message to all players, that mission has started???
              }
            });
          }
        }
      });
    });
  });
});

//Update Ship Fleet, when Mission was accepted
app.post("/updateShipFleet", (req, res) => {
  let Ship_Fleet_ID = req.body.Ship_Fleet_ID;
  let Player_Id = req.body.Player_Id;

  let sql = `UPDATE ship_fleet SET Ship_on_Mission = 1 WHERE Ship_Fleet_ID = ${Ship_Fleet_ID} AND Player_Id = ${Player_Id} ;`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send({
        message:
          "Commander, A ship from your Ship Fleet has been deployed to a mission",
      });
    }
  });
});

//Get completed missions from accepted_solomissions (fired by client every 30 seconds)
app.post("/getCompletedMissions", (req, res) => {
  let playerId = req.body.playerId;

  let sql = `SELECT * FROM accepted_solomissions WHERE Player_Id = ${playerId} AND Mission_Time = '00:00:00' AND Confirmation_Sent_To_Player = 0;`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    if (result.length > 0) {
      //put it into these arrays
      let completedMissions = [];
      let Ship_Fleet_IDs = [];

      for (let i = 0; i < result.length; i++) {
        completedMissions.push(result[i]);
        Ship_Fleet_IDs.push(result[i].Ship_Fleet_ID);
      }

      //get the mission inputs and rewards
      let sql = `SELECT * FROM solo_missions WHERE Solo_Missions_Id = ${completedMissions[0].Solo_Mission_Id};`;

      db.query(sql, (err, result) => {
        if (err) throw err;

        //give player the rewards of the completed mission && set ship back to not on a mission in ship_fleet
        let sql = `
        UPDATE player_resources
        SET Money = Money + ${result[0].Reward_Money}, 
         Water = CASE
              WHEN Max_Water >= Water+${result[0].Reward_Water} THEN Water + ${result[0].Reward_Water}
              ELSE Max_Water
              END,
         Ore = CASE 
          WHEN Max_Ore >= Ore+${result[0].Reward_Ore} THEN Ore + ${result[0].Reward_Ore}
              ELSE Max_Ore
              END,
         People = CASE
          WHEN Max_People >= People + ${result[0].Reward_People} THEN People + ${result[0].Reward_People}
              ELSE Max_People
              END
      WHERE Player_Id=${playerId};`;

        db.query(sql, (err, result) => {
          if (err) throw err;

          let sql = `UPDATE ship_fleet SET Ship_on_Mission = 0 WHERE Player_Id= ${playerId} AND Ship_Fleet_ID = ${Ship_Fleet_IDs[0]};`;

          db.query(sql, (err, result) => {
            if (err) throw err;

            let sql = `UPDATE accepted_solomissions SET Confirmation_Sent_To_Player = 1 WHERE Player_Id= ${playerId} AND Solo_Mission_Id = ${completedMissions[0].Solo_Mission_Id};`;
            db.query(sql, (err, result) => {
              if (err) throw err;
              res.send({
                message:
                  "Commander, a solo mission was completed successfully.",
              });
            });
          });
        });
      });
    } else res.send(result);
  });
});

//Get Multiplayer Missions!
app.get("/getMMissions", (req, res) => {
  let sql = "SELECT * FROM multiplayer_missions;";

  db.query(sql, (err, result) => {
    if (err) throw err;
    let MMissions = result;

    let sql = `SELECT * 
    FROM accepted_multiplayer_missions;`;

    db.query(sql, (err, result) => {
      if (err) throw err;
      let ammMMissions = result;

      res.send({ MMissions: MMissions, ammMMissions: ammMMissions });
    });
  });
});

//Get accepted Multiplayer Missions! /getRespawnTimer/:playerId'
app.get("/getAcceptedMMissions/:playerId", (req, res) => {
  let playerId = req.params.playerId;

  let sql = `SELECT  * FROM accepted_multiplayer_missions WHERE Player_Id = ${playerId} AND Status != 0;`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});

//Get completed multiplayer Missions (fired by client ping every 30 seconds.)
app.post("/getCompletedMultiplayerMissions", (req, res) => {
  let playerId = req.body.playerId;

  let sql = `SELECT * FROM accepted_multiplayer_missions WHERE Player_Id = ${playerId} AND Mission_Time = '00:00:00' AND Status = 1;`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    if (result.length > 0) {
      //put it into these arrays
      let completedMissions = [];
      let Ship_Fleet_IDs = [];

      for (let i = 0; i < result.length; i++) {
        completedMissions.push(result[i]);
        Ship_Fleet_IDs.push(result[i].Ship_Fleet_Id);
      }

      //get the mission inputs and rewards
      let sql = `SELECT * FROM multiplayer_missions WHERE MMissions_Id = ${completedMissions[0].amm_MMissions_Id};`;

      db.query(sql, (err, result) => {
        if (err) throw err;

        //give player the rewards of the completed mission && set ship back to not on a mission in ship_fleet
        let sql = `UPDATE player_resources
        SET Money = Money + ${result[0].Reward_Money}, 
         Water = CASE
              WHEN Max_Water >= Water+${result[0].Reward_Water} THEN Water + ${result[0].Reward_Water}
              ELSE Max_Water
              END,
         Ore = CASE 
          WHEN Max_Ore >= Ore+${result[0].Reward_Ore} THEN Ore + ${result[0].Reward_Ore}
              ELSE Max_Ore
              END,
         People = CASE
          WHEN Max_People >= People + ${result[0].Reward_People} THEN People + ${result[0].Reward_People}
              ELSE Max_People
              END
      WHERE Player_Id=${playerId}; `;

        db.query(sql, (err, result) => {
          if (err) throw err;

          let sql = `UPDATE ship_fleet SET Ship_on_Mission = 0 WHERE Player_Id= ${playerId} AND Ship_Fleet_ID = ${Ship_Fleet_IDs[0]};`;

          db.query(sql, (err, result) => {
            if (err) throw err;

            let sql = `UPDATE accepted_multiplayer_missions SET Status = 0 WHERE Player_Id= ${playerId} AND amm_MMissions_Id = ${completedMissions[0].amm_MMissions_Id};`;
            db.query(sql, (err, result) => {
              if (err) throw err;
              res.send({
                message:
                  "Commander, Your ships and crew have returned from a collaborative Mission!",
              });
              console.log("Collaborative mission completed successfully");
            });
          });
        });
      });
    } else res.send(result);
  });
});

//build war ship
app.post("/buildwarship", (req, res) => {
  let Player_Id = req.body.Player_Id;
  let Ore = req.body.Ore;
  let People = req.body.People;

  let sql = `INSERT INTO ship_fleet (Ship_on_Mission, Player_Id, Spaceships_Id) VALUES ('0', '${Player_Id}', '3');`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    let sql = `UPDATE player_resources SET Ore ='${Ore}', People ='${People}' WHERE Player_Id ='${Player_Id}';`;

    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
});

//build mining ship
app.post("/buildminingship", (req, res) => {
  let Player_Id = req.body.Player_Id;
  let Ore = req.body.Ore;
  let People = req.body.People;

  let sql = `INSERT INTO ship_fleet (Ship_on_Mission, Player_Id, Spaceships_Id) VALUES ('0', '${Player_Id}', '4');`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    let sql = `UPDATE player_resources SET Ore ='${Ore}', People ='${People}' WHERE Player_Id ='${Player_Id}';`;

    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
});

//build transport ship
app.post("/buildtransportship", (req, res) => {
  let Player_Id = req.body.Player_Id;
  let Ore = req.body.Ore;
  let People = req.body.People;

  let sql = `INSERT INTO ship_fleet (Ship_on_Mission, Player_Id, Spaceships_Id) VALUES ('0', '${Player_Id}', '5');`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    let sql = `UPDATE player_resources SET Ore ='${Ore}', People ='${People}' WHERE Player_Id ='${Player_Id}';`;

    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
});

//build exploration ship
app.post("/buildexplorationship", (req, res) => {
  let Player_Id = req.body.Player_Id;
  let Ore = req.body.Ore;
  let People = req.body.People;

  let sql = `INSERT INTO ship_fleet (Ship_on_Mission, Player_Id, Spaceships_Id) VALUES ('0', '${Player_Id}', '6');`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    let sql = `UPDATE player_resources SET Ore ='${Ore}', People ='${People}' WHERE Player_Id ='${Player_Id}';`;

    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
});

//___________________________________________________________________________________________________________________________
//station Upgardes

//build station upgrade dome 1
app.post("/builddome1", (req, res) => {
  let Player_Id = req.body.Player_Id;
  let Money = req.body.Money;
  let Rank = req.body.Rank;
  let Increase_People = req.body.Increase_People;

  let sql = `INSERT INTO player_upgrades (Player_Id, SSUpgrade_Id) VALUES ('${Player_Id}', '1');`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    let sql = `UPDATE player_resources SET Max_People = '${Increase_People}', Money = '${Money}' WHERE Player_Id = ${Player_Id};`;

    db.query(sql, (err, result) => {
      if (err) throw err;

      let sql = `UPDATE player SET Rank = '${Rank}' WHERE Player_Id = ${Player_Id};`;

      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    });
  });
});

//build station upgrade dome 2
app.post("/builddome2", (req, res) => {
  let Player_Id = req.body.Player_Id;
  let Money = req.body.Money;
  let Rank = req.body.Rank;
  let Increase_People = req.body.Increase_People;

  let sql = `INSERT INTO player_upgrades (Player_Id, SSUpgrade_Id) VALUES ('${Player_Id}', '2');`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    let sql = `UPDATE player_resources SET Max_People = '${Increase_People}', Money = '${Money}' WHERE Player_Id = ${Player_Id};`;

    db.query(sql, (err, result) => {
      if (err) throw err;

      let sql = `UPDATE player SET Rank = '${Rank}' WHERE Player_Id = ${Player_Id};`;

      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    });
  });
});

//build station upgrade dome 3
app.post("/builddome3", (req, res) => {
  let Player_Id = req.body.Player_Id;
  let Money = req.body.Money;
  let Rank = req.body.Rank;
  let Increase_People = req.body.Increase_People;

  let sql = `INSERT INTO player_upgrades (Player_Id, SSUpgrade_Id) VALUES ('${Player_Id}', '3');`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    let sql = `UPDATE player_resources SET Max_People = '${Increase_People}', Money = '${Money}' WHERE Player_Id = ${Player_Id};`;

    db.query(sql, (err, result) => {
      if (err) throw err;

      let sql = `UPDATE player SET Rank = '${Rank}' WHERE Player_Id = ${Player_Id};`;

      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    });
  });
});

//build station upgrade storage 1
app.post("/buildstorage1", (req, res) => {
  let Player_Id = req.body.Player_Id;
  let Money = req.body.Money;
  let Rank = req.body.Rank;
  let Increase_Water = req.body.Increase_Water;
  let Increase_Ore = req.body.Increase_Ore;

  let sql = `INSERT INTO player_upgrades (Player_Id, SSUpgrade_Id) VALUES ('${Player_Id}', '4');`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    let sql = `UPDATE player_resources SET Max_Ore = '${Increase_Ore}', Max_Water = '${Increase_Water}', Money = '${Money}' WHERE Player_Id = ${Player_Id};`;

    db.query(sql, (err, result) => {
      if (err) throw err;

      let sql = `UPDATE player SET Rank = '${Rank}' WHERE Player_Id = ${Player_Id};`;

      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    });
  });
});

//build station upgrade storage 2
app.post("/buildstorage2", (req, res) => {
  let Player_Id = req.body.Player_Id;
  let Money = req.body.Money;
  let Rank = req.body.Rank;
  let Increase_Water = req.body.Increase_Water;
  let Increase_Ore = req.body.Increase_Ore;

  let sql = `INSERT INTO player_upgrades (Player_Id, SSUpgrade_Id) VALUES ('${Player_Id}', '5');`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    let sql = `UPDATE player_resources SET Max_Ore = '${Increase_Ore}', Max_Water = '${Increase_Water}', Money = '${Money}' WHERE Player_Id = ${Player_Id};`;

    db.query(sql, (err, result) => {
      if (err) throw err;

      let sql = `UPDATE player SET Rank = '${Rank}' WHERE Player_Id = ${Player_Id};`;

      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    });
  });
});

//build station upgrade storage 3
app.post("/buildstorage3", (req, res) => {
  let Player_Id = req.body.Player_Id;
  let Money = req.body.Money;
  let Rank = req.body.Rank;
  let Increase_Water = req.body.Increase_Water;
  let Increase_Ore = req.body.Increase_Ore;

  let sql = `INSERT INTO player_upgrades (Player_Id, SSUpgrade_Id) VALUES ('${Player_Id}', '3');`;

  db.query(sql, (err, result) => {
    if (err) throw err;

    let sql = `UPDATE player_resources SET Max_Ore = '${Increase_Ore}', Max_Water = '${Increase_Water}', Money = '${Money}' WHERE Player_Id = ${Player_Id};`;

    db.query(sql, (err, result) => {
      if (err) throw err;

      let sql = `UPDATE player SET Rank = '${Rank}' WHERE Player_Id = ${Player_Id};`;

      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    });
  });
});

//Server listening is always on the bottom!
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
