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
//Gets and Posts start here








//_______________________________________________________________
//Register Post !!1(also populate default resources.)!!!

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

        let sql = `INSERT INTO player_resources (Money, Water, Ore, People, Max_People, Max_Ore, Max_Water, Player_Id) VALUES ('1000', '1000', '1000', '100', '100', '1000', '1000', '${result[0].Player_Id}' ) ; `

          db.query(sql, (err, result)=> {
            if (err) throw err;
           

            let sql = `INSERT INTO ship_fleet (Ship_on_Mission, Ship_UnderRepair, Ship_Health, Ship_UnderConstruction, Player_Id, Spaceships_Id) VALUES ('0', '0', '100', '0', '${playerId}', '5') ;`
            
            db.query(sql, (err, result)=> {
              if (err) throw err;
              console.log(result);

              let sql = `SELECT Solo_Missions_Id FROM solo_missions WHERE Rank=1 ORDER BY RAND() LIMIT 5;`;

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

  db.query(sql, (err, result)=> {     // add if statement for duplicate usernames!
    if (err) throw err;
    

    if (result.length<1){    //if user exists not
      
      res.send(result);
      //alert message: this user doesnt exist --> please register.

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

    console.log(result);
    res.send(result);
  })
})



//get player Rank
app.get('/getPlayerRank/:playerId', (req, res)=> {
 
  let playerId = req.params.playerId;
  let sql = `SELECT Rank, In_Game_Date FROM player WHERE Player_Id = ${playerId};`;
  
  db.query(sql, (err, result)=> {
    if (err) throw err;
    console.log(result);
    res.send(result);
  })
})


//Get Player Ships
app.get('/getPlayerShips/:playerId', (req, res)=> {
  let playerId = req.params.playerId
  
  let sql = `SELECT Spaceships_Id FROM ship_fleet WHERE Player_Id = ${playerId};`;

  db.query(sql, (err, result)=> {
    if(err) throw err;

    console.log(result);
    res.send(result);
  })
})



//Get Solo Player Missions
app.get('/getPlayerMissions/:playerId', (req, res)=> {
  let playerId = req.params.playerId;

  let sql= `SELECT Mission1 FROM player_missions WHERE Player_Id = ${playerId};`;

  db.query(sql, (err, result)=> {
    if(err) throw err;
    console.log(result);

    if(result.length>0){

      let sql = `SELECT * FROM solo_missions WHERE Solo_Missions_Id = ${result[0].Mission1};`

      db.query(sql, (err, result)=> {
        if(err) throw err;
        res.send(result);
      })
    }
  })
})






//Server listening is always on the bottom!
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })