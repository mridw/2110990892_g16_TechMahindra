// var count=0;
// document.getElementById("click-button").
// addEventListener("click", function(){
//     count++;
//     console.log("clicked");
// })
// document.getElementById("click2-button").
// addEventListener("click", function(){
//     count++;
//     console.log("clicked");
// })

// function createCounter() {
//     let count = 0; 

//     return function() {
//         count++;
//         return count;
//     };
// }

// const button1Counter = createCounter();
// const button2Counter = createCounter();

// document.getElementById("click-button").addEventListener("click", function() {
//     console.log(button1Counter());
// });

// document.getElementById("click2-button").addEventListener("click", function() {
//     console.log(button2Counter());
// });

// if("1"==="1"){
//     console.log("true");
// }


function ReachedRestraunt(callback){
    console.log("Reached Restraunt");
    setTimeout(callback,1000);
}
function TableFinding(callback){
    console.log("Table Finding");
    setTimeout(callback,1000);

}
function MenuDiscover(callback){
    console.log("Menu Discover");
    setTimeout(callback,1000);

}
function PriceCheck(callback){
    console.log("Price Check");
    setTimeout(callback,1000);

}
function Starters(callback){
    console.log("Starters");
    setTimeout(callback,1000);

}
function MainCourse(callback){
    setTimeout(callback,1000);
    console.log("Main Course");
}
function Dessert(callback){
    console.log("Dessert");
    setTimeout(callback,1000);

}
function BillPay(){
    console.log("Bill Payment");

}
//chaining the callback
ReachedRestraunt(()=>{
    TableFinding(()=>{
        MenuDiscover(()=>{
            PriceCheck(()=>{
                Starters(()=>{
                    MainCourse(()=>{
                        Dessert(()=>{
                            BillPay(()=>{
                            })
                        })
                    })
                })
            })
        })
    })
})
