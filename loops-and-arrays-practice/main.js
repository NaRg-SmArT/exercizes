const readline = require("readline-sync")


//LOOP NUMBER ONE

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
var computers = 0
         for(var i = 0; i < officeItems.length; i++){
         if (officeItems[i] === "computer"){
         computers ++
    }
}
console.log(computers)



//LOOP NUMBER TWO

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 17){
            console.log("old enough")
        } else{
            console.log("not old enough")
        }
  }