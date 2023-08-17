const courses = ["JavaScript", "ReactJS", "NodeJS"];

for (let item in courses) {
  console.log(item);
}

for (let item of courses) {
  console.log(item);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const copy = [];
nums.forEach((element) => {
  copy.push(element * element);
});

console.log(copy);

const array = ["a", "b", "c"];
const it = array[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
