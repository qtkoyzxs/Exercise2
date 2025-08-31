function isValidPassword(password) {
  let uppercaseCount = 0;
  let digitFound = false;
  let symbolFound = false;

  const symbols = ["_", "!", "?", "*"];

  for (let char of password) {
    if (/[A-Z]/.test(char)) {
      uppercaseCount++;
    } else if (/[0-9]/.test(char)) {
      digitFound = true;
    } else if (symbols.includes(char)) {
      symbolFound = true;
    }
  }

  return uppercaseCount >= 3 && digitFound && symbolFound;
}

console.log(isValidPassword("KURT!"));  
console.log(isValidPassword("kurt!"));  
console.log(isValidPassword("KURt1?"));  
console.log(isValidPassword("ABC*9"));

