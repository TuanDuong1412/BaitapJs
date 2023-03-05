function reverseString(string) {
  // Coding here

  let arr = string.split('');

  let arr2 = arr.reverse().join('');

  return arr2


    //chuyeern chuoi ve ham roi dao nguoc roi lai chuyen ve chuoi
}
console.log(reverseString('hello there'));