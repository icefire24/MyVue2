import { arrayMethods } from "./arr.js"
import observeArr from "./observeArr.js"
import defineReactiveData from "./reactive.js"

function Observer(data) {
    if (Array.isArray(data)) {
        data.__proto__ = arrayMethods
        observeArr(data)
    } else {
        this.walk(data)
    }
}

Observer.prototype.walk = function (data) {
    var kes = Object.keys(data)
    console.log("🚀 ~ kes:", kes)
    for (var i = 0; i < kes.length; i++) {
        defineReactiveData(data, kes[i], data[kes[i]])
    }
}
export default Observer