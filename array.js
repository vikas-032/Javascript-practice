// Creating an Array using array literal

// let names =[];
// console.log(names);

// let courses =['math', 'science','english'];
// console.log(courses)


// let courses = ['math', 'science','english']
// console.log(courses[2]);
// console.log(courses[2]);

// first element

// let courses=['math','english','science','hindi','gk'];
// let firstItem = courses[4];
// console.log("first Item:" , firstItem);


//Best-Known Javascript Array methods
//Q.. Array some() Method
//The array some methon checks if at least one element of the array satisfies the condition implemented by the 
//provide function.
//Example: To demonstrate the use of the array some() method.

// function isGreaterThan5(element,index, array){
//     return element > 5;
// }

// function func(){
//     let array = [2,5,8,1,4];
//     let value =array.some(isGreaterThan5);
//     console.log(value);
    
// }
//  func();

//Node practice
//  const harry =require ("./oop.js")
// console.log('hello worlddddd' , harry);


 //Array Practise


//  let a=['2,3,4,7,8']
//  console.log(arr);


//How to find duplicate element in an array?

// const arrNumber=[1,2,4,2,8,8,9,]
// const duplicate=arrNumber.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
// console.log(duplicate);

 const arrNumber=[1,50,2,999,58989,555,]
 const maxFunction=(arr)=>{
    return arr.reduce(function(pre,cur){
        return pre>cur?pre:cur
    })
 }
 console.log(maxFunction(arrNumber));


 