function BasketballPlayer(
    name,team,height,position,number,networth,isGood,pastteam){
    this.name = name
    this.team = team
    this.height = height
    this.position = position
    this.number = number
    this.networth = networth
    this.pastteam = pastteam
    this.isGood = isGood
}

var shaq =  new BasketballPlayer("Shaquille O'neal", "Celtics",
"7'1\"", "Center", 36, 100000000,true,
["Magic","Lakers","Heat","Sun","Cavaliers"] );

console.log(shaq);

var bron = new BasketballPlayer("Lebron James","Cavs","6'8\"",
"Small Forward", 23,100000000, true, ["Heat"];)

bron.pastteam.push(bron.team)
bron.team = ["Warriors"]