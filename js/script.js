// "use strict";
// // a = 15;
// console.log(a);
// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);


// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// var name = 'Evg';
// name = 'Alex';
// console.log(name);

// // {
// //     let result = 50; var - будет находить 
// // }
// // console.log(result);

// let num = 4;
// console.log(-4 / 0);
// console.log('string' - 9);

// const persone = `Alex`;
// const bool = true;


// const obj = {
//     name: "Evg",
//     age: 26,
//     isMarried: false
// };
// console.log(obj.name);

// let arr = ['plumb.png', 'orange.png', 'apple.jpg'];
// console.log(arr[1]);
// const answer = +prompt('Вам есть 18 ?', '');
// console.log(answer + 5);

// const answers = [];
// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Сколько вам лет", "");
// answers[2] = prompt("Как ваше фамилия?", "");

// document.write(answers);
//*
//**
//***
//****
//*****
// let result = '';
// const lenght = 7;
// for (let i = 1; i < lenght; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += '\n';
// }



// console.log(result);


// first: for (let i = 0; i < 3; i++) {
//     console.log(`1 level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`2 level: ${j}`);
//     }
//     for (let k = 0; k < 3; k++) {
//         if (k === 2) continue first;
//         console.log(`3 level: ${k}`);
//     }
// }
// let i = 0;
// while (i < 2) {
//     i++;
//     let a = prompt('Один из послединих просмотренных фильмов?', '');
//     let b = prompt('На сколько вы его оцениваете?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }

// }
// let i = 0;
// do {
//     let a = prompt('Один из послединих просмотренных фильмов?', '');
//     let b = prompt('На сколько вы его оцениваете?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// } while (i < 2);

// function showFirstMessahe() {
//     console.log('Hellow');
// }

// showFirstMessahe();

// const usdCurr = 28;
// const euCurr = 32;
// const ruCurr = 111;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     return result * discount;
// }

// function difference(pro, con) {
//     console.log(`Твоя скидка составляет : -${pro - con}`);
// }
// difference(convert(500, usdCurr), promotion(convert(500, usdCurr)));
// const res = convert(500, usdCurr);
// const resUE = convert(231, euCurr);
// const resRU = convert(12, ruCurr);
// const disRes = promotion(res);
// promotion(res);
// promotion(resUE);
// promotion(resRU);
// promotion(convert(500, usdCurr));
// convert(500, usdCurr);
// convert(500, euCurr);
// 14000 12600


// const str = 'test';
// const arr = [1, 2, 4];
// // console.log(str[2] = 'd');
// console.log(str.toUpperCase());
// console.log(str[2] = 'd');


// let fruit = 'some fruit';
// console.log(fruit.indexOf("fruit"));

// const logg = 'Hello world, i am programmer';
// console.log(logg.slice(13)); // поддерживает оттрицательные значение (-1, -10)
// console.log(logg.slice(-10)); // поддерживает оттрицательные значение (-1, -10)
// console.log(logg.substring(11)); // не поддерживает оттрицательные значение
// console.log(logg.substr(13, 17)); // (з какого символа, сколько символлов)***




const personalMovieDB = {
    count:  0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start:function () {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из послединих просмотренных фильмов?', '');
            let b = prompt('На сколько вы его оцениваете?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы класический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    

    writeYourGenres:function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
       
        if (genre != null && genre != ''){
            personalMovieDB.genres[i - 1] = genre;

        }else {
            console.log ("НЕКОРЕКТНЫЕ ДАННЫЕ");
            i--;
        }
    }
    personalMovieDB.genres.forEach((item , i ) =>{
        console.log(`Любимый жанр #${i + 1} - это ${item}`);
    });
}, 
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

