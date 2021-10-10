"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var number1 = (0, readline_sync_1.question)('Zadaj 1. cislo: ');
    var operator = (0, readline_sync_1.question)('Zadaj operator: ');
    var number2 = (0, readline_sync_1.question)('Zadaj 2. cislo: ');
    if (operator == '+' || operator == '-' || operator == '*' || operator == '/') {
        if ((Number(number1)) && (Number(number2))) {
            switch (operator) {
                case '+':
                    console.log('Vysledok prikadu je: ', parseInt(number1) + parseInt(number2));
                    break;
                case '-':
                    console.log('Vysledok prikadu je: ', parseInt(number1) - parseInt(number2));
                    break;
                case '*':
                    console.log('Vysledok prikadu je: ', parseInt(number1) * parseInt(number2));
                    break;
                case '/':
                    console.log('Vysledok prikadu je: ', parseInt(number1) / parseInt(number2));
                    break;
            }
        }
        else {
            console.log('Pouzi len len cisla');
        }
    }
    else {
        console.log('Povolene operatory su: + - * /');
    }
}
main();
