
// 1
{
  const add = (a: number, b: number) => {
    console.log(`a + b: ${a + b}`);
  };
  add(1, 2);
}

// 2
{
  const greet = (name: string) => {
    console.log(`Hello, ${name}!`);
  };
  greet("programmers");
}

// 3
{
  const sumAll = (...args: number[]) => {
    return console.log(args.reduce((acc, curr) => acc + curr, 0));
  };
  sumAll(1, 2, 3, 4);
}

// 4
{
  const sum = (a: number, b: number = 0) => {
    console.log(`a + b: ${a + b}`);
  };
  sum(5);
  sum(5, 1);
}

// 5
{
  const multiply = (a: number, b: number) => {
    console.log(`a * b: ${a * b}`);
  };
  multiply(3, 2);
}

// 6
{
  const concatStringAndNumber = (a: string, b: number) => {
    console.log(a + b);
  };
  concatStringAndNumber("결과: ", 1);
}

// 7
{
  const greet = (name: string, message: string = "Welcome") => {
    console.log(`${message}, ${name}!`);
  };
  greet("programmers");
}

// 8
{
  const findMax = (arr: number[]) => {
    const res = arr.reduce((acc, curr) => (acc > curr ? acc : curr), 0);
    console.log(res);
  };
  findMax([1, 2, 3, 4, 5]);
}

// 9
{
  const double = (num: number) => {
    console.log(num * 2);
  };
  double(5);
}

// 10
{
  const getInfo = (inputVal: unknown) => {
    const inputType = typeof inputVal;
    if (inputType === "string") {
      console.log(`Name: ${inputVal}`);
    } else if (inputType === "number") {
      console.log(`Age: ${inputVal}`);
    }
  };
  getInfo("jade");
  getInfo(21);
}