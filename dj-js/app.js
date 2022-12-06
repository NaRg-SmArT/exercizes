var djSquare = document.getElementById("square")

    function blueSquare(){
    djSquare.style.backgroundColor = "blue"
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

window.addEventListener("keydown", type)

    function type(event){
    if (event.keyCode === 82){
       redSquare()
    } else if(event.keyCode === 79){
        orangeSquare()
    }else if(event.keyCode === 71){
        greenSquare()
    } else if (event.keyCode === 89){
        yellowSquare()
    } else if (event.keyCode === 66){
        blueSquare()
    } else if (event.keyCode === 87){
        whiteSquare()
    }
}

document.addEventListener("wheel", orangeSquare)
djSquare.addEventListener("dblclick", greenSquare)
djSquare.addEventListener("mouseup", yellowSquare)
djSquare.addEventListener("mousedown", redSquare)
djSquare.addEventListener("mouseenter", blueSquare)
djSquare.addEventListener("mouseleave", whiteSquare)