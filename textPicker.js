/* eslint-disable array-bracket-spacing */
/* eslint-disable es5/no-arrow-functions */
/* eslint-disable quotes */
/* eslint-disable consistent-this */
/* eslint-disable comma-dangle */
/* eslint-disable es5/no-shorthand-properties */
/* eslint-disable curly */
/* eslint-disable lines-around-comment */
/* eslint-disable brace-style */
/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */



function pickLine() {
    var greetArray = ["Hello, ", "Greetings, ", "Hey dawg, ", "Sup man, "];
    var firstArray = ["my cat ", "my uncle ", "my neighbour "];
    var secondArray = ["is pressing charges against me", "died today", "stole my car"];
    var greet = greetArray[Math.floor(Math.random() * greetArray.length)];
    var first = firstArray[Math.floor(Math.random() * firstArray.length)];
    var second = secondArray[Math.floor(Math.random() * secondArray.length)];
    var string = greet + first + second;
    return string;
}

module.exports = pickLine;
