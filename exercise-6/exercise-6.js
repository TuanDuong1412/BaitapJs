// program to convert decimal to binary
function convertToBinary(number) {
  let bin = 0;
  let sodu, i = 1, lan = 1;
  while (number != 0) {
      sodu = number % 2;
      console.log(
          `Lần ${lan++}: ${number}/2, Số dư = ${sodu}, Thương = ${parseInt(number/2)}`
      );
      number = parseInt(number / 2);
      bin = bin + sodu * i;
      i = i * 10;
  }
  console.log(`Binary: ${bin}`);
}

// take input
// let number = prompt('Enter a decimal number: ');

convertToBinary(47);
