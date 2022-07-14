/* los textos donde se tiene que imprimir */
const player = document.getElementById("player")
const computer = document.getElementById("computer")
const result = document.getElementById("result")
/* los botones con los valores que se tienen que imprimir */
const rock = document.getElementById("rock").addEventListener("click", function() {
   player.innerHTML = "Player: Rock" 
   let number = getRandom(0, 2)
    if(number === 0) {
        computer.innerHTML = "Computer: Rock"
        result.innerHTML = "Result: Draw"
    } else if(number === 1) {
        computer.innerHTML = "Computer: Paper"
        result.innerHTML = "Result: You Lose"
    } else {
        computer.innerHTML = "Computer: Scissor"
        result.innerHTML = "Result: You Win"
    }
    document.getElementById("again").addEventListener("click", reset)
})
const paper = document.getElementById("paper").addEventListener("click", function() {
    player.innerHTML = "Player: Paper" 
    let number = getRandom(0,2)
    if(number === 0) {
        computer.innerHTML = "Computer: Rock"
        result.innerHTML = "Result: You Win"
    } else if(number === 1) {
        computer.innerHTML = "Computer: Paper"
        result.innerHTML = "Result: Draw"
    } else {
        computer.innerHTML = "Computer: Scissor"
        result.innerHTML = "Result: You Lose"
    }
    document.getElementById("again").addEventListener("click", reset)

})
const scissor = document.getElementById("scissor").addEventListener("click", function() {
    player.innerHTML = "Player: Scissor" 
    let number = getRandom(0,2)
    if(number === 0) {
        computer.innerHTML = "Computer: Rock"
        result.innerHTML = "Result: You Lose"
    } else if(number === 1) {
        computer.innerHTML = "Computer: Paper"
        result.innerHTML = "Result: You Win"
    } else {
        computer.innerHTML = "Computer: Scissor"
        result.innerHTML = "Result: Draw"
    }
    document.getElementById("again").addEventListener("click", reset)

})


function getRandom(min, max) {
   return Math.floor((Math.random()* (max - min + 1)) + min)
}

function reset() {
    player.innerHTML = "Player:"
    computer.innerHTML = "Computer:"
    result.innerHTML = "Result:"
}