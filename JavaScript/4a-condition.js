const checkPalindrome = (string) => {
  const len = string.length;

  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return `"${string}" is not a palindrome`;
    }
  }
  return `"${string}" is a palindrome`;
};

const string = "racecar";
const value = checkPalindrome(string);
console.log(value);
