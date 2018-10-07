"use strict";

var ansver, pass;

ansver = prompt("Кто пришёл?", "");

if (ansver == null) {
    alert("Вход отменён");
} else if (ansver == "Админ") {

    pass = prompt("Пароль?", "");
    if (pass == null) {
        alert("Вход отменён");
    } else if (pass == "ЧВ") {
        alert("Добро пожаловать!");
    } else {
        alert("Пароль неверен");
    }
    
} else {
    alert("Я вас не знаю");
}

message = (login == "Вася") ? "Привет" : 
    (login == "Директор") ? "Здравствуйте" :
    (login == "") ? "Нет логина" : "";