
//pre-game

const readline = require("readline-sync")

let key = false



//game

console.log("You wake up and look around. You are in a small room with no windows and only one door. You have no memory of how you got here. As you stand up and try to shake the fog from your mind and look around, you see a door to your left, a shelf in front of you, and a full bathtub behind you.")

    function start(){

        const roomPieces = ["door", "shelf", "bathtub"]
        const choiceOne = readline.keyInSelect(roomPieces, "what will you inspect?")

             if(choiceOne === 0 && key === false){
            doorOne()
            } else if(choiceOne === 0 && key === true) {
            doorTwo()
            }else if(choiceOne === 1){
            shelf()
            } else if(choiceOne === 2) {
            bathtub()
            }
}
start()


//door

    function doorOne (){
        const doorPiecesOne = ["kick door", "reach into hole", "return"] 

            console.log("You approach the door. It is locked. There is a keyhole in the handle. At waist level on the left side of the door, there is a 6-inch by 6-inch hole in the wall. ")

        const doorChoiceOne = readline.keyInSelect(doorPiecesOne, "what will you do?")

            if(doorChoiceOne === 0){ 
                console.log("The door stays solidly in its frame. Your leg hurts now.")
                doorOne()
            } else if(doorChoiceOne === 1){
                console.log("You feel a sharp prick and the burn of a foreign substance being injected into your hand.You feel woozy. Your vision fades to black. You are dead.")
            } else if(doorChoiceOne === 2){
                start()
            }
    }

    function doorTwo() {
        const doorPiecesTwo = ["kick door", "reach into hole", "use key", "return"] 

            console.log("You approach the door. It is locked. There is a keyhole in the handle. At waist level on the left side of the door, there is a 6-inch by 6-inch hole in the wall. ")

        const doorChoiceTwo = readline.keyInSelect(doorPiecesTwo, "what will you do?")

                if(doorChoiceTwo === 0){ 
                    console.log("The door stays solidly in its frame. Your leg hurts now.")
                    doorTwo()
                } else if(doorChoiceTwo === 1){
                    console.log("You feel a sharp prick and the burn of a foreign substance being injected into your hand. You feel woozy. Your vision fades to black. You are dead.")
                } else if(doorChoiceTwo === 2){
                    console.log("The door is unlocked and opens easily. You are free to go!")
                } else if(doorChoiceTwo === 3){
                    start()
                }
    }

//shelf    

    function shelf() {
        const shelfPieces = ["inspect bucket", "open box", "return"]
        const bucketPieces = ["reach into bucket", "return"]

            console.log("A shelf stands in front of you. On the right side of the shelf is a bucket, and a small box sits on the left.")
        const shelfChoice = readline.keyInSelect(shelfPieces, "what will you do?")
            
            if(shelfChoice === 0) {
                console.log("The bucket is filled with a foul-smelling, opaque, chunky, grey-brown liquid.")
                const bucketReach = readline.keyInSelect(bucketPieces, "what will you do?")

                    if(bucketReach === 0) {
                        console.log("There is nothing else in the bucket. Your hand smells really bad.")
                        shelf()
                    } else if(bucketReach === 1) {
                        shelf()
                    }
            } else if(shelfChoice === 1) {
                console.log("You begin to open the box. You peer in as the folds come undone. A large amount of glitter bursts out all over your face. A mirror is at the bottom of the box. Your face is covered in glitter. You look foolish.")
                shelf()
            } else if(shelfChoice === 2) {
                start()
            }     
    }

// bathtub
    
    function bathtub() {
        const bathtubPieces = ["pull chain", "reach into tub", "return"]

            console.log("You stand in front of a dingy bathtub filled with dirty, foul-smelling, thick, chunky, almost black liquid. Attached to the faucet is a small chain leading into the liquid and pulled taut.")

        const tubChoice = readline.keyInSelect(bathtubPieces, "what will you do?") 
            if(tubChoice === 0){
                console.log("You pull the chain. The liquid begins flowing down the drain. As the tub nears empty, you catch a glint of metal. You watch in horror as a key follows the last of the liquid down the drain. You begin to cry. You will never leave this room.")
            }  else if(tubChoice === 1) {
                console.log("You reach into the tub. Fumbling around in elbow-deep muck, you feel something small and hard brush your hand. You grasp it and pull it out. A key! Your arms smell really bad.")
                key = true
                start()
            }  else if(tubChoice === 2) {
                start()
            }  
    }




