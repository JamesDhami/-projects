var userName = prompt("Hey! What is your name?");

function checkName(check){
  if (check == "Marvelous"){
    alert("Welcome Marvelous");
  }
  else if (check == "Jimmy"){
    alert("Welcome Jimmy");
  }
  else{
    alert("Get Out");
  }
}

checkName(userName);

function myFunct(){
  var text = document.getElementById("main");
  console.log(text);
  text.style.color="#ff0000";
}

function myFunction2(){
  var text = document.getElementById("main");
  console.log(text);
  text.style.backgroundColor="#542583";
}
