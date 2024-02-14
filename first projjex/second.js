function refreshMe(){

var randomNumber = Math.floor(Math.random()*6) + 1;
var randomImage = "images/dice" + randomNumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage);

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);


if(randomImage>randomImage2){
    document.querySelector("h1").innerHTML = "player 1 won terrific"
} else if(randomImage<randomImage2){
    document.querySelector("h1").innerHTML = "player 2 won Genius"
}else{
    document.querySelector("h1").innerHTML = "its a tie mhm both compititive"
}
}