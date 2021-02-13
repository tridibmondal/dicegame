var random1=Math.floor(Math.random() * 6) + 1;
var randomDiceImage= "dice" + random1 + ".png";
var randomImagSouce= "images/" + randomDiceImage;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagSouce);

var random2=Math.floor(Math.random() *6) + 1;
var randomImageSource2= "images/dice" + random2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(random1>random2){
  document.querySelector("h1").innerHTML=" Player 1 Wins"
}
else if(random2>random1)
{
  document.querySelector("h1").innerHTML=" Player 2 Wins"
}
else {
  document.querySelector("h1").innerHTML=" Draw"
}
