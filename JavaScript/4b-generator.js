function* genFunction() {
  console.log("First");
  yield 10;
  console.log("Second");
  yield 20;
  console.log("Third");
  yield 30;
}

let gen = genFunction();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
