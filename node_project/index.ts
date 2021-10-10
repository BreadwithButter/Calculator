
/**Import kniznice na nacitanie inputu */

import { question } from 'readline-sync';



/**Nacitavanie vstupov. 1. Cislo, Operator, 2. Cislo */

const number1: string = question('Zadaj 1. cislo: '); 
const operator: string = question('Zadaj operator: ');
const number2: string = question('Zadaj 2. cislo: ');



if (operator == '+' || operator == '-' || operator == '*' || operator == '/')                   /**Kontrola spravneho operatora */
{
    
    if( (Number(number1)) && (Number(number2)))                                                 /**Kontrola ci boli zadane cisto cisla */
    {
        
        switch(operator)                                                                        /**Vyuzivanie switchu na mozne vstupne operatory. Switch je efektivnejsi ako 4x if..else */
        {
            case '+':
                console.log('Vysledok prikadu je: ', parseInt(number1) + parseInt(number2));    /**Vypis vysledku ak operator == + */
                break;
            case '-':
                console.log('Vysledok prikadu je: ', parseInt(number1) - parseInt(number2));    /**Vypis vysledku ak operator == - */
                break;
            case '*':
                console.log('Vysledok prikadu je: ', parseInt(number1) * parseInt(number2));    /**Vypis vysledku ak operator == * */
                break;
            case '/':
                console.log('Vysledok prikadu je: ', parseInt(number1) / parseInt(number2));    /**Vypis vysledku ak operator == / */
                break;
        }
        
    }

    else
    {
        console.log('Pouzi len len cisla');                                                     /**Ak by pouzivatel nezadal len cisla, vypise chybovu spravu*/
    }
    
}
else
    {
        console.log('Povolene operatory su: + - * /');                                          /**Ak by pouzivatel zadal nepovoleny operator, vypise chybovu spravu*/
    }
