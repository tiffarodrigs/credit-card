const creditCardNumber = [4, 1, 0, 2, 0, 8, 0, 8, 6, 0, 4, 3, 5, 6, 2, 0];

let multiplyEveryOtherNumber = creditCardNumber.map(function (number, index) {
    if (index % 2 != 0) {
      if (number * 2 > 9) {
        let numberMultiplied = number * 2;
        let tooManyDigits = numberMultiplied.toString().split("");
        number = parseInt(tooManyDigits[0]) + parseInt(tooManyDigits[1]);
        return number;
      } else {
      return number * 2;
      }
    } else {
      return number;
    }
});

let newNumber = 0;
let validFlag = -1;
let addedTogether = multiplyEveryOtherNumber.map(function(number, index) {
  newNumber += number;
  if (index >= creditCardNumber.length - 1){
    console.log("inside if");
    if (newNumber % 10 === 0) {
      validFlag = 1;
      return newNumber;
    } else {
      validFlag = -1;
      return newNumber;
    }
  }
});

console.log(newNumber);
console.log(validFlag);

testCardType();

function testCardType() {
    if (creditCardNumber[0] === 4) {
        return "Visa";
    } else if (creditCardNumber[0] === 5){
        return "Mastercard";
    } else if (creditCardNumber[0] === 6) {
        return "Discover";
    } else if ((creditCardNumber[0] === 3 && creditCardNumber[1] === 4 ) || (creditCardNumber[0] === 3 && creditCardNumber[1] === 7)) {
        return "American Express";
    } else {
        return "Other credit card"
    }
};

//if index=0
//{
 // elemt ====4 --->visualViewport;
 // elemt====5 --->mastercard;
//}
   console.log(testCardType());



