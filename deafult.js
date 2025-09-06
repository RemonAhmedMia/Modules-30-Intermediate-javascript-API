function add(num1,num2){
    const sum = num1 + num2;
    return sum;
};
const final = add(20,20);
console.log(final);

// ======================================

function plus(numb1,numb2=0){
    const added = numb1+ numb2;
    return added;
}
const output = plus(5);
console.log(output);

function fullName(first, last=''){
    const full = first + " " + last;
    return full;
}
const finalName = fullName('Rimon' , 'Ahmed');
console.log(finalName);
