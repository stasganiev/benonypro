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

var pn = +prompt('Число:', 0);
alert('Результат: ' + fib(pn));
