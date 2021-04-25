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


//Gets and Posts start here


// Login Post

app.post('/Login', (req, res)=> {

  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;

  let sql = `SELECT * FROM player WHERE Name='${username}';`;

  db.query(sql, (err, result)=> {
    if (err) throw err;
    

    if (result.length<1){
      
      let sql = `INSERT INTO player (Name, Password, Email) VALUES ('${username}', '${password}', '${email}');`;

      db.query(sql, (err, result)=> {
        if (err) throw err;

        console.log('register player', result.affectedRows);

        if (result.affectedRows == 1){
          
          let sql = `SELECT Player_Id FROM player WHERE Name='${username}';`

          db.query(sql, (err, result)=> {
            if (err) throw err;
            console.log('result PlayerId '+result[0].Player_Id);
            res.send(result);
          })

          
        }
      })
     }  else res.send(result);

     console.log('new playerId sent to client');
  })
});








//Server listening is always on the bottom!
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })