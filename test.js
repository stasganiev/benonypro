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

var px, pn, pres;

px = prompt('Основание:', 0);
pn = prompt('Степень:', pn);
pres = pow(px, pn);

alert('Результат: ' + pres);
