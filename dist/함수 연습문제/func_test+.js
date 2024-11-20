"use strict";
// 1
{
    const sumAllNumbers = (...args) => {
        const sum = (arr) => {
            return arr.reduce((acc, curr) => acc + curr, 0);
        };
        return args.map((arr) => `sum: ${sum(arr)}`);
    };
    const arr1 = [1, 2, 3, 4];
    const arr2 = [2, 4, 6, 8];
    const arr3 = [1, 3, 5, 7];
    console.log(sumAllNumbers(arr1, arr2, arr3));
}
// 2
{
    const doubleValue = (inputVal) => {
        if (typeof inputVal === "number")
            console.log(inputVal * 2);
        else if (typeof inputVal === "string")
            console.log(inputVal.length * 2);
    };
    doubleValue(12);
    doubleValue("hello");
}
// 3
{
    const multiplyArrays = (arr1, arr2) => {
        const res = [];
        const roops = arr1.length < arr2.length ? arr1.length : arr2.length;
        for (let i = 0; i < roops; i++) {
            res.push(arr1[i] * arr2[i]);
        }
        return res;
    };
    const arr1 = [1, 0, 1, 0];
    const arr2 = [0, 1, 0, 1, 1];
    console.log(multiplyArrays(arr1, arr2));
}
// 4
{
    const intersection = (arr1, arr2) => arr1.filter((val) => arr2.includes(val));
    const arr1 = [1, 2, 3, 4];
    const arr2 = [1, 3, 5, 7];
    intersection(arr1, arr2);
}
// 5
{
    const formatInfo = (inputObj) => {
        if (inputObj.name) {
            console.log(`Name: ${inputObj.name}`);
        }
        else if (inputObj.age) {
            console.log(`Age:${inputObj.age}`);
        }
    };
    const obj1 = {
        name: "jade",
    };
    const obj2 = {
        age: 21,
    };
    formatInfo(obj1);
    formatInfo(obj2);
}
// 6
{
    const combineStrings = (str1, str2) => {
        return str2 + str1;
    };
    const str1 = "students!";
    const str2 = "hello, ";
    console.log(combineStrings(str1, str2));
}
// 7
{
    const squareArray = (arr) => {
        return arr.map((val) => val ** 2);
    };
    const arr = [1, 2, 3, 4];
    console.log(squareArray(arr));
}
// 8
{
    const addStringAndNumber = (str, num) => {
        return str + num;
    };
    console.log(addStringAndNumber("i like ", 7));
}
// 9
{
    const compareValues = (str, num) => {
        return str.length > num ? "String is larger" : "Number is larger";
    };
    console.log(compareValues("one", 1));
}
