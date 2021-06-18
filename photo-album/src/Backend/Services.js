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
        method:'post',
        body: JSON.stringify(newPhoto),
    }).then(data => data.json());
}

export function deleteAllRequest() {
    return fetch('photos', {method:'delete'}).then(data => data.json());
}

export function deletePhotoRequest(index) {
    return fetch('photos/'+index, {method:'delete'}).then(data => data.json());
}

export function editPhotoRequest(newPhoto, index) {
    return fetch('/photos/' + index, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method:'patch',
        body: JSON.stringify(newPhoto),
    }).then(data => data.json());
}