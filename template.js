const first = 'jaan';
const last = 'Pakhi';
const name = first + " " + last;
console.log(name); // eivhabe kora jai kinto onek somoy sapekkho bepar like amader kache onek gula erokom thakle likhte pera hobe;


// ====================Proper way and nice way
// Template string শুধু ভেরিয়েবল না, expression ও calculate করতে পারে:
const a = 10;
const b = 20;
const math = `the sum of ${a} and ${b} is ${a+b}`
console.log(math);

// সাধারণ string আমরা লিখি ' ' (single quote) বা " " (double quote) দিয়ে।
// কিন্তু template string লিখতে হয় backtick (` `) দিয়ে।
const names = "Remon";
const message = `Hello, ${names}! How are you?`;
console.log(message);
// Output: Hello, Remon! How are you?এখানে ${name} দিয়ে ভেরিয়েবলের মান string এর মধ্যে ঢোকানো হয়েছে। এটা string interpolation বলে।


// Multi-line String লেখা=============
// আগে multi-line string লিখতে গেলে অনেক ঝামেলা ছিল (\n দিতে হতো)।
// কিন্তু template string দিয়ে সহজে multi-line string লেখা যায়:

const paragraph = `
This is line one.
This is line two.
This is line three.
`;
console.log(paragraph);

// Function Call ব্যবহার করা যায়=============
function greet(name) {
  return `Hello, ${name.toUpperCase()}!`;
}
console.log(greet("remon"));
// Output: Hello, REMON!

// লিখতে হয় backtick (` `) দিয়ে
// ${ } এর মধ্যে ভেরিয়েবল/এক্সপ্রেশন/ফাংশন রাখা যায়
// Multi-line লেখা যায়

const x = 50;
const y = 60;
const maths = `the sum of ${x} and ${y} is ${x+y}`
console.log(maths);
