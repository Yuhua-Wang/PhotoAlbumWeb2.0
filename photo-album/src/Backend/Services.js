export function getPhotosRequest() {
    return fetch('/photos')
        .then(data => data.json());
}

export function uploadPhotoRequest(newPhoto) {
    return fetch('/photos', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method:'POST',
        body: JSON.stringify(newPhoto),
    }).then(data => data.json());
}

export function deleteAllRequest() {
    return fetch('/photos', {method:'DELETE'}).then(data => data.json());
}

export function deletePhotoRequest(index) {
    return fetch('/photos/'+index, {method:'DELETE'}).then(data => data.json());
}

export function editPhotoRequest(newPhoto, index) {
    return fetch('/photos/' + index, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method:'PUT',
        body: JSON.stringify(newPhoto),
    }).then(data => data.json());
}