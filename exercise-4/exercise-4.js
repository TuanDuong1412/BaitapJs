function leapYears(year) {
  // Coding here 
  if (year % 400 === 0) {
    return true;
  } else if (year % 4 !== 0) {
    return false;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }

}
console.log(leapYears(2000));
console.log(leapYears(1985));
console.log(leapYears(2024));