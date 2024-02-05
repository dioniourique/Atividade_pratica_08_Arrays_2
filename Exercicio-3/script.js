let perfectNumbers = [];
let num = 2;

while (perfectNumbers.length < 4) {
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) {
      if (i * i != num) sum = sum + i + num / i;
      else sum = sum + i;
    }
  }
  if (sum == num && num != 1) perfectNumbers.push(num);
  num++;
}

console.log(perfectNumbers);
document.write(perfectNumbers);
