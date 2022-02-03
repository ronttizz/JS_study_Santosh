// const grade = 12;
// if (grade > 10) {
//   console.log("Passing grade");
// } else if (grade === 10) {
//   console.log("Passing on the limit");
// } else {
//   console.log("Failing grade");
// }

// let age;
// function canVote(age) {
//   if (age >= 25) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function canVote(age) {
//   return age >= 25;
// }

// console.log(canVote(26));

// const items = ["Pen", "Paper", "staples"];
// const deletedItems = items.splice(0, 1);
// console.log(deletedItems);
// console.log(items);

// const grades = [5, 2, 10];
// const sum = grades.reduce((total, current) => {
//   return total * current;
// }, 1);

// console.log(sum);

// const dimensions = [20, 5, 45];

// const [width, height, xyz] = dimensions;

// console.log(width);
// console.log(height);
// console.log(xyz);

const lat = [5.234];
const lng = [1.412];
const point = [...lat, ...lng];
console.log(point); // [5.234, 1.412];
