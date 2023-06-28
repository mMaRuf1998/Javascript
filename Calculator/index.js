let num1 = 5
let num2 = 2

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;


function add()
    {
        document.getElementById("sum-el").textContent = "Sum : "+ (num1+num2) ;
    }


function subtract()
    {
        document.getElementById("sum-el").textContent= "Sum : "+ (num1-num2) ;
    }


function multiply()
    {
        document.getElementById("sum-el").textContent = "Sum : "+ (num1*num2) ;
    }


function divide()
    {
       
        document.getElementById("sum-el").textContent = "Sum : "+ (num1/num2)  ;
    }