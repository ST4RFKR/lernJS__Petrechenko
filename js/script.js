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

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    cout: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let a = prompt('Один из послединих просмотренных фильмов?', '');
let b = prompt('На сколько вы его оцениваете?', '');
let c = prompt('Один из послединих просмотренных фильмов?', '');
let d = prompt('На сколько вы его оцениваете?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);