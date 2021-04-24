//In here, you will find all function components, that are executing commands, pushing and pulling data to the server and more.


function mousePressed(){
    if (loginBtn.isClicked(mouseX, mouseY)){
        console.log("click login");

    } else console.log("error");
  

  if (registerBtn.isClicked(mouseX, mouseY)){
    console.log("click register");
} else console.log("error register");
}


