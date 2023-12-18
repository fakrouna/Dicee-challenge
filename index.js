var randomNumber1= Math.floor((Math.random *6 +1))
const image1 = document.getElementsByClassName("img1")
image1.setAttribute("src", "images/dice"+randomNumber1.toString+".png")

var randomNumber2= Math.floor((Math.random *6 +1))
const image2 = document.getElementsByClassName("img2")
image2.setAttribute("src", "images/dice"+randomNumber2.toString+".png")





function findTitle(n1,n2){

    if ( n1 === null ){return "Refresh"}

    if(n1>n2){ return "Player 1 Wins"}
    else if(n2>n1){return "player 2 Wins"}
    else if(n1==n2) {return "Draw !"}
}

var title = document.getElementsByTagName("h1")[0]
title.innerHTML = findTitle(randomNumber1,randomNumber2)
    

