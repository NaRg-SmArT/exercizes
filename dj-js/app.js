var djSquare = document.getElementById("square")

function blueSquare(){
   djSquare.style.backgroundColor = "blue"
   console.log ("food")
}

function whiteSquare(){
    djSquare.style.backgroundColor = "white"
}

function redSquare(){
    djSquare.style.backgroundColor = "red"
}

function yellowSquare(){
     djSquare.style.backgroundColor = "yellow"
}

function greenSquare(){
    djSquare.style.backgroundColor = "green"
}

function orangeSquare(){
    djSquare.style.backgroundColor = "orange"
}


document.addEventListener("wheel", orangeSquare)
djSquare.addEventListener("dblclick", greenSquare)
djSquare.addEventListener("mouseup", yellowSquare)
djSquare.addEventListener("mousedown", redSquare)
djSquare.addEventListener("mouseenter", blueSquare)
djSquare.addEventListener("mouseleave", whiteSquare)
