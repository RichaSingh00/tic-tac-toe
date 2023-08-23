const Game = require("./Game");

//driver code
let g0=new Game("ABC","XYZ") //Object with two args into new variable g0
console.log(g0.play(4))
console.log(g0.play(5))
console.log(g0.play(1))
console.log(g0.play(7))
console.log(g0.play(8))
console.log(g0.play(2))
console.log(g0.play(3))
console.log(g0.play(6))
console.log(g0.play(0))
console.log("----------------------------------")

let g1=Game.newGame("Travis","Becky") //in Game class method newGame is called passing args

console.log(g1[0])         //string at index 0
console.log(g1[1].play(0))  //index 1 contains args, refers to method play(cellNumber)
console.log(g1[1].play(5))
console.log(g1[1].play(4))
console.log(g1[1].play(2))
console.log(g1[1].play(3))
console.log(g1[1].play(8))




