// love page work
function refreshMe(){
var randomNumber = Math.floor(Math.random() *12 ) + 1;

var randomImage = "img/Love" + randomNumber + ".jpg";

document.querySelectorAll("img")[0].setAttribute("src", randomImage);
}

function calculateLove(){
    var randomLove = Math.floor(Math.random()*100) + 1;
    document.querySelector("#result").innerHTML = randomLove + " %";


    if (randomLove=== 100){
        document.querySelector("#result").innerHTML = randomLove + " %" + " kisses kisses, you should get married"
    } else if(randomLove > 90){
        document.querySelector("#result").innerHTML = randomLove + " %" + " love is so cute, keep it up"
    }else if(randomLove > 80){
        document.querySelector("#result").innerHTML = randomLove + " %" + " don't give up on love, you derseve each other "
    } else if (randomLove > 70){
        document.querySelector("#result").innerHTML = randomLove + " %" + " keep up the communication, there is still hope"
    } else if(randomLove  > 60){
        document.querySelector("#result").innerHTML = randomLove + " %" + " its okay, you will find a perfect match"
    } else if (randomLove > 50) {
        document.querySelector("#result").innerHTML = randomLove + " %" + " its okay, you will find a person"
    }else if(randomLove > 40){
        document.querySelector("#result").innerHTML = randomLove + " %" + " there is still a hope"
    }else{
        document.querySelector("#result").innerHTML = randomLove + " %" + " give up, you must be  a Manchester United fan you don't derseve happienss"
}

}

