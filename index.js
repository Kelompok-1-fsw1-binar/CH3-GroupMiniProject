const math = require("./scripts/mini-task1");
const fs = require("fs");

// Mini Challange 1
console.log(`add 2 + 3 = ${math.add(2, 3)}`);
console.log(`subtract 5 - 3 = ${math.subtract(5, 3)}`);
console.log(`multiply 2 * 3 = ${math.multiply(2, 3)}`);
console.log(`divide 6 / 3 = ${math.divide(6, 3)}`);

//Mini Challange 2
console.log("\n\n================================================");
console.log("Baca Log");
const bacaLog = fs.readFileSync("./scripts/log.txt", "utf-8");
console.log({ bacaLog });
