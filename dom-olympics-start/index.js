var banner = "This Is The Header For The Dom Olympics!"

var writeIt = document.getElementById ("header")
 writeIt.append(banner)
 header.style.color = "blue"
 header.style.fontSize = "50px"







var clrBtn = document.getElementById("clear-button")
var messages = document.getElementById("text")

clrBtn.addEventListener("click", blank)

function blank(){
   messages.remove()
}
