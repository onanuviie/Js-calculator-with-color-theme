const switchButton = document.querySelector('.switch')
const body = document.querySelector('body')
const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')


let calculation = []
let accumulative

switchButton.addEventListener('click', () => {
    document.body.classList.toggle('light')
})

function checkMode() {
    if (body.classList.contains('light')){
        switchButton.addEventListener('click', () => {
            document.body.classList.remove('light')
            document.body.classList.add('dark')
        })
    }

    else if (body.classList.contains('dark')) {
        switchButton.addEventListener('click', () => {
            document.body.classList.remove('dark')
            document.body.classList.remove('light')
        })
    }

    else {
        switchButton.addEventListener('click', () => {
            document.body.classList.add('light')
            document.body.classList.remove('dark')
        })
    }
}

window.setInterval(function(){checkMode()}, 1000)

function calculate(button) {
    const value = button.textContent
    

    if (value === "RESET") {
        calculation = []
        screenDisplay.textContent = '.'
    }

    else if (value === "DEL") {
        
        calculation.pop()
        
        if(calculation.length === 0){
            screenDisplay.textContent = '.'
        }
        else {
            screenDisplay.textContent = calculation.join('')
        }
    } 

    else if (value === "="){ 
        screenDisplay.textContent = eval(accumulative)
    }

    else {
        calculation.push(value) 
        accumulative = calculation.join('')
        screenDisplay.textContent = accumulative
    }
}

function replaceX(sentence) {
    return sentence.replace("x", x)
}

buttons.forEach(button => 
    button.addEventListener('click', () => calculate(button)))