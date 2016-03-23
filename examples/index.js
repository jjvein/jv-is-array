var isArray = require('../')

console.dir([
    isArray([]),
    isArray([1, 2, 3]),
    isArray({}),
    isArray({ name: 'Jjvein', age: 23})
])
