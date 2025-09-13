// ... এই তিনটা ডটকে spread operator বলে।
// এর কাজ হলো:
// Array বা Object এর ভেতরের জিনিসগুলো ছড়িয়ে দেওয়া।
// মানে ভেতরের element / property গুলো বের করে আলাদা আলাদা করে ব্যবহার করা।

const max = Math.max(5,78,90,34,23,89,76);
console.log(max);

const numbrs = [30,43,234,567,90,56];
console.log(...numbrs); //ekhane ... na dile pura array ta k show korbe, ... dile value gula k dhekabe

const arrayMax = Math.max(...numbrs); //only nubers dile NaN dhekabe, ... dile max value k dhekabe
console.log(arrayMax);


// spread operator to copy=======

const friends = [ 20,30,45.78,33];
const bondhu = friends;
const dosto = [...friends];
friends.push(100);
console.log(dosto);
console.log(friends);

// ********************

const num =[40,50,60];
const allNum = [10,20,30,...num,70,80,90,100];
console.log(...num);
console.log(...allNum);