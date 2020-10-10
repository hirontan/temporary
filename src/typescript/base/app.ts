// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "test",
//   age: 30,
// };

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string, boolean];
// } = {
//   name: "test",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author", true],
// };

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const person = {
  name: "test",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;

// person.role = [0, "admin", "user"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
  console.log(hobby.toUpperCase());
}

if (person.role === ADMIN) {
  console.log("管理者ユーザ");
}
