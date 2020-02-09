function sumFor(input) {
  let sum = 0;
  for (const i of input) {
    sum += i;
  }
  return sum;
}

function sumWhile(input) {
  let i = 0;
  let sum = 0;
  while (i < input.length) {
    sum += input[i];
    i++;
  }
  return sum;
}

function sumRecursion(input, i) {
  if (i < input.length) {
    return input[i] + sumRecursion(input, i + 1);
  }
  return 0;
}

const sumTheSimpleWay = (input) => _.reduce(input, function (mem, cur) { return mem + cur; });

const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumFor(testData));
console.log(sumWhile(testData));
console.log(sumRecursion(testData, 0));
console.log(sumTheSimpleWay(testData));
