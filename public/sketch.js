
function preload(){


}



function setup() {
  createCanvas(windowWidth, windowHeight);
  loginScreen();
  

  
}



function draw() {
  drawResourceValues();
  draw_Shipfleet();
  
  
  noLoop();
  console.log(cur_status);
  
  
}




