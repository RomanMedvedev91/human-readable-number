module.exports = function toReadable(number) {
    var converter = require("number-to-words-en");
    return converter.toWords(number).replace("-", " ");
};
