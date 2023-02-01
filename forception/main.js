const people = ["jon", "jacob", "jingle", "heimer", "schmidt"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"


function forception(array, string){

    const finishedArr = [] //empty box

        string.split("") //string into array   

            for(var i = 0; i < array.length; i++){ //push name
                finishedArr.push(array[i] + ":")

                    for(var j = 0; j < string.length; j++){ //push entire alphabet, then return to push name
                        finishedArr.push(string[j])
                    }
        
            }
    return finishedArr   
}

console.log(forception(people, alphabet))