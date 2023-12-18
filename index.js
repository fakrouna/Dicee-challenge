var randomNumber1= Math.floor((Math.random() *6 +1));
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice"+randomNumber1+".png");


var randomNumber2= Math.floor((Math.random() *6 +1));
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice"+randomNumber2+".png");






function findTitle(n1,n2){

    if ( n1 === null ){return "Refresh";}

    if(n1>n2){ return "Player 1 Wins";}
    else if(n2>n1){return "player 2 Wins";}
    else if(n1==n2) {return "Draw !";}
}

document.getElementsByTagName("h1")[0].innerHTML = findTitle(randomNumber1,randomNumber2);

    

