
function preload(){


}



function setup() {
  createCanvas(windowWidth, windowHeight);
  loginScreen();
  //createGrid();


  
}



function draw() {
  drawResourceValues();
  drawGrid();
  
  noLoop();
  console.log(cur_status);
  
  
}




