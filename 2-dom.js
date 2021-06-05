document.getElementById('MyForm').addEventListener('submit', (event) => {
    event.preventDefault()
    const { value } = event.target.querySelector('input')
    document.getElementById('MyName').innerText = value
})
