let shipclr;

//ships
    loadJSON('/getPlayerShips/'+playerId, (dataReceived)=> {
      shipId = dataReceived[0].SpaceshipsID;
      console.log(dataReceived);
      loop(); 
    }) 

    if (shipId == 3){
        shipclr="#EC221C"
    }else if (shipId == 4){
        shipclr="#13F408"
    }else if (shipId == 5){
        shipclr="#08E2F4"
    }else if (shipId == 6){
        shipclr="#B008F4"
    }