export function getPhotosRequest() {
    return fetch('/photos')
        .then(response => {
            if (response.ok){
                return response.json();
            } else {
                alert('Failed to get photos, please try again');
                return [];
            }
        });
}

export function uploadPhotoRequest(newPhoto) {
    return fetch('/photos', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method:'POST',
        body: JSON.stringify(newPhoto),
    }).then(response => {
        if (response.ok){
            return response.json();
        }
        alert('Upload Failed, please try again')
    });
}

export function deleteAllRequest() {
    return fetch('/photos', {method:'DELETE'}).then(response => {
        if (response.ok){
            return response.json();
        }
        alert('Delete Failed, please try again')
    });
}

export function deletePhotoRequest(index) {
    return fetch('/photos/'+index, {method:'DELETE'}).then(response => {
        if (response.ok){
            return response.json();
        }
        alert('Delete Failed, please try again')
    });
}

export function editPhotoRequest(newPhoto, index) {
    return fetch('/photos/' + index, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method:'PUT',
        body: JSON.stringify(newPhoto),
    }).then(response => {
        if (response.ok){
            return response.json();
        }
        alert('Edit Failed, please try again')
    });
}