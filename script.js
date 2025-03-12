const uname = document.getElementById('uname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.querySelector('.submit');

submit.addEventListener('mouseover', function(event){
    if(uname.value === '' || email.value === '' || password.value === ''){
        let new_X = Math.floor(Math.random() * window.innerWidth * 0.5);
        let new_Y = Math.floor(Math.random() * window.innerHeight * 0.5);
        submit.style.backgroundColor = 'red';
        submit.innerText = 'Fill all Fields';
        submit.style.top = new_Y + 'px';
        submit.style.left = new_X + 'px';
        submit.style.position = 'absolute';
    }else{
        
    }
});
