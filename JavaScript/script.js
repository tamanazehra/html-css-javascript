            // learning JS

console.log("hello world");
console.log("Horizon IT");
console.log("My First Code in JS")


firstName = "Tamana";
lastName = "Zehra";
address = "New York ,2nd Street";
isAdult = true;

console.log(firstName);
console.log(lastName);
console.log(address);
console.log(isAdult);

// types of variables

var a = 1;
 console.log(a);  // var: can re deaclare , update  
var a = 10;    
console.log(a);

let b = 2;
console.log(b);    //let: cannot redeclare  , can update
b = 3;
console.log(b);

const c = 100;
console.log(c);  //const: neither can redeclare not update 


                //objects in  JS

const student = {
    fullName :"Riya Sharma",
    age : 21,
    cgpa : 5.8,
    isPass : true,
    subject :"computer science"
};

student.fullName = "Riya kapoor"; // updating obj
student.age = student.age + 1

 x = 4 ;
 y = 2 ;

                /*Arithmetic operators
                +, -, /, *, **, %, */

    console.log("x + y =", x + y); 
    console.log("x - y =", x - y); 
    console.log("x / y =", x / y); 
    console.log("x * y =", x * y); 
    console.log("x ^ y =", x ** y); 
    console.log("x % y =", x % y); 

                /*Assignment operators
                =, +=, -=, *=, %=, **=  */

    x += 4;  // x = x + 4
    console.log(x)

    y -= 2;  // y = y - 2
    console.log(y)

    x *= 3;  // x = x * 3
    console.log(x)

                /*Comparison operators
                ==, !=, ===, !==, >, >=, <, <= */

     console.log("x == y", x == y) ;
     console.log("x != y", x != y) ;
     console.log("x === y", x===y) ;
     console.log("x > y", x > y) ;   
     
                /*Logical operators
                     &&, ||, ! */
    x = 4;
    y = 2;
    let cond1 = x > y;
    let cond2 = x == 4;
    console.log("cond1 && cond2", cond1 && cond2);

    let cond3 = x < y;
    let cond4 = y == 2;
    console.log("cond3 && cond4", cond3 && cond4);

    let cond5  = x !== y;
    console.log("!(x !== y)", !(x !== y));





