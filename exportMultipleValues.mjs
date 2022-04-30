// | Variable       | Type     | Description/Value                                             |
// | -------------- | -------- | ------------------------------------------------------------- |
// | myArray        | Array    | ["camel", 265, true, "5.6"]                                   |
// | bulb           | Object   | {watts: 10, type: "LED"}                                      |
// | multiplyByFour | Function | Should accept a number and return a number multiplied by four |

const myArray = ["camel", 265, true, "5.6"];
const bulb = { watts: 10, type: "LED" };
function multiplyByFour(num) {
  return num * 4;
}
export { myArray, bulb, multiplyByFour };
