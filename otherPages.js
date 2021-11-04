'use strict';

let deleteRequest = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method : 'DELETE'
    })
    .then((response) => {
        if(response.status !== 200){
            console.error(`Status: ${response.statusText}`);
            return;
        }
        response.json()
        .then((data) =>{
            console.log(data);
        })
    });
};

deleteRequest(1)