const differnce = (x,y) => x-y ;
const gun = (first , second , third) => first * second * third ;

const getAge = (person) => person.age; //person.age return করে, মানে যেই object পাঠাবে তার মধ্যে age property খুঁজে বের করবে।
const student = { name: 'rimo', age: 23};
const age = getAge(student);
console.log(age);


const getThird = numbers => numbers[2];
const third = getThird([23,45,78,90]);
console.log(third);

const getPI = () => Math.PI;
console.log(getPI());

const doMath = (x,y,z) => {
    const sum = x+y+z ;
    const mult = x*y*z;
    const result = sum + mult;
    return result;

}
const funalResult = doMath(2,6,9);
console.log(funalResult);

