function add(a,b){
    const result = a + b;
    return result;
    //eita k return a + b, eivahbeo likha jai
}
const sum = add(20,12);
console.log(sum);

// Function Expression============
const sayHello = function() {
  console.log("Hello!");
};
sayHello(); // Output: Hello!

const add2 = function(a,b){
    return a+b;
}
const sumOne = add2(4,4);
console.log(sumOne);


// এখানে function কে একটা variable (const/let/var) এর ভেতর রাখছি।
// এটাই হলো function expression।


// Arrow Function Expression=============

const add3 = (a,b) => a+b;
const sumOfAdd3 = add3(10,10);
console.log(sumOfAdd3);

const add4 = (num1,num2,num3,num4) => num1 * num2 * num3 * num4;
const multiply = add4(2,4,5,6);
console.log(multiply);

