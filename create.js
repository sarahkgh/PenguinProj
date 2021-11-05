createRequest = () =>{
    fetch(`http://localhost:8083/createPenguin` , {
        method: 'POST',
        headers:{
            'content-type': "applicationJSON",
        },
        body:JSON.stringify(newPenguin)
    })
    .then((response) => {
        if(response.status !== 201){
            console.error(`status: ${response}`);
            return;
        }
    });
    
}
