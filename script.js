function add(n1, n2){
    return n1 + n2;
}

function subtract(n1, n2){
    return n1 - n2;
}

function multiply(n1, n2){
    return n1 * n2;
}

function divide(n1, n2){
    return n1 / n2;
}

function operate(n1, n2, op){
    let number1 = parseInt(n1);
    let number2 = parseInt(n2);
    let res = -1;
    switch(op){
        case '+': res = add(number1, number2); return Math.round(res * 10000000) / 10000000; 
        case '-': res = subtract(number1, number2); return Math.round(res * 10000000) / 10000000;
        case 'X': res = multiply(number1, number2); return Math.round(res * 10000000) / 10000000;
        case '÷':
            if(number2 !== 0){
                res = divide(number1, number2);
                return Math.round(res * 10000000) / 10000000;
            } 
            else{
                return "For real XD";
            }
        default : return "Error";
    }
}

function changeDisplay(str){
    const result = document.querySelector("#result");
    result.textContent = str;
}

function startCalculator(){
    let string = '';
    let n1, n2;
    let op;
    let opIndex = -1;
    let thisResult = false;

    const one = document.querySelector("#one");
    one.addEventListener("click", () => {
        if(thisResult)
        {
            claerFunc();
        }
        string += '1';
        changeDisplay(string);
        });
    
    const two = document.querySelector("#two");
    two.addEventListener("click", () => {
        if(thisResult)
        {
            claerFunc();
        }
        string += '2';
        changeDisplay(string);});
   
    const three = document.querySelector("#three");
    three.addEventListener("click", () => {
        if(thisResult)
        {
            claerFunc();
        }
        string += '3';
        changeDisplay(string);});
   
    const four = document.querySelector("#four");
    four.addEventListener("click", () => {
        if(thisResult)
        {
            claerFunc();
        }string += '4';
        changeDisplay(string);});
    
    const five = document.querySelector("#five");
    five.addEventListener("click", () => {
        if(thisResult)
        {
            claerFunc();
        }string += '5';
        changeDisplay(string);});
   
    const six = document.querySelector("#six");
    six.addEventListener("click", () => {
        if(thisResult)
        {
            claerFunc();
        }string += '6';
        changeDisplay(string);});
  
    const seven = document.querySelector("#seven");
    seven.addEventListener("click", () => {
        if(thisResult)
        {
            claerFunc();
        }string += '7';
        changeDisplay(string);});
   
    const eight = document.querySelector("#eight");
    eight.addEventListener("click", () => {
        if(thisResult)
        {
            claerFunc();
        }string += '8';
        changeDisplay(string);});

    const nine = document.querySelector("#nine");
    nine.addEventListener("click", () => {
        if(thisResult)
        {
            claerFunc();
        }string += '9';
        changeDisplay(string);});

    const zero = document.querySelector("#zero");
    zero.addEventListener("click", () => {
        if(thisResult)
        {
            claerFunc();
        }string += '0';
        changeDisplay(string);});
   
    const add = document.querySelector("#add");
    add.addEventListener("click", () => {
        if(opIndex === -1){
            n1 = string;
            string += '+';
            changeDisplay(string);
            op = '+';
            opIndex = string.length-1;
        }
        else{
            if(string.length-1 !== opIndex){
                n2 = string.slice(opIndex+1);
                string = operate(n1, n2, op);
                n1 = string;
                string += '+';
                op = '+';
                changeDisplay(string);
                opIndex = string.length-1;
            }
            else{
                op = '+';
                string = string.replace(string.charAt(opIndex), '+');
                changeDisplay(string);
            }
        }

    });
    
    const sub = document.querySelector("#subtract");
    sub.addEventListener("click", () => {
        if(opIndex === -1){
            n1 = string;
            string += '-';
            changeDisplay(string);
            op = '-';
            opIndex = string.length-1;
        }
        else{
            if(string.length-1 !== opIndex){
                n2 = string.slice(opIndex+1);
                string = operate(n1, n2, op);
                n1 = string;
                string += '-';
                op = '-';
                changeDisplay(string);
                opIndex = string.length-1;
            }else{
                op = '-';
                string = string.replace(string.charAt(opIndex), '-');
                changeDisplay(string);
            }
        }
    });
    
    const mul = document.querySelector("#multiply");
    mul.addEventListener("click", () => {
        if(opIndex === -1){
            n1 = string;
            string += 'X';
            changeDisplay(string);
            op = 'X';opIndex = string.length-1;
        }
        else{
            if(string.length-1 !== opIndex){
                n2 = string.slice(opIndex+1);
                string = operate(n1, n2, op);
                n1 = string;
                string += 'X';
                op = 'X';
                changeDisplay(string);
                opIndex = string.length-1;
            }
            else{
                op = 'X';
                string = string.replace(string.charAt(opIndex), 'X');
                changeDisplay(string);
            }
        }
    });
    
    const divd = document.querySelector("#divide");
    divd.addEventListener("click", () => {
        '÷'
        if(opIndex === -1){
            n1 = string;
            string += '÷';
            changeDisplay(string);
            op = '÷';
            opIndex = string.length-1;
        }
        else{
            if(string.length-1 !== opIndex){
                n2 = string.slice(opIndex+1);
                string = operate(n1, n2, op);
                n1 = string;
                string += '÷';
                op = '÷';
                changeDisplay(string);
                opIndex = string.length-1;
            }
            else{
                 op = '÷';
                string = string.replace(string.charAt(opIndex), '÷');
                changeDisplay(string);
            }
        }
    });
    
    const delet = document.querySelector("#delete");
    delet.addEventListener("click", () => {string = string.length > 0 ? string.slice(0, -1) : string; changeDisplay(string);});
   
    const clear = document.querySelector("#clear");
    clear.addEventListener("click", claerFunc);
    function claerFunc(){
        string = ''; 
        changeDisplay(string)
        n1 = undefined;
        n2 = undefined;
        op = '';
        opIndex = -1;
        thisResult = false;
    }
   
    const equal = document.querySelector("#equal");
    equal.addEventListener("click", () => {
        if (n1 === undefined || opIndex === -1){
            
        }
        else{
            n2 = string.slice(opIndex+1); 
            string = operate(n1, n2, op);
            changeDisplay(string);
            opIndex = -1;
            thisResult = true;
        }
    });


}
startCalculator();