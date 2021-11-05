'use strict';

searchRequest = (id) =>{
    fetch(`https://localhost:8083/get/1${id}`, {
        method:'GET',
    })
    .then((response)=>{
        if(response.status !== 200){
            console.error(`status: ${response}`);
            return;
        }
        response.json()
        .then((data)=>{
            console.log(data);
        })
        .catch((error)=>{
            console.error(`${error}`);
        });

    });
};