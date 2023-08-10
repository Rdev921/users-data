document.getElementById('loginForm').addEventListener('submit',handleLogin);

function handleLogin(e){
e.preventDefault();
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

fetch('https://reqres.in/api/login',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({email,password})
})

.then((res)=>res.json())
.then(data=>{
    if(data.token){
        localStorage.setItem('token',(data.token));
        alert('Login Successfully');
        location.href="dashboard.html"
    }else{
        alert('Invalid credentails');
    }
})
}