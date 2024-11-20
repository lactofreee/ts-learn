// 1
{
  const processInput: (
    inputVal: string | number | boolean
  ) => string | number | boolean = (inputVal) => {
    if (typeof inputVal === "string") {
      return inputVal.toUpperCase();
    } else if (typeof inputVal === "number") {
      return inputVal ** 2;
    } else if (typeof inputVal === "boolean") {
      return inputVal ? "YES" : "NO";
    }
    throw new Error("invalid input");
  };
  console.log(processInput("hello"));
  console.log(processInput(10));
  console.log(processInput(true));
}

// 2
{
  const sol: (inputVal: string | number) => string | number = (inputVal) => {
    if (typeof inputVal === "string") return inputVal[0];
    else if (typeof inputVal === "number") return inputVal.toString()[0];
    else {
      throw new Error("invalid input");
    }
  };
  console.log(sol("hello"));
  console.log(sol(141352));
}

// 3
{
  const person = { name: "john", age: 20 };
  const employee = { jobtitle: "front", salary: 5000 };

  const combinePersonAndEmployee: (
    person: { name: string; age: number },
    employee: { jobtitle: string; salary: number }
  ) => { name: string; age: number } & { jobtitle: string; salary: number } = (
    person,
    employee
  ) => {
    return {
      ...person,
      ...employee,
    };
  };
  console.log(combinePersonAndEmployee(person, employee));
}

// 4
{
  const obj1 = {
    id: 10,
  };
  const obj2 = {
    id: "hello",
  };
  const getIdValue: (obj: { id: number | string }) => number = (obj) => {
    const objId = obj.id;
    if (typeof objId === "number") return objId;
    if (typeof objId === "string") return objId.length;
    else {
      throw new Error("invalid input");
    }
  };
  console.log(getIdValue(obj1));
  console.log(getIdValue(obj2));
}

// 5
{
  const date: Date = new Date();
  const formatDate: (dayInput: string | Date) => string = (dayInput) => {
    if (typeof dayInput === "string") {
      return dayInput;
    } else if (dayInput instanceof Date) {
      const year = dayInput.getFullYear();
      const month = dayInput.getMonth() + 1;
      const day = dayInput.getDate();
      return `${month}/${day}/${year}`;
    } else {
      throw new Error("invalid input");
    }
  };
  console.log(formatDate("2024-11-19"));
  console.log(formatDate(date));
}

// 6
{
  const sol: (inputVal: string | number) => string | number = (inputVal) => {
    if (typeof inputVal === "number") return inputVal.toString();
    if (typeof inputVal === "string") return Number(inputVal);
    else {
      return NaN;
    }
  };
  console.log(sol(124124));
  console.log(sol("hello"));
  console.log(sol("214124"));
}

// 7
{
  const Person = {
    name: "jade",
    age: 24,
  };
  const Address = {
    street: "강남대로",
    city: "seoul",
    zipcode: 123123,
  };
  const combinePersonAndAddress: (
    person: { name: string; age: number },
    address: { street: string; city: string; zipcode: number }
  ) => { name: string; age: number } & {
    street: string;
    city: string;
    zipcode: number;
  } = (person, address) => {
    return {
      ...person,
      ...address,
    };
  };
  console.log(combinePersonAndAddress(Person, Address));
}

// 8
{
  const compareValues: (
    val1: string | number,
    val2: string | number
  ) => boolean = (val1, val2) => {
    if (typeof val1 !== typeof val2) throw new Error("invalid input");
    else if (typeof val1 === "string" && typeof val2 === "string") {
      return val1.length > val2.length ? true : false;
    } else if (typeof val1 === "number" && typeof val2 === "number") {
      return val1 > val2 ? true : false;
    } else {
      throw new Error("invalid input");
    }
  };
  console.log(compareValues(10, 5));
  console.log(compareValues("aaaaa", "bbbbbbbbb"));
}

// 9
{
  const checkEvenOdd: (inputVal: number | string) => string = (inputVal) => {
    if (typeof inputVal === "number")
      return inputVal % 2 === 0 ? "Even" : "Odd";
    if (typeof inputVal === "string")
      return inputVal.length % 2 === 0 ? "Even Length" : "Odd length";
    else {
      throw new Error("invalid input");
    }
  };
  console.log(checkEvenOdd(15));
  console.log(checkEvenOdd("hello"));
}

// 10
{
  const user = {
    name: "jade",
    age: 13,
  };

  const contact1 = {
    email: `dawwda@gmail.com`,
    phoneNumber: 111222333,
  };

  const contact2 = {};

  const mergeContactInfo: (
    user: { name: string; age: number },
    contact: { email?: string; phoneNumber?: number }
  ) => { name: string; age: number } & {
    email?: string;
    phoneNumber?: number;
  } = (user, contact) => {
    return {
      ...user,
      ...contact,
    };
  };
  console.log(mergeContactInfo(user, contact1));
  console.log(mergeContactInfo(user, contact2));
}
