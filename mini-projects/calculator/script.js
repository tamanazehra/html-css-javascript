function calculate(operator){
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
   
    if (operator === '+'){
        result = num1 + num2;
    } else if (operator === '-'){
        result = num1 - num2;
    } else if (operator === '*'){
        result = num1 * num2;
    } else if (operator === '/'){
            if (num2 === 0) {
                result = 'ERROR';
            } else{
         result = num1 / num2;
            }
    }

    document.getElementById('result').value = result;

}