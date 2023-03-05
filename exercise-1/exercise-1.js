function repeatString(string, num) {
  // Coding here
  // return string.repeat(num)
  if(!string || !num) return;
  let result ="";

  // const array = Array.from({length:num}, (_,i) => i +1)


  for (let i = 0; i <num; i++) {
    result +=string;
  }
  return result;
}
console.log(repeatString('hey',3));
