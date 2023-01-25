

//CAPS PLUS LOWERCASE

    function tipYourCaps(string){
        const caps = string.toUpperCase()
        const tip = caps.toLowerCase()
    
        const respect = caps.concat(tip)
        console.log(respect)
    }

//HALF LENGTH

    function halfTheLength(string){
        const length = string.length
        console.log(Math.floor(length / 2))
    }

// RETURN FIRST HALF

    function onlyHalf(string){
        const length = string.length
        const half = string.slice(0, length / 2)

        console.log(half)
    }
    
// HALF CAPS
    
    function halfCaps(string){
        const length = string.length
        const half = length / 2
        const capsPart = string.slice(0, Math.floor(half))
        const notCapsPart = string.slice(half)
        const capitalize = capsPart.toUpperCase()
        const allDone = capitalize + notCapsPart
        console.log(allDone)
    }
