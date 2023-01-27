const people = ["jon", "jacob", "jingle", "heimer", "schmidt"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"


function forception(array, string){

    const finishedArr = []

        string.split("")    

            for(var i = 0; i < array.length; i++){
                finishedArr.push(array[i] + ":")

                    for(var j = 0; j < string.length; j++){
                        finishedArr.push(string[j])
                    }
        
            }
    return finishedArr   
}

console.log(forception(people, alphabet))