import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

let today = dayjs();

console.log(today.format("DD MMMM YYYY"));
console.log("5 days later: " + today.add(5, "day").format("DD MMMM YYYY"))
console.log("1 month later: " + today.add(1, "month").format("DD MMMM YYYY"))
console.log("1 month before: " + today.subtract(1, "month").format("DD MMMM YYYY"))