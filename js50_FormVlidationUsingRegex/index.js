const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const car = document.getElementById('car');
const submit = document.getElementById('submit');
let nameValid = false;
let emailValid = false;
let numberValid = false;


name.addEventListener('blur', ()=>{
    let regex = /^[a-zA-Z]([0-9a-zA-Z]{2,30}$)/;
    let nameVal = name.value;
    if(regex.test(nameVal)){
        name.classList.remove('is-invalid');
        nameValid=true;
    }
    else{
        name.classList.add('is-invalid');
        nameValid=false;
    }
    
});
email.addEventListener('blur', ()=>{
    let regex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]){2,7}$/;
    let emailVal = email.value;
    if(regex.test(emailVal)){
        email.classList.remove('is-invalid');
        emailValid=true;
    }
    else{
        email.classList.add('is-invalid');
        emailValid=false;
    }
});
number.addEventListener('blur', ()=>{
    let regex = /^[0-9]{10}$/;
    let numberVal = number.value;
    if(regex.test(numberVal)){
        number.classList.remove('is-invalid');
        numberValid=true;
    }
    else{
        number.classList.add('is-invalid');
        numberValid=false;
    }
});
submit.addEventListener('click', (e)=>{
      e.preventDefault();
      if(nameValid&&emailValid&&numberValid){
      document.getElementById('message').classList.add('show');
      }
      else{
        document.getElementById('message').classList.remove('show');
      }
})