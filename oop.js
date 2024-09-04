// function multiFunction (a,b ){
//     return a * b;

// }

// let num1 = 5;
// let num2 = 10;
// let multiplication =multiFunction(num1 , num2);
// console.log("multiplication of two number:", multiplication)

// function subtractFunction (a, b){
//     return a-b;

// }

// let num1 = 50;
// let num2 = 40;
// let subtract = subtractFunction(num1 ,num2)
// console.log("Subtration of two number will be :", subtract)

// let addition = (a,b) => a+b;
// let num1 =25;
// let num2 =25;
// let sum = addition(num1,num2);
// console.log("Addition of two number will be :",sum)

// let subtraction = (a,b) => a-b;
// let num1=80;
// let num2=40;
// let sub= subtraction(num1,num2);
// console.log("subtraction of two number is", sub)

// addition of two number using operator
// let num1=10;
// let num2=20;
// num1 += num2;
// console.log("result of two number is: ", num1)

// let num = -3333;
// if(num>0)
// console.log("This number is positive")
// else
// console.log("this  number is negative")

// let addition = (a , b) =>a+b;
// let num1=33;
// let num2=33;
// let sum=addition(num1,num2);
// console.log("addition of two number :" , sum)

// class human{
//     name="Vikas";
//     lastname="kumar";
//     age=21;
//     task=function(){
//         console.log("teaching");
//     }
// }

// let human1=new human();
// console.log(human1);

// class Human{
//     nooflegs;
//     noofhands;
//     noofeyes;
//     constructor(legs,hands,eyes){
//         this.nooflegs=legs;
//         this.noofhands=hands;
//         this.noofeyes=eyes;

//     }
// }

// let human1 =new Human("2","2","2");
// console.log(human1);

// class Animal extends Human{

// }
// let animal1=new Animal("2","4","3");
// console.log(animal1);

// class Creature extends Human{

// }
// let Creature1= new Creature("4","5","5");
// console.log(Creature1)
// // class Animal{
//     nooflegs;
//     noofhands;
//     noofeyes;
//     constructor(legs,hands,eyes){
//         this.nooflegs=legs;
//         this.noofhands=hands;
//         this.noofeyes=eyes;
//     }
// }

// let animal1 =new Animal ("2","3","4");
// console.log(animal1);

// const fetchData=async()=>{
//     const data= await fetch("https://www.youtube.com/");
//     console.log(data);
// }

// console.log(2);

// let rows = 10;
// let pattern = "";
// for(let i=1; i<=rows; i++){
//     for(let j=1;j<=i; j++ ){
//         pattern+=j;
//     }
//     pattern+="\n";
// }
// console.log(pattern);

// let rows=5;
// for(let i=0;i<5;i++){

//     for(let j=0;j<=i;j++){
//         console.log("4");
//     }

// const inputBtn = document.getElementById("input-btn");
// const addBtn = document.getElementById("input-btn");
// const list = document.getElementById("input-btn");
//  const ct =document.getElementById("count");
// let count=0;
// function addItemToTheList(){
//     const text =inputBtn.value;
//     if(text.length===0){
//         alert("please enter something greater than lenght 3");
//         return;
//     }
// const lis=document.createElement("li");
// lis.textContent=text;
// list.appendChild(lis);
// inputBtn.value="";
// }
// addBtn.addEventListener("click",addItemToTheList);

// function changecolour(newcolor){
// const elem.getElementById("Change-txt");

//

//   function changeColor(newColor){
//   const elem = document.getElementById("Change-txt");
//   elem.style.color =newColor;
// }

// debugger

//  const username="vikas";
//  var age="21";
//  const address="delhi";
//  console.log(username);
//  console.log(username,age,address);

//  function aaaasayMyName(){
//     console.log("Hello vikas");
//     aaaasayMyAge();
//  }

// function aaaasayMyAge(){
//     console.log("I am 21");
// }

// const fun= ()=>{
//     console.log("The dicee academy");
// }

// fun();

// var fun = () => {
//   console.log("I am fat aarow fun");
// };

// undefined();

//Ques 1 = upper left tringle pattern

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = "*";
//   console.log(str.repeat(i));
// }

//output
// *
// **
// ***
// ****
// *****

// .Ques 2 = Upper right tringle

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = "*";
//   let space = " ";
//   console.log(space.repeat(n - i) + str.repeat(i));
// }

// Output
// *
// **
// ***
// ****
// *****
// Object literals

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("draw");
//   },
// };

// Factory Functions
// function createCircle(radius){
//     return{
//     radius,
//     draw: function() {
//      console.log('draw');
//     }
//   };
// }

// const circle= createCircle(1);

// ************** Patterns *****************

// TRIANGLE PATTERN-1

// let rows = 5;
// let pattern = "";

// for (let n = 1; n<= rows; n++) {
//   for (let num = 1; num <= n; num++) {
//     pattern += num;
//   }
//   pattern += "\n";
// }

// console.log(pattern);

// vikas = {
//   name: "vikas kumar",
//   favNum: 5,
//   developer: true,
// };


   