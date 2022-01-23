function playCraps() {
    //roll the dice
    var die1;
    die1 = Math.ceil(Math.random() * 5);
    document.getElementById("die1Results").innerHTML = "Die One: " + die1;
    var die2;
    die2 = Math.ceil(Math.random() * 3);
    //show the value
    document.getElementById("die2Results").innerHTML = "Die Two: " + die2;
    //add the values of the two dice
    var diesum;
    diesum = die1 + die2;
    //display the values of the two dice
    document.getElementById("dieSum").innerHTML = "The sum of your dice is: " + diesum;
    //craps occurred
    if ((diesum == 2) || (diesum == 8)) {
        //losing message    
        document.getElementById("crapsResults").innerHTML = "Craps! You Lose!";
    } else if ((die1 == die2) && (die2 % 2 == 0)) {
        document.getElementById("crapsResults").innerHTML = "Hurray! Doubles! You win!";
        //encouraging message
    } else {
        document.getElementById("crapsResults").innerHTML = "Keep Trying. You'll win next time!";
    }

}