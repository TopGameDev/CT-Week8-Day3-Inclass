"use strict";
// Pure JS here not type checking
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareFootage = void 0;
// below is not a comment (add after turning on checkJS)
// this tells TS not to type check this file
// @ts-nocheck
function squareFootage(length, width) {
    return length * width;
}
exports.squareFootage = squareFootage;
module.exports = {
    squareFootage
};
