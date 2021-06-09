
function preload(){


}



function setup() {
  createCanvas(windowWidth, windowHeight);
  loginScreen();
  

  
}



function draw() {
  
  drawResourceValues();
  drawGrid();
  drawShips();
  drawMessages();
  drawSoloMissions();
  drawMultiplayerMissions();
  drawOpenMMission();
  drawContributionScene();

  noLoop();
  //console.log(cur_status);
  
  
}




