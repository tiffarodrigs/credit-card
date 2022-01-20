Describe: creditCardValidator()

Test: "It should multiply the second number in a two-digit number"
Code:
const number = "12"
creditCardValidator(number)
Expected Output: 14

Describe: wordCounter()

Test: "It should return the sum of second number if the result of the second number multiplied by two is greater than 10"
Code:
const number = "15"
creditCardValidator(number)
Expected Output: 11

Test: "It should return the sum of second number if the result of the second number multiplied by two is greater than 10 when the number input is more than 2 digits."
Code:
const number = "1512"
creditCardValidator(number)
Expected Output: 1114

Describe: addedTogether()

Test: "It should return the sum of all of the numbers after the multiplication step."
Code:
const number = "1512"
addedTogether(number)
Expected Output: 1+1+1+4=7

Test: "It should valid if the sum of all of the numbers after the multiplication step is equally divided by 10."
Code:
const number = 4102080860435620
addedTogether(number)
Expected Output: Valid

Describe: testingCreditCardType()

Test: "It should print the credit card bureau based on entered credit card number"
Code:
const number = 4102080860435620
testingCreditCardtype(number)
Expected Output: Visa

Describe: creditCardLength()

Test: "It should only validate credit card numbers that are 15 - 16 digits."
Code:
const number = 4102080860435620
creditCardLengthnumber()
Expected Output: Valid