/**
 *
 * @param {Array} array
 */
exports.min = function min(array) {
    if (!arguments.length || !array.length) {
        return 0;
    }
    return Math.min(...array);
};

exports.max = function max(array) {
    if (!arguments.length || !array.length) {
        return 0;
    }
    return Math.max(...array);
};
/**
 *
 * @param {Array} array
 */
exports.avg = function avg(array) {
    if (array === undefined || !array.length) {
        return 0;
    }
    return array.reduce((acc, curVal) => acc + curVal, 0) / array.length;
};

// let a;
// -1.8
// a = [
//     -39,
//     30,
//     -32,
//     -9,
//     3,
//     -2,
//     -11,
//     -4,
//     -32,
//     39,
//     0,
//     -14,
//     7,
//     20,
//     -12,
//     22,
//     -23,
//     19,
//     0,
//     2
// ];
// console.log("avg", avg());
