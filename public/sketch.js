

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createGame();
  loginScreen();

  
}

function draw() {
  
  noLoop();
  
  
}




function mousePressed(){
  if (loginBtn.isClicked(mouseX, mouseY)){
      console.log("click");
  }
}