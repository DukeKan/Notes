function post(path, data) {
    return window.fetch(path, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            return processResponse(response);
        })
}

function get(path) {
    return window.fetch(path, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            return processResponse(response);
        })
}

function processResponse(response) {
    if (response.status == '401') {
        response.json().then(data => {
            window.location.replace(data.authServer);
        });
        return;
    }
    return response.json();
}