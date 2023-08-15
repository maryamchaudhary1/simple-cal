import { firstnumber, secondnumber, thirdnumber } from "./operation.js";
import { calculation } from "./calculation.js";
let finalresult = await calculation(firstnumber, secondnumber, thirdnumber);
console.log(`calculation result is${finalresult}`);
