//nest arry go by HP,Attack,Defence,Speed,Sp Attack,Sp Defence

var pokemonroster = ["Swampert",[100,110,90,60,85,90],
"Dragonite",[91,134,95,80,100,100,],"Zapdos",[90,90,85,100,125,90],
"Gengar",[60,65,60,110,130,75],"Silvally",[95,95,95,95,95,95]
"Sylveon"[95,65,65,110,130,60]]

function pokemon() {
    for (i = 0); i < 6; i++){
         console.log(var pokemonroster);
    }
    retern pokemon();
}

pokemon();