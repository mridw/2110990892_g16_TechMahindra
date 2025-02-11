// console.log(a);
// var a = 10;

// function asumOfTwo(a,b){
//     var sum = a+b;
//     return sum;
// }

// console.log(asumOfTwo(10,9));
// console.log(a);

// function two(){
//     return 2;
// }
// function four(){
//     return 4;
// }
// console.log(1);
// console.log(two());
// setInterval(()=>{
//     console.log(3),3000
// })
// console.log(four());
// setInterval(()=>{
//     console.log(3),5000
// })
// console.log(6);


// for(let i=1;i<=6;i++){
//     function x(i){
//         setTimeout(()=>{
//             console.log(i),1000
//         })
//     }  
//     x(i) 
// }

// function x(){
//     var a =7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();


// function z(){
//     var b =900;
//     function x(){
//         var a=7;
//         function y(){
//             console.log(a.b);
//         }
//     }
// }

// function counter() {
//     var count = 0;

//     return {
//         increment: function () {
//             count++;
//             console.log(count);
//         },
//         decrement: function () {
//             count--;
//             console.log(count);
//         }
//     };
// }

// var ans = counter();
// ans.increment();
// ans.decrement();

function Counter() {
    count = 0;

    this.increment = function () {
        count++;
        console.log(count);
    }

    this.decrement = function () {
        count--;
        console.log(count);
    }
}

var ans = new Counter();
ans.increment();
ans.decrement();