

//HEADER STUFF

var banner = document.createElement("h1")
var namePart = document.createElement("p")
var span = document.createElement("span")
var writeSub = document.getElementById("sub")
var writeIt = document.getElementById ("header")


 writeIt.append(banner)
 writeIt.append(namePart)

banner.textContent = "JavaScript Made This!"
 banner.style.color = "blue"
 banner.style.fontSize = "50px"

 namePart.textContent = "Michael H."
 namePart.style.color = "red"
 namePart.append(span) 

span.textContent = "Wrote This Script"
span.style.color = "black"


//CLEAR BUTTON STUFF

var clrBtn = document.getElementById("clear-button")
var messages = document.getElementById("text")

clrBtn.addEventListener("click", blank)

function blank(){
   messages.remove()
}

//CHANGE TEXT STUFF

var changeText = document.getElementsByClassName("message")

changeText[0].textContent = "Hey! How are you?"
changeText[1].textContent = "I'm doing great! I picked up a new book yesteray and I've spent the whole day in the park reading it. "
changeText[2].textContent = "Oh? You'll have to tell me all about it later at dinner."
changeText[3].textContent = "I was going to do that whther you wanted me to or not! (:"

