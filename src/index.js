const fromZeroToTwenty = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
];

const fromTwentyToHundred = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];
module.exports = function toReadable(number) {
    if (isNaN(number)) return;
    if (number < 0) return;
    if (number < 20) return fromZeroToTwenty[number];
    if (number < 100) {
        const fisrt = Math.floor(number / 10);
        const second = number % 10;

        return (
            fromTwentyToHundred[fisrt] +
            (second ? " " + fromZeroToTwenty[second] : "")
        );
    } else {
        const hund = Math.floor(number / 100);
        const first = number % 100;
        return (
            fromZeroToTwenty[hund] +
            " hundred" +
            (first ? " " + toReadable(first) : "")
        );
    }

    // var converter = require("number-to-words-en");

    // return converter.toWords(number).replace("-", " ");
};
