window.onload=()=>{
    document.getElementById('btnLogin').addEventListener('click',ejecutar,true);
}

function ejecutar(){
    let url = '/login';
    let nombre=document.getElementById('name').value;
    let password=document.getElementById('pass').value;
    let data = {name: nombre,pass:password};

    fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .catch(error => alert('Error:', error))
    .then(response => alert(JSON.stringify(response.mensaje)));
}