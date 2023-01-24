const readline = require("readline-sync")



const fruit = ["banana", "apple", "orange", "watermelon"]
const vegetables = ["carrot", "tomato", "pepper", "lettuce"]

//1.
vegetables.pop()

//2.
fruit.shift()

//3.
const orangeIndex = fruit.indexOf("orange")

//4.
 fruit.push(orangeIndex)
 
 //5.
 const vegLength = vegetables.length

 //6.
 vegetables.push(vegLength)

 //7.
 const food = fruit.concat(vegetables)
 
 //8.
 food.splice(4, 2)
 
 //9.
 food.reverse()
 
 //10.
 const foodString = food.join(", ")
 console.log(foodString)
 

 