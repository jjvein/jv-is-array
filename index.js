//test whether it is an array

module.exports = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]'
}
