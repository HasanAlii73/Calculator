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
    switch(op){
        case '+': return add(n1, n2); 
        case '-': return subtract(n1, n2);
        case '*': return multiply(n1, n2);
        case '/': return divide(n1, n2);
        default : return "Error Operator!";
    }
}

function changeDisplay(str){
    const result = document.querySelector("#result");
    result.textContent = str;
}

function startCalculator(){
    let string = '';

    const one = document.querySelector("#one");
    one.addEventListener("click", () => {string += '1';changeDisplay(string);});
    
    const two = document.querySelector("#two");
    two.addEventListener("click", () => {string += '2';changeDisplay(string);});
   
    const three = document.querySelector("#three");
    three.addEventListener("click", () => {string += '3';changeDisplay(string);});
   
    const four = document.querySelector("#four");
    four.addEventListener("click", () => {string += '4';changeDisplay(string);});
    
    const five = document.querySelector("#five");
    five.addEventListener("click", () => {string += '5';changeDisplay(string);});
   
    const six = document.querySelector("#six");
    six.addEventListener("click", () => {string += '6';changeDisplay(string);});
  
    const seven = document.querySelector("#seven");
    seven.addEventListener("click", () => {string += '7';changeDisplay(string);});
   
    const eight = document.querySelector("#eight");
    eight.addEventListener("click", () => {string += '8';changeDisplay(string);});

    const nine = document.querySelector("#nine");
    nine.addEventListener("click", () => {string += '9';changeDisplay(string);});

    const zero = document.querySelector("#zero");
    zero.addEventListener("click", () => {string += '0';changeDisplay(string);});
   
    const add = document.querySelector("#add");
    add.addEventListener("click", () => {string += '+';changeDisplay(string);});
    
    const sub = document.querySelector("#subtract");
    sub.addEventListener("click", () => {string += '-';changeDisplay(string);});
   
    const mul = document.querySelector("#multiply");
    mul.addEventListener("click", () => {string += 'X';changeDisplay(string);});
    
    const divd = document.querySelector("#divide");
    divd.addEventListener("click", () => {string += '÷';changeDisplay(string);});
    
    const delet = document.querySelector("#delete");
    delet.addEventListener("click", () => {string = string.length > 0 ? string.slice(0, -1) : string; changeDisplay(string);});
   
    const clear = document.querySelector("#clear");
    clear.addEventListener("click", () => {string = ''; changeDisplay(string)});
   
    const equal = document.querySelector("#equal");
    equal.addEventListener("click", () => {string += '÷';changeDisplay(string);});


}
startCalculator();