
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
  drawSoloMissions();
  noLoop();
  console.log(cur_status);
  
  
}




