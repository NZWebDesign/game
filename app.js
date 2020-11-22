const square = document.querySelectorAll('.square')
const picture = document.querySelectorAll('.picture')
const timeLeft = document.querySelector('#timeLeft')
const startButton = document.getElementById('startButton')
let score = document.querySelector('#score')
let result = 0
let currentTime = timeLeft.textContent

startButton.addEventListener('click', function(){
    function randomSquare() {
     square.forEach(className => {
            className.classList.remove('picture')
     })
        let randomPosition = square[Math.floor(Math.random()*9)]
        randomPosition.classList.add('picture')

        hitPosition = randomPosition.id
    }

    square.forEach(id => {
        id.addEventListener('mouseup', () => {
         if(id.id === hitPosition){
             result = result + 1
             score.textContent = result
            }
        })
    })

    function movePicture() {
        let timerId = null
        timerId = setInterval(randomSquare, 1000)
    }

    movePicture()

    function countDown(){
        currentTime--
        timeLeft.textContent = currentTime

        if(currentTime === 0 ){
         clearInterval(timerId)
            alert('GAME OVER, Your score is ' + result)
            location.reload();
     }
    }

    let timerId = setInterval(countDown, 1000)

})