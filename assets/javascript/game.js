var crystals = {

    0: {value: 0},

    1: {value: 0},

    2: {value: 0},

    3: {value: 0}


}

var goal = 0;
var currentScore = 0;
var crystalVal = 0;
var wins = 0;
var losses = 0;

function startGame() {

    goal = Math.floor(Math.random() * 102) + 19;
    currentScore = 0;

    $("#goal").text(goal);
    $("#currentScore").text(currentScore);

      
   for (var i=0; i<4; i++){
        
    var target = crystals[i];
    target.value = Math.floor(Math.random() * 12) + 1;
    console.log(target.value);

    $("#crystal-0").attr("value", crystals[0].value);
    $("#crystal-1").attr("value", crystals[1].value);
    $("#crystal-2").attr("value", crystals[2].value);
    $("#crystal-3").attr("value", crystals[3].value);
    
   

}
}