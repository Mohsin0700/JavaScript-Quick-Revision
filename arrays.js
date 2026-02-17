// Arrays in JavaScript are used to store multiple values in a single variable. They are ordered collections of items, which can be of any type (numbers, strings, objects, etc.). Arrays are zero-indexed, meaning the first element is at index 0.

const arr = ["Mohsin", "Arbab", "Ali"];
const ages = [28, 26, 32];
// console.log(arr);

// arr.push("First Student"); // Adds an element to the last of an array.
// console.log(arr);

// arr.unshift("Second Student"); // Adds an element to start of an array.
// console.log(arr);

// arr.shift(); // removes an element from the start of an array
// console.log(arr);

// arr.pop(); // removes an element from the end of an array
// console.log(arr);

// const valAtIndex = arr.at(1); // to get the value of an array at a specific index
// console.log(valAtIndex);

// const indexofArbabIs = arr.indexOf("Arbab"); // to get the index of an element in an array
// console.log(indexofArbabIs);

// const isMohsinThere = arr.includes("Mohsin"); // returns true if the element is present in the array, otherwise returns false
// console.log(isMohsinThere);

// Note: ("!") Exclamation mark is used to negate a boolean value. For example, if we want to check if "Mohsin" is not present in the array, we can use the following code:

// const isMohsinNotThere = !arr.includes("Mohsin");
// console.log(isMohsinNotThere);

// const mergedArr = arr.concat(ages);  // It takes one or more array and creates a new array.
// console.log(mergedArr);

// const nameAndAges = [];
// arr.forEach((name, index) => {               //  array.forEach method runs a map/loop  as                                              //  on that array and van do any operation
//     nameAndAges.push(name);                  //  as many time as array length
//     nameAndAges.push(ages[index]);
// });

// console.log("Age wise Student Names ::::::: ", nameAndAges);

// const arr1 = [1, 2, 3, 4, 5, 6];                                                             //This Method is used to copy
// console.log("First Serialized Array:::::::::::::", arr1);                                    //Some element of an array into same array.
// // const arr2 = arr1.copyWithin(0, 5, 6);
// console.log("Copied last element of same array and replaced with '0' Index element", arr2);
// console.log("Now copying 4,5 from first array and placing at the start of same array");
// console.log(arr1.copyWithin(0, 3, 5));

// Practice
const arr1 = ["Mohsin", "Arbab", "Ali", "Adil", "Arsalan", "Uzair", "Zain"];
// const arr2 = arr1.copyWithin(0, 4, 6); // It should print [Arsalan, Uzair ...........]
// console.log(arr2);
// Let's have a self created task. I have an array of students with their positions. let's print them first with their positions

arr1.forEach((studentName, index) => {
    console.log(`MR.${studentName} is at ${index + 1} position`);
});
// Now I will find position of a student by his name
arr1.forEach((studentName, index) => {
    if (studentName === "Adil") {
        console.log(`Adil is at ${index + 1} position`);
    }
    // Now I will bring Adil at first position
    arr1.forEach((
        studentName, index,
    ) => {
        let stdName;

    });
});

