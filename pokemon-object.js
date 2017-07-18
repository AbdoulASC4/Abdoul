function Pokemon(name,hp,attack,defense,speed,spattack,spdefense) {
   this.name = name
   this.hp = hp
   this.attack = attack
   this.defense = defense
   this.speed = speed
   this.spattack = spattack
   this.spdefense = spdefense  
}

var swamport =new Pokemon("Swampert",100,110,90,60,85,90);
var gengar = new Pokemon("Gengar",60,65,60,110,130,75);
var zapdos = new Pokemon("Zapdos",90,90,85,100,125,90);
var dragonite = new Pokemon("Dragonite",91,134,95,80,100,100);
var silvally = new Pokemon("Silvally",95,95,95,95,95,95);
var sylveon = new Pokemon("Sylveon",95,65,65,110,130,60);

var pokemon = [swamport,gengar,zapdos,dragonite,silvally,sylveon]; 

console.log(pokemon);

function printRoster(){
    
}