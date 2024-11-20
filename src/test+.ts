// 1
const sol_1 = () => {
  let employee: {
    id: number;
    name: string;
    contact: {
      email: string;
      phone: String;
    };
    department: string;
  } = {
    id: 123,
    name: "John Doe",
    contact: {
      email: "john.doe@example.com",
      phone: "123-456-7890",
    },
    department: "Engineering",
  };
  console.log(employee);
};
sol_1();

// 2
const sol_2 = () => {
  let students: { name: string; age: number; grade: string }[] = [
    { name: "Alice", age: 22, grade: "A" },
    { name: "Bob", age: 24, grade: "B" },
    { name: "Charlie", age: 21, grade: "C" },
  ];
  console.log(students);
};
sol_2();

// 3
const sol_3 = () => {
  let numbers: number[] = [10, 20, 30, 40, 50];
  const res = numbers.reduce((acc, curr) => (acc > curr ? acc : curr), 0);
  return console.log(res);
};
sol_3();

// 4
const sol_4 = () => {
  let users: { name: string; age: number; active: boolean }[] = [
    { name: "Alice", age: 30, active: true },
    { name: "Bob", age: 25, active: false },
    { name: "Charlie", age: 35, active: true },
  ];
  console.log(users);
};
sol_4();

// 5
const sol_5 = () => {
  let nestedArray: [string[], number[], string[]] = [
    ["apple", "banana"],
    [1, 2, 3],
    ["cherry"],
  ];
  console.log(nestedArray);
};
sol_5();

// 6
const sol_6 = () => {
  let res: string[] = [];
  let words: string[] = ["apple", "banana", "cherry", "kiwi"];
  words.forEach((val) => {
    if (val.length >= 5) {
      res.push(val);
    }
  });
  return console.log(res);
};
sol_6();

// 7
const sol_7 = () => {
  let items: (
    | { id: number; name: string; price: number }
    | [string, number]
  )[] = [
    { id: 1, name: "Item1", price: 100 },
    { id: 2, name: "Item2", price: 200 },
    ["discount", 10],
  ];
  console.log(items);
};
sol_7();

// 8
const sol_8 = () => {
  let profile: {
    user: {
      name: string;
      age: number;
    };
    preferences: string[];
    isActive: boolean;
  } = {
    user: { name: "John", age: 30 },
    preferences: ["coding", "reading", "travelling"],
    isActive: true,
  };
  console.log(profile);
};
sol_8();

// 9
const sol_9 = () => {
  let mixedData: [string, number, boolean, string, number] = [
    "apple",
    10,
    true,
    "banana",
    20,
  ];
  console.log(mixedData);
};
sol_9();

// 10
const sol_10 = () => {
  let company: {
    name: string;
    address: {
      street: string;
      city: string;
      country: string;
    };
  } = {
    name: "Tech Corp",
    address: {
      street: "123 Main St",
      city: "Tech City",
      country: "Techland",
    },
  };
  console.log(company)
};
sol_10();
