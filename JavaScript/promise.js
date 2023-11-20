const myPromise = new Promise((resolve, reject) => {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    resolve(randomNumber);
  } else {
    reject("Error: Number is too large");
  }
});

// Use the Promise
myPromise
  .then((result) => {
    console.log(`Resolved: ${result}`);
  })
  .catch((error) => {
    console.error(`Rejected: ${error}`);
  });
