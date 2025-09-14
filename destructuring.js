// জাভাস্ক্রিপ্টে Object Destructuring হলো এমন একটা সিনট্যাক্স যেখানে আমরা object থেকে আলাদা আলাদা property আলাদা ভ্যারিয়েবল এ নিতে পারি সহজভাবে।

// সাধারণ পদ্ধতি (Destructuring ছাড়া):
// const person = {
//   name: "Remon",
//   age: 22,
//   country: "Bangladesh"
// };

// const name = person.name;
// const age = person.age;
// const country = person.country;

// console.log(name, age, country);
// এখানে অনেক লাইন কোড লিখতে হয়েছে।

// =====================
// Destructuring ব্যবহার করলে:
const person = {
  name: "Remon",
  age: 22,
  country: "Bangladesh"
};

const { name, age, country } = person;

console.log(name, age, country);
// এক লাইনে সব property আলাদা করা গেল।


const actor = {
    name: "Tanvir Mahmud",
    ages: 32,
    phone: "01317873456",
    money: 127648793458795
}
const {phone,ages,money} = actor;
console.log(phone);
console.log(ages);
console.log(phone);
console.log(money);


// Nested Object Destructuring===========
const user = {
  id: 1,
  profile: {
    username: "remon22",
    email: "remon@example.com"
  }
};

const { profile: { username, email } } = user;

console.log(username); // "remon22"
console.log(email);    // "remon@example.com"

// { } এর ভিতরে property নাম লিখলে আলাদা ভ্যারিয়েবল এ পাওয়া যায়।
// ভ্যারিয়েবল নাম পরিবর্তন, default value, nested object ইত্যাদি করা যায়।