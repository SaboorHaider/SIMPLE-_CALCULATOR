#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.bgBlueBright("\n\t__________Wellcome To Simple Calculator__________"));
const asnwer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    { message: (chalk.green("Select one of the operators to perform operation")),
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
if (asnwer.operator === "Addition") {
    console.log("Your value is", asnwer.firstNumber + asnwer.secondNumber);
}
else if (asnwer.operator === "Subtraction") {
    console.log("Your value is", asnwer.firstNumber - asnwer.secondNumber);
}
else if (asnwer.operator === "Multiplication") {
    console.log("Your value is", asnwer.firstNumber * asnwer.secondNumber);
}
else if (asnwer.operator === "Division") {
    console.log("Your value is", asnwer.firstNumber / asnwer.secondNumber);
}
else {
    console.log(chalk.red("Please Select Valid Operater"));
}
