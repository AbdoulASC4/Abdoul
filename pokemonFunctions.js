var letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M"
,"N","O","P","Q","R","S","T","U","W","X","Y","Z"]

function randLetters() {
    console.log(letter[Math.round(Math.random()*letter.length-1)])
    var randLetters = letter[Math.round(Math.random()*letter.length-1)]
    return randLetters()
} 

randLetters ();