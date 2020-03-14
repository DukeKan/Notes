const CreateNote = document.querySelector('.createNote')
CreateNote.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = CreateNote.querySelector('.name').value
    const description = CreateNote.querySelector('.description').value
    post('/createNote', { name, description })
        .then(({ status }) => {
            if (status === 200) alert('Note is created')
            else alert('Note creation failed')
        })
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