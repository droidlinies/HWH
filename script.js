const name = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const eroorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let alert = []
    if (username.value === '' || username.value == null) {
        window.alert('username is required')
    }
})