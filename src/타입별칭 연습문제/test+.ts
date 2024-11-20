// 1
{
  type Action<T> = {
    type: string;
    payload: T;
  };

  const createAction = <T>(type: string, payload: T): Action<T> => {
    return {
      type,
      payload,
    };
  };

  const action1 = createAction("ADD_ITEM", { id: 1, name: "item" });
  const action2 = createAction("UPDATE_ITEM", 42);
  const action3 = createAction("SET_STATUS", "success");

  console.log(action1);
  console.log(action2);
  console.log(action3);
}

// 2
{
  type NumberOrString = {
    id: number | string;
    name: string;
  };

  const createObject: (id: number | string, name: string) => NumberOrString = (
    id,
    name
  ) => {
    return {
      id,
      name,
    };
  };
  const object1 = createObject(1, "Alice");
  const object2 = createObject("123", "Bob");

  console.log(object1);
  console.log(object2);
}

// 3
{
  type Point = { x: number; y: number };
  const calculateDistance: (a: Point, b: Point) => number = (a, b) =>
    Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
  const pointA = { x: 10, y: 10 };
  const pointB = { x: 0, y: 0 };
  console.log(calculateDistance(pointA, pointB));
}

// 4
{
  type FetchRsult = {
    status: string;
    data?: string;
    message?: string;
  };
  type fetchDataFunc = () => FetchRsult;

  const fetchData: fetchDataFunc = () => {
    return { status: `loading` };
  };
}

// 5
{
  type NullOrUndefined<T> = T extends null | undefined ? true : false;
  const getValue = <T>(inputVal: T): boolean =>
    inputVal === null || inputVal === undefined;

  const check1 = getValue(null);
  const check2 = getValue(undefined);
  const check3 = getValue("Hello");

  console.log(check1); 
  console.log(check2); 
  console.log(check3); 
}