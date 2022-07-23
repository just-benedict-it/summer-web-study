// pop=>마지막 요소를 빼옴
// shift=>첫번째 요소를 빼옴
// unshift=>첫번째 요소에 추가
// push=>마지막 요소에 추가

// //변수 앞에 아무것도 없으면 함수 안에 존재해도 global variable로 처리됨.
// function func1(){
//     oppsGlobal = 5; 
// }

// switch

// let collectionCopied = JSON.parse(JSON.stringify(collection)); // 객체의 깊은 복사 방법
// collection[id][prop] = collection[id][prop] || []; //중요. 앞에꺼 없으면 뒤에꺼 

// arrow function 사용해 정수의 제곱만 추출하기
// const realNumberArray = [1.2,2,3,0.9,8];

//     const {tommorow: a} = avbTemperature;
//     const [, , ...args] = list;

// 즉시실행함수 
// => 이 함수는 한 번만 호출된다. 이 함수의 내부 변수는 함수 내에서만 사용된다.
// const stats={
//     max:2,
//     min:15,
//     total:3,
// }
// const half = (function() {
//     return function half({max, min}){
//         return (max+min)/2.0;
//     };
// })();
// console.log(half(stats));

// 객체 안에 함수를 넣을 수도 있다.
// const bicycle = {
//     gear: 2,
//     setGear: function(newGear){
//         this.gear = newGear;
//     }
// };
// console.log(bicycle.gear);
// bicycle.setGear(3);
// console.log(bicycle.gear);

// //constructor()는 new에 의해 자동으로 호출되므로, 특별한 절차 없이 객체를 초기화 할 수 있습니다.
// function makeClass(){
//     class Vegetable{
//         constructor(name){
//             this.name=name;
//         }
//     }
//     return Vegetable;
// }
// const Vegetable = makeClass();
// const carrot = new Vegetable("carrot");
// console.log(carrot.name);

// .js 까지 써줘야 작동함.
// import { stringToUpper } from "./test2.js";
// const cap = stringToUpper("AsgmaasdfDdlm");
// console.log(cap);