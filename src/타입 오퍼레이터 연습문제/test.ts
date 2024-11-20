// 1
{
  const printValue: (inputVal: string | number) => string | number = (
    inpupVal
  ) => {
    return inpupVal;
  };
  console.log(printValue("hello"));
  console.log(printValue(100));
}

// 2
{
  const doubleOrLength: (inputVal: string | number) => number = (inputVal) => {
    if (typeof inputVal === "string") return inputVal.length * 2;
    if (typeof inputVal === "number") return inputVal * 2;
    throw new Error("invalid input");
  };
  console.log(doubleOrLength("hello"));
  console.log(doubleOrLength(100));
}

// 3
{
  const man: {
    name: string;
    age: number;
  } = {
    name: "jade",
    age: 20,
  };
  const worker: {
    jobTitle: string;
    salary: number;
  } = {
    jobTitle: "developer",
    salary: 100,
  };

  const mergeObjects: (
    man: {
      name: string;
      age: number;
    },
    worker: {
      jobTitle: string;
      salary: number;
    }
  ) => {
    name: string;
    age: number;
  } & {
    jobTitle: string;
    salary: number;
  } = (man, worker) => {
    return {
      ...man,
      ...worker,
    };
  };
  console.log(mergeObjects(man, worker));
}

// 4
{
  const getFirstElement: (
    arr: number[] | string[]
  ) => number | string | undefined = (arr) => {
    if (arr[0]) return arr[0];
    else {
      return undefined;
    }
  };
  console.log(getFirstElement([1, 2, 3]));
  console.log(getFirstElement(["a", "b", "c"]));
  console.log(getFirstElement([]));
}

// 5
{
  const updateAddress: (
    val1: string | number,
    val2: string | number
  ) => boolean = (val1, val2) => val1 === val2;
  console.log(updateAddress("a", "a"));
  console.log(updateAddress("a", 1));
  console.log(updateAddress(1, 1));
}

// 6
{
  const updateAddress: (
    obj: { name: string; age: number },
    address?: string
  ) => { name: string; age: number } & { address?: string } = (
    obj,
    address
  ) => {
    if (address) {
      return {
        ...obj,
        address,
      };
    } else {
      return obj;
    }
  };
  console.log(updateAddress({ name: "John", age: 20 }, "seoul"));
  console.log(updateAddress({ name: "John", age: 20 }));
}

// 7
{
  const maxValue: (
    val1: string | number,
    val2: string | number
  ) => string | number = (val1, val2) => {
    if (typeof val1 !== typeof val2) {
      throw new Error("invalid input");
    }
    if (typeof val1 === "string" && typeof val2 === "string") {
      return val1.length > val2.length ? val1 : val2;
    }
    if (typeof val1 === "number" && typeof val2 === "number") {
      return val1 > val2 ? val1 : val2;
    }
    throw new Error("invalid input");
  };

  console.log(maxValue(10, 20));
  console.log(maxValue("apple", "banana"));
}

// 8
{
  function getValue(inpupVal: number): string;
  function getValue(inpupVal: string): string;
  function getValue(inputVal: string | number): string {
    return `${inputVal}`;
  }
  console.log(getValue("hello"));
  console.log(getValue(100));
}

// 9
{
  const person = { name: "john", age: 20 };
  const contact = { email: "email@gmail.com" };

  const createContact: (
    person: { name: string; age: number },
    contact: { email: string }
  ) => { name: string; age: number } & { email: string } = (
    person,
    contact
  ) => {
    return {
      ...person,
      ...contact,
    };
  };
  console.log(createContact(person, contact));
}

// 10
{
  const getAge: (age: string | number) => number = (age) => {
    if (typeof age === 'string') return Number(age)
    return age
  }
  console.log(getAge('10'))
  console.log(getAge(10))
}