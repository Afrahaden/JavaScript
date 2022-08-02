let output = document.getElementById('outputtext');

let number = Math.floor(Math.random() * 100);

btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value
    if(input == number){
        output.innerHTML = `Congratulations!! you have guesse if right, the number is ${number}.`
    }else if(input < number){
        output.innerHTML = 'Your guess is lower than the number.'
    }else{
        output.innerHTML = 'Your guess is higher than the number.'
    }
})