var playerchoice = "r";
var cpuchoice = "s";

if (playerchoice == "r" && cpuchoice =="p"){
    console.log("CPU won because paper beat rock")
}

if (playerchoice == "r" && cpuchoice =="s"){
    console.log("Player won because rock beat scissor")
}

if (playerchoice == cpuchoice){
    console.log("It's a draw")
}

if (playerchoice == "p" && cpuchoice =="s"){
    console.log("CPU won because scissor beat paper")
}

 if (playerchoice == "p" && cpuchoice =="r"){
    console.log("Player won because paper beat rock")
}
  
if (playerchoice == "s" && cpuchoice =="p"){
    console.log("Player won because scissor beat paper")
}

if (playerchoice == "s" && cpuchoice =="r"){
    console.log("CPU won because rock beat scissor")
}
