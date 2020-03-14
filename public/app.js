const CreateNote = document.querySelector('.createNote')
CreateNote.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = CreateNote.querySelector('.name').value
    const password = CreateNote.querySelector('.description').value
    post('/createNote', { username, password })
})

function post(path, data) {
    return window.fetch(path, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}