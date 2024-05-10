"use strict"

var buttons = document.getElementsByClassName('button');
var display = document.getElementById("displayScreen");
var operand1 = 0;
var operand2 = null;
var operator = null;


//For Mouse

function click(){
    var value = this.getAttribute('data-value');
        if(value == '+'){
            operator = '+';
            operand1 = parseFloat(display.textContent);
            display.innerText = " ";
        }
        else if(value == '-'){
            operator = '-';
            operand1 = parseFloat(display.textContent);
            display.innerText = " ";
        }
        else if(value == '*'){
            operator = '*';
            operand1 = parseFloat(display.textContent);
            display.innerText = " ";
        }
        else if(value == '/'){
            operator = '/';
            operand1 = parseFloat(display.textContent);
            display.innerText = " ";
        }
        else if(value == '%'){
            operator = '%';
            operand1 = parseFloat(display.textContent);
            display.innerText = " ";
        }
        else if(value == '+/-'){
            // operand1 = parseFloat(display.textContent);
            // operand1 = -1 * operand1;
            // display.innerText = " ";
            display.textContent = eval(parseFloat(display.textContent) * (-1) );
        }
        else if(value == 'AC'){
            display.innerText = " ";
        }
        else if(value == '=' ){
            operand2 = parseFloat(display.textContent);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        }
        else{
            display.innerText += value;
            
        }
}

for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',click);
}
// for(var i=0; i<buttons.length; i++){
//     buttons[i].addEventListener('click',function(){
        // var value = this.getAttribute('data-value');
        // if(value == '+'){
        //     operator = '+';
        //     operand1 = parseFloat(display.textContent);
        //     display.innerText = " ";
        // }
        // else if(value == '-'){
        //     operator = '-';
        //     operand1 = parseFloat(display.textContent);
        //     display.innerText = " ";
        // }
        // else if(value == '*'){
        //     operator = '*';
        //     operand1 = parseFloat(display.textContent);
        //     display.innerText = " ";
        // }
        // else if(value == '/'){
        //     operator = '/';
        //     operand1 = parseFloat(display.textContent);
        //     display.innerText = " ";
        // }
        // else if(value == '%'){
        //     operator = '%';
        //     operand1 = parseFloat(display.textContent);
        //     display.innerText = " ";
        // }
        // else if(value == '+/-'){
        //     operand1 = parseFloat(display.textContent);
        //     operand1 = -1 * operand1;
        //     display.innerText = " ";
        // }
        // else if(value == 'AC'){
        //     display.innerText = " ";
        // }
        // else if(value == '=' ){
        //     operand2 = parseFloat(display.textContent);
        //     var result = eval(operand1 + ' ' + operator + ' ' + operand2);
        //     if (result) {
        //         display.textContent = result;
        //         operand1 = result;
        //         operand2 = null;
        //         operator = null;
        //     }
        // }
        // else{
        //     display.innerText += value;
            
        // }


//     })
// }

//For Keyboard Input

document.addEventListener("keyup", function(event) {
		for (var i = 0; i < buttons.length; i++) {
			var id = buttons[i].getAttribute("data-value");

			if (id == event.key) {
				buttons[i].click();
			}
		}
	}
);