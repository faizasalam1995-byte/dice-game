function rollDice(){

let player1 = Math.floor(Math.random()*6) + 1;
let player2 = Math.floor(Math.random()*6) + 1;

document.getElementById("dice1").textContent = getDice(player1);
document.getElementById("dice2").textContent = getDice(player2);

let result = document.getElementById("result");

if(player1 > player2){
    result.innerText = "🏆 Player 1 Wins!";
}
else if(player2 > player1){
    result.innerText = "🏆 Player 2 Wins!";
}
else{
    result.innerText = "🤝 It's a Draw!";
}
}

function getDice(num){
    if(num === 1) return "⚀";
    if(num === 2) return "⚁";
    if(num === 3) return "⚂";
    if(num === 4) return "⚃";
    if(num === 5) return "⚄";
    if(num === 6) return "⚅";
}