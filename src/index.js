var converter = require("number-to-words-en");

module.exports = function toReadable(number) {
    return converter.toWords(number).replace("-", " ");
};
