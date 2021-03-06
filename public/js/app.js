
const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchElement.value

    messageOne.textContent = 'Loading: Please Wait...'
    messageTwo.textContent = ''
    
    // fetch('http://localhost:/weather?address=' + location).then((response) => {
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.innerHTML = '=> Location: '+data.location
                messageTwo.innerHTML = '=> Forecast: '+data.forecast
            }
        })
    })
})

