const switchButton = document.querySelector('.switch')
const body = document.querySelector('body')

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