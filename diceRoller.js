//This function will check if thehold box is checked, if it is, it will not roll the die
function rollDice(){
    if (document.getElementById("cbDie1").checked == false){
        document.getElementById("taDie1").value = Math.floor(Math.random()*6) + 1;
    }
    if (document.getElementById("cbDie2").checked == false){
        document.getElementById("taDie2").value = Math.floor(Math.random()*6) + 1;
    }
    if (document.getElementById("cbDie3").checked == false){
        document.getElementById("taDie3").value = Math.floor(Math.random()*6) + 1;
    }
    if (document.getElementById("cbDie4").checked == false){
        document.getElementById("taDie4").value = Math.floor(Math.random()*6) + 1;
    }
    if (document.getElementById("cbDie5").checked == false){
        document.getElementById("taDie5").value = Math.floor(Math.random()*6) + 1;
    }
}