//Fonts:
let ftRetroGaming;
let ft8Bbit;



function preload(){
  ftRetroGaming = loadFont('assets/fonts/Retro-Gaming.ttf');
  ft8Bbit = loadFont('assets/fonts/8-bit-pusab.ttf');
  loadSounds();
  loadImages();

}



function setup() {
  createCanvas(windowWidth, windowHeight);
  loginScreen();
  
  bg = loadImage('assets/background.png');
  
  
  
}



function draw() {
 
  
  drawResourceValues();
  drawGrid();
  drawShips();
  drawMessages();
  drawSoloMissions();
  drawRunningMissions();
  drawMultiplayerMissions();
  drawOpenMMission();
  drawContributionScene();

  noLoop();
  //console.log(cur_status);
  
  
}




