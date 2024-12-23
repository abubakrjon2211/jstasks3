

// #1
// function bot(a) {
//     if (a < 10){
//         return a;
//     }
//     let b = (a % 10);
//     return Math.min(b, bot(Math.floor((a) / 10)));
// }
// console.log(bot(123456789));

// #2
// function bot(a) {
//     if (a < 10){
//         return a;
//     }
//     let b = (a % 10);
//     return Math.max(b, bot(Math.floor((a) / 10)));
// }
// console.log(bot(98493284));

// #3
// function bot(a, b) {
//     if (a <= b) {
//         bot(a + 1, b);
//         console.log(a);
//     }
// }
// bot(5, 10));

// #4
// function bot(a, b, c) {
//     let cnt = (a + b + c)  + (a - b - c) + (a * b * c) + (a / b / c) + (a % b % c);
//     return cnt;
// }

// console.log(bot(1, 2, 3));

// #5
// function bot(a) {
//     const str = Math.abs(a).toString();
//     if (str.length == 1) {
//         return str;
//     }
//     return bot(str.slice(1, -1));
// }
// console.log(bot(123456789));


// #6
// function bot(a){

//     return (b)=>{
//         return b=a/a
//     }
// }
// let second=bot(1)
// console.log(second(23));
// console.log(second());
// console.log(second());

// #7
// function bot(a) {
//     let b = a.toString();
//     return () => {
//         b = b.slice(1);
//         return b;
//     }
// }
// let sum = bot(121212);
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());


//8
// function bot(a) {
//     let b = 0;
//     return function() {
//         if (b % 2 == 0) {
//             console.log(a);
//         } else {
//             console.log(a.toString().split("").reverse().join(""));
//         }
//         b++;
//     };
// }
// const sum = bot(123);
// sum();
// sum();
// sum();
// sum();


// 9
// function bot(a) {
//     let b = 1;
//     return function() {
//         while (b <= a) {
//             if (a % b == 0) {
//                 console.log(b);
//                 b++;
//                 return;
//             }
//             b++;
//         }
//     };
// }
// const sum = bot(15);
// sum();
// sum();
// sum();
// sum();
// sum();


//10
// function bot(a) {
//     let c = 0;
//     return function (b) {
//         let d;
//         if (c == 0) {
//             d = a + b;
//         } else if (c == 1) {
//             d = a - b;
//         } else if (c == 2) {
//             d = a * b;
//         } else if (c == 3) {
//             d = a / b;
//         }
//         else if (c == 4) {
//             d = a % b;
//         }
//         c = (c + 1) % 5;
//         return d;
//     };
// }
// let sum = bot(6);
// console.log(sum(3));
// console.log(sum(3));
// console.log(sum(3));
// console.log(sum(3));
// console.log(sum(3));

