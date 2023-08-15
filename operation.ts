export {}
import inquirer from "inquirer";

const firstinput = await inquirer.prompt([
    {
        name:"num1",
        type:"number",
        message:"Enter first number"

    }
]);
const secondinput = await inquirer.prompt([
    {
        name:"num2",
        type:"number2",
        message:"Enter second number"
    }
]);
const thirdinput = await inquirer.prompt([
    {
        name:"operation",
        type:"list",
        message:"select which operation you perfrom",
        choices:["+","-","*","/"]
            
        },
    
]);
let firstnumber = firstinput.num1;
let secondnumber = secondinput.num2;
let thirdnumber = thirdinput.operation;
export {firstnumber,secondnumber,thirdnumber};


