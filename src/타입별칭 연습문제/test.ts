// 1
{
  type Person = {
    name: string;
    age: number;
  };
  type getPersonInfoFunc = (val: Person) => Person;
  const user1: Person = { name: "jade", age: 21 };
  const getPersonInfo: getPersonInfoFunc = (inputVal) => inputVal;

  console.log(getPersonInfo(user1));
}

// 2
{
  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };
  type createConfigFunc = (host: string, port: number, ssl: boolean) => Config;
  const createConfig: createConfigFunc = (hostInput, portInput, sslInput) => {
    return {
      host: hostInput,
      port: portInput,
      ssl: sslInput,
    };
  };

  const config = createConfig("localhost", 8080, true);
  console.log(config);
}

// 3
{
  type Rectangle = {
    height: number;
    width: number;
  };
  type calculateAreaFuc = (inputVal: Rectangle) => number;
  const Rect1: Rectangle = {
    height: 10,
    width: 10,
  };
  const calculateArea: calculateAreaFuc = (inputVal) =>
    inputVal.height * inputVal.width;

  console.log(calculateArea(Rect1));
}

// 4
{
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };
  const student1 = {
    name: "jade",
    age: 19,
    grades: [100, 95, 80, 98],
  };

  const calculateAverageGrade: (inputVal: Student) => number = (student) =>
    student.grades.reduce((acc, curr) => acc + curr, 0) / student.grades.length;
  console.log(calculateAverageGrade(student1));
}

// 5
{
  type Response = {
    status: string;
    data: string;
    message: string;
  };
  type createResponseFunc = (
    status: string,
    data: string,
    message: string
  ) => Response;
  const createResponse: createResponseFunc = (status, data, message) => {
    return {
      status: status,
      data: data,
      message: message,
    };
  };
  console.log(createResponse("success", "John", "fetch success"));
}

// 6
{
  type getEmployeeInfoFunc = (employ: Employee) => string;

  type Employee = {
    id: string;
    name: string;
    position: string;
  };

  const getEmployeeInfo: getEmployeeInfoFunc = (employee: Employee) =>
    `${employee.name} works as a ${employee.position} whith ID: ${employee.id}`;
}

// 7
{
  type Circle = {
    radius: number;
  };
  type calculateCircumferenceFunc = (circle: Circle) => number;
  const calculateCircumference: calculateCircumferenceFunc = (circle: Circle) =>
    2 * Math.PI * circle.radius;

  console.log(calculateCircumference({ radius: 3 }));
}

// 8
{
  type Product = { name: string; price: number; inStock: boolean };

  type getDiscountedPriceFunc = (
    product: Product,
    discoutRate: number
  ) => number;
  const getDiscountedPrice: getDiscountedPriceFunc = (
    product: Product,
    discountRate: number
  ) => product.price * ((100 - discountRate) / 100);

  console.log(
    getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10)
  );
}

// 9
{
  type BookInfo = { title: string; author: string; publishedYear: number };
  type getBookSummaryFunc = (bookInfo: BookInfo) => string;
  const getBookSummary: getBookSummaryFunc = (bookInfo: BookInfo) => {
    return `${bookInfo.title} by ${bookInfo.author}, published in ${bookInfo.publishedYear}`;
  };

  console.log(
    getBookSummary({ title: "river", author: "james", publishedYear: 2020 })
  );
}

// 10
{
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };

  type isValidTransactionFunc = (inputObj: Transaction) => boolean;
  const isValidTransaction: isValidTransactionFunc = (inputObj: Transaction) =>
    inputObj.amount > 0;

  console.log(isValidTransaction({id:"1", amount:10, timestamp: "1"}))
  console.log(isValidTransaction({id:"2", amount:0, timestamp: "0"}))
}
