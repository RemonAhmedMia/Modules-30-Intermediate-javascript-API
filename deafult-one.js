function add(num1 , num2) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
 const finalResult = add(5,7);
 //const finalResult = add(5); ekhane kono value asign na korle er output ashbe NaN ,karon jeta asign korbo na setar man asbe undifined ar undifined er sathe kono kichu jug hole er man ashbe NaN karon kono songkha na eita;

 function add(num1 , num2=0) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
 const finalOutput = add(5); //ekhetre amra jodi perameeter e kono value na dei tobe uporer perameeter e deafult value diye dibo tokhn value asign na korle deafult value k dhore nibe;

 function fullNames (first, last= ''){
    const full = first + " " + last;
    return full;
 }
 const nijerName = fullNames("Rimon", "Ahmed");
 console.log(nijerName);
 
//  **Default parameter মানে হলো – যদি কোনো ফাংশন কল করার সময় argument না দাও, তবে একটি ডিফল্ট মান আগে থেকেই সেট করা থাকবে।