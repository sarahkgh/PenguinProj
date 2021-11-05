'use strict';

let deleteRequest = (id) => {
    fetch(`https://localhost:8083/delete/2${id}`, {
        method : 'DELETE'
    })
    .then((response) => {
        if(response.status !== 204){
            console.error(`status: ${response.status}`);
            return;
        }
        
            console.log("Delete successful");
        });
    
}

let deleteButton = document.querySelector('#deleteButton');
let deleteText = document.querySelector('#deleteText');

let deleteFunction = () => {
    let deleteTextValue = deleteText.value;
    let id = deleteTextValue;
    deleteRequest(id);
}
deleteButton.addEventListener('click', deleteFunction);