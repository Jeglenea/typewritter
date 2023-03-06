const textDisplay= document.getElementById('text')
const picDisplay= document.getElementById('pic')
const phrases = ['Hello','If you are looking at this page right now',
    "I'm sorry but 😔",'You are retarded 😂']
const pics=[
]
let i = 0
let j = 0
let currentPhase = []
let currentPic = []
let isEnd =false
let isDeleting = false
function loop () {
    isEnd=false
    textDisplay.innerHTML=currentPhase.join("")
    picDisplay.innerHTML=currentPic.join("")
    if(i < phrases.length){
        if(!isDeleting && j < phrases[i].length){
            currentPhase.push(phrases[i][j])
            currentPic.push(pics[i])
            j++
            textDisplay.innerHTML=currentPhase.join("")
            picDisplay.innerHTML=currentPic.join("")
        }
        if(isDeleting && j<=phrases[i].length){
            currentPhase.pop(phrases[i][j])
            currentPic.pop(pics[i])
            j--
            textDisplay.innerHTML=currentPhase.join("")
            picDisplay.innerHTML=currentPic.join("")
        }
        if(j == phrases[i].length){
            isEnd=true
            isDeleting=true
        }
        if (isDeleting && j === 0){
            currentPhase = []
            currentPic = []
            isDeleting=false
            i++
            if(i == phrases.length){
                i = 0
            }
        }

    }
    const spedUp = Math.random() * (80-50) + 50
    const normalSped = Math.random() * (300-200) + 200
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSped
    setTimeout(loop,time)
}
loop()
