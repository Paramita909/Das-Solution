// const getPromise = () => {
//     return newPromise((resolve,reject) => {
//         console.log("I am promise");
//         reject("some error")
//     })
// }
// let promise = getPromise();
// promise.catch ((err) => {
//     log("rejected", err);
// });

let marks = [99, 87, 56, 69];
let newMarks = marks.filter((val) => {
    return val>90;
})
console.log(newMarks);
