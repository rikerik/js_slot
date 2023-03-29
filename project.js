// 1. Money input
// 2. Determine bet lines
// 3. Bet collect
// 4. Spin
// 5. Win check
// 6. Give money to user
// 7. Play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount");
        }
        else {
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const NumberOfLines = parseFloat(lines);

        if (isNaN(NumberOfLines) || NumberOfLines <= 0 ||  NumberOfLines > 3) {
            console.log("Invalid number of lines");
        }
        else {
            return NumberOfLines;
        }
    }
};


let balance = deposit();
const NumberOfLines = getNumberOfLines();

