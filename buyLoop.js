var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
//var n = prompt('How many more times? ');

var money = 1000

var louisVuittonDufflebag=[];

while(money>100){
    console.log("You have $" + money + "left")
    var answer = prompt("You can buy yeezy's for 400, gucci flip flops, or ray bans for 100")
        
        if(answer.toLowerCase == "yeezys" && money >= 500){
            money = money - 400;
            louisVuittonDufflebag.push("Yeezys");
            console.log("you have successfuly bought this pair yeezy");
        }
        
        else if(answer == "Gucci Flip Flop" && money>= 300){
            money = money - 200;
            louisVuittonDufflebag.push("Gucci Flip Flop;")
            console.log("you have successfuly bought this pair gucci flip flop");
        }

        else if(answer == "Ray Bans"&& money>=200){
            money = money - 100
            louisVuittonDufflebag.push("Ran Bans")
            console.log("you have successfuly bought this pair ray bans");
        }   

        else{
            console.log("You can't get this itam");
        }

        console.log("Leave,you're broke ! ")

}










