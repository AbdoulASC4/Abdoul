function rand(number){
  return Math.round(Math.random()*number)
}

rand(10);

console.log(rand(10))


var artists = ["FalloutBoy","Drake","21 Savege","Imagen Dragon","Painc"]

function randartists (){
    console.log(artists[Math.round(Math.random()*artists.length-1)])
}

for (var i=0; i<5; i++){
    randartists();
}

function rand(number){
    var randomDecimalNumber = Math.random()*number;
    console.log(randomDecimalNumber);

    var wholeIntergerNumber = Math.round(randomDecimalNumber)

    return wholeIntergerNumber
}

console.log(rand(6))