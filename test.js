"use strict";

function checkAge (age) {
    return age > 18 || confirm('Родители разрешили?');
}

function checkAge1 (age) {
    return (age > 18)? true : confirm('Родители разрешили?');
}

function min (a, b) {
    return (a < b)? a : b;
}

function pow (x, n) {

    var res = 1;

    for(var i = 1; i <= n; i++) {
        res *= x;
    }

    return res;

}

function sumto(n) {

    /*var res = 0;

    for(var i = 1; i <= n; i++) {
        res += i;
    }

    return res;*/

    if(n <= 1) {
        return n;
    }

    return n + sumto(n-1);
    
}

function factorial(n) {

    if(n <= 1) {
        return n;
    }

    return n * factorial(n-1);
    
}

function fib(n) {

    if(n <= 2) {
        return 1;
    } else if(n === 3) {
        return 2;
    }

    return fib(n - 1) + fib(n - 2);

}

/*
    функции работы с числами
*/

function stepOfRound() {
    return 10;
}

function isNumeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function sum(n1, n2) {

    var res;

    if(!isNumeric(n1) || !isNumeric(n2)) {
        return NaN;
    }

    res = +n1 + +n2;

    return res.toFixed(stepOfRound());

}

function randomToFloat(n) {
    return Math.random() * n;
}

function randomFloatInterval(n1, n2) {
    return n1 + Math.random() * (n2 - n1);
}

function randomInt(n1, n2) {

    var min = Math.floor(n1);
    var max = Math.round(n2) + 1;

    return Math.round(min + Math.random() * (max - min));

}

/*
    функции работы со строками
*/

function ucFirst(str) {

    if(!str) {
        return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1);

}

function checkSpam(str) {

    var checkStr = str.toLowerCase();

    if (~checkStr.indexOf('viagra') || ~checkStr.indexOf('xxx')) {
        return true;
    }

    return false;

}

function truncate(str, length) {
    
    return (str.length > length) ? str.slice(0, str.length - 3) + '...' : str;

}

function extractCurrencyVavue(str) {

    var length, char;
    var res = 0;

    length = str.length;

    for(var i = 0; i < length; i++) {

        char = str.substr(i, 1);
        if(~'0123456789'.indexOf(char)) {
            res += char;
        }

    }

    return +res;

}

var str = prompt('Строка', '');

alert(extractCurrencyVavue(str));
