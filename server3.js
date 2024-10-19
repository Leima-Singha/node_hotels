//json: javascript object notation
// structured and organized data
// json is rrepresented as string

// example to convert object to json string
const objectToConvert = {
    name: "Alice",
    age: 25
}
const jsonStringified = JSON.stringify(objectToConvert);
console.log(jsonStringified);
console.log(typeof jsonStringified);