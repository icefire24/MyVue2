import observeArr from "./observeArr.js"

var ARRAY_METHODS = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
]

var originArrayMehtods = Array.prototype,
    arrayMethods = Object.create(originArrayMehtods)

ARRAY_METHODS.forEach(function (method) {
    arrayMethods[method] = function () {
        console.log(this)
        let r = Array.isArray(arguments)
        let rt = originArrayMehtods[method].apply(this, r)
        let newArr
        switch (method) {
            case 'push':
            case 'unshift':
                newArr = r
                break;
            case 'splice':
                newArr = r.slice(2)
                break;
            default:
                break;
        }
        newArr && observeArr(newArr)
        return rt
    }
})
export {
    arrayMethods
}