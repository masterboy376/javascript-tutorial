let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for (btn of buttons){
    btn.addEventListener('click',(e)=>{
        btnText = e.target.innerText;
        if(btnText == 'x'){
            screenValue += '*';
            screen.value += 'x';
        }
        else if(btnText == '÷'){
            screenValue += '/';
            screen.value += '÷';
        }
        else if(btnText == '='){
            screenValue = eval(screenValue);
            screen.value = screenValue;
        }
        else if(btnText == 'C'){
            screenValue = '';
            screen.value = '';
        }
        else if(btnText == '⌫'){
            screenValue = screenValue.substring(0 , screenValue.length-1);
            screen.value = screen.value.substring(0 , screenValue.length-1);
        }
        else{
            screenValue += btnText;
            screen.value += btnText;
        }
    })
}