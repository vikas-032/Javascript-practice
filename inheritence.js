// class Human{
//     nooflegs;
//     noofhands;
//     noofeyes;
//     constructorck(legs,hands,eyes){
//         this.nooflegs=legs;
//         this.noofhands=hands;
//         this.noofeyes=eyes;
//     }
// }

// let human1=new Human("3","4","4");
// console.log(human1);

// class Animal{
//     constructor(Name,Color){
//         this.Name=Name;
//         this.Color=Color;
//     }
//     run(){
//         console.log(this.Name+"Is running")
//     }
//     shout(){
//         console.log(this.Color+"is barking")
//     }
    
// }

// class Dog extends Animal{
//     eatbuiskut(){
//         console.log(this.Name+"is eating buiskut")
//     }
// }

// let ani = new Animal("bruno","white")
// let d=new Dog("chimpu","golden brown")

// ani.bark()
// d.newDog()


// let addition = (a,b) => a+b;
// let num1 =25;
// let num2 =25;
// let sum = addition(num1,num2);
// console.log("Addition of two number will be :",sum);


//PATTERN PRINTIG PRACTICE
// let n = 15;
// for (let i =1; i<=n; i++){
//     let str ="*"
//     let space = ' ';
//     console.log(space.repeat((n-i))+ str.repeat(i));
    
// }


let n = 5;
for (let i = 0; i<=n; i++){
    let str = ' *'
    let space = "";
    console.log(space.repeat((n-i))+ str.repeat(i));

}