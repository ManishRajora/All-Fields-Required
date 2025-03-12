const uname = document.getElementById('uname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.querySelector('.submit');
const small = document.querySelector('small');
const uname_small = document.querySelector('.uname_small');
const pass_small = document.querySelector('.pass_small');

function validate(){
    let valid = true;
    if(uname.value === '' || email.value === '' || password.value === ''){
        return false;
    }else{
        if(uname.value.length < 5 || uname.value.length > 20){
            uname_small.style.display = 'block';
            uname_small.innerText = 'Username must be between 5 and 20 chars';
            valid = false;
        }else{
            uname_small.style.display = 'none';
        }

        if(password.value.length < 8 || password.value.length > 16){
            pass_small.style.display = 'block';
            pass_small.innerText = 'Password must be between 8 and 16 chars';
            valid = false;
        }else{
            pass_small.style.display = 'none';
        }
    }
    return valid;
}

function btn_repel(){
    let new_X = Math.floor(Math.random() * window.innerWidth * 0.5);
    let new_Y = Math.floor(Math.random() * window.innerHeight * 0.5);
    submit.style.backgroundColor = 'red';
    submit.innerText = 'Fill all Fields';
    submit.style.top = new_Y + 'px';
    submit.style.left = new_X + 'px';
    submit.style.position = 'absolute';
}

function btn_original(){
    submit.style.backgroundColor = 'rgb(24, 173, 232)';
    submit.innerText = 'Submit';
    submit.style.top = '0';
    submit.style.left = '0';
    submit.style.position = 'relative';
}

submit.addEventListener('mouseover', function(event){
    if(!validate()){
        btn_repel();
    }else{
        btn_original();   
    }
});
