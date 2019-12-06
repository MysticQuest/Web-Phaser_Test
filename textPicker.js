/* eslint-disable es5/no-block-scoping */
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
    const greetArray = ["Hello, ", "Greetings, ", "Hey dawg, ", "Sup man, ", "I've been waiting in queue for hours and ", "Help me, "];
    const firstArray = ["my cat ", "my uncle ", "the neighbour ", "my ex-wife ", "my dog ", "my lawyer ", "a kid "];
    const secondArray = ["is pressing charges against me.", "died today...", "stole my car!", "has been deported!", "is talking shit about me!"];
    const greet = greetArray[Math.floor(Math.random() * greetArray.length)];
    const first = firstArray[Math.floor(Math.random() * firstArray.length)];
    const second = secondArray[Math.floor(Math.random() * secondArray.length)];
    const string = greet + first + second;
    return string;
}

module.exports = pickLine;
