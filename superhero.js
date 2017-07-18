function Superhero(realName,ability,gender,archEnemy,age,weakness ) {
    this.realName = realName
    this.ability = ability
    this.gender = gender
    this.archEnemy = archEnemy
    this.age = age
    this.weakness = weakness

    this.talk = function(){
        console.log("Yo! My name is " + realName );
    }

    this.callforhelp = function(call) {
        console.log(call);
    }
}


var wonderwoman = new Superhero("Dianna Prince", "Super Strength", "Female", "Donald Trump",20,"Guns");

console.log(wonderwoman);

var superman = new Superhero("Clark Kent","Dat Money","Male","Lux Luger",30,"Kryptonite")

superman.ability = "laser vision";
console.log(superman);

wonderwoman.archEnemy = superman.realName

console.log(wonderwoman)

wonderwoman.callforhelp("I'm booling out!");

superman.callforhelp("It's not lokking good right now!");