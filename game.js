let container=document.getElementById('container');
let input=document.getElementById('value');
let button=document.getElementById('submit');
let message=document.getElementById('message');

let randomValue=(Math.floor(Math.random()*100)+1);

function submit(){
    let value=input.value
    console.log(value===randomValue)
    console.log(value)
    console.log(randomValue)
    if(value==randomValue){
      message.textContent='You Won! You gusesed the correct Number'
    }else if(value <= randomValue){
        return message.textContent='The number is less than the number you expected'
    }else{
        return message.textContent='The number is greater than You expected'
    }
}
