module.exports = function reverse (n) {
    var Reverse = Number(Math.abs(n).toString().split('').reverse().join(''));
    return Reverse;
}
