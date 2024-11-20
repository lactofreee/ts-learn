// 1
{
  interface Person {
    name: string;
    age: number;
  }
  const person: Person = {
    name: "jade",
    age: 14,
  };
  console.log(person);
}

// 2
{
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }
  const car: Car = {
    brand: "bentz",
    model: "E class",
    start() {
      console.log("start!");
    },
  };
  console.log(car.brand, car.model);
  car.start();
}
// 3
{
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }
  const employee1: Employee = {
    name: "jade",
    position: "engineer",
    department: "FE",
  };
  const employee2: Employee = {
    name: "tom",
    position: "engineer",
  };
  console.log(employee1, employee2);
}

// 4
{
  interface Team {
    name: string;
    members: string[];
  }
  const FE_Team: Team = {
    name: "mogakko",
    members: ["a", "b", "c", "d"],
  };
  console.log(`Team ${FE_Team.name} icludes ${FE_Team.members}`);
}

// 5
{
  interface Animal {
    name: string;
    age: number;
  }

  interface Dog extends Animal {
    breed: boolean;
  }

  const ddongGae: Dog = {
    name: "똥개",
    age: 4,
    breed: true,
  };
}

// 6
{
  interface Person {
    name: string;
    age: number;
    greet(): string;
  }

  const person: Person = {
    name: "jade",
    age: 20,
    greet() {
      return `Hello, my name is ${person.name}`;
    },
  };
  console.log(person.greet());
}

// 7
{
  interface Shape {
    area(): number;
  }
  interface Circle extends Shape {
    radius: number;
  }
  interface Rectangle extends Shape {
    width: number;
    height: number;
  }
}

// 8
{
  interface Person {
    name: string;
    age: number;
  }
  interface Address extends Person {
    street: string;
    city: string;
    zipcode: number;
  }
  const Contact: Address = {
    name: "jade",
    age: 29,
    street: "강남대로",
    city: "seoul",
    zipcode: 1231,
  };
  console.log(Contact);
}

// 9
{
  interface Dictionary {
    [key: string]: string;
  }
  const dictionary: Dictionary = {
    a: "a",
    b: "b",
    c: "c",
  };
  console.log(dictionary);
}

// 10
{
  interface Operation {
    func(a: number, b: number): number;
  }
  
  const add: Operation = {
    func: (a, b) => {
      return a + b;
    },
  };
  
  const subtract: Operation = {
    func: (a, b) => {
      return a - b;
    },
  };

  console.log(add.func(10, 5));
  console.log(subtract.func(10, 5));
  
}