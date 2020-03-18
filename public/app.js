refreshTable();

const CreateNote = document.querySelector('#createNote')
CreateNote.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = CreateNote.querySelector('.name').value
    const description = CreateNote.querySelector('.description').value
    post('/createNote', { name, description })
        .then(({ status }) => {
            if (status === 200) {
                refreshTable();
            } else alert('Note creation failed')
        })
})

function refreshTable() {
    get('/getNotes')
        .then((data) => {
            let tableBody = document.querySelector('#notesTable');
            tableBody.innerHTML = '';
            var headerTr = document.createElement('tr');

            var nameHeaderColumn = document.createElement('th');
            nameHeaderColumn.textContent = 'Name';
            headerTr.appendChild(nameHeaderColumn);

            var descriptionHeaderColumn = document.createElement('th');
            descriptionHeaderColumn.textContent = 'Description';
            headerTr.appendChild(descriptionHeaderColumn);

            tableBody.appendChild(headerTr);

            data.forEach(function(value) {
                var tr = document.createElement('tr');

                var td = document.createElement('td');
                td.textContent = value.name;
                tr.appendChild(td);

                td = document.createElement('td');
                td.textContent = value.description;
                tr.appendChild(td);

                tableBody.appendChild(tr);
            });
        })
}