import observe from "./observe.js"
import proxyData from "./proxy.js"

function initState(vm) {
    let options = vm.$options
    if (options.data) {
        initData(vm)
    }
}
function initData(vm) {
    let data = vm.$options.data

    data = vm._data = typeof data === 'function' ? data.call(vm) : data || {}
    //代理,vm可以直接访问data中的属性
    for (const key in data) {
        proxyData(vm, '_data', key)
    }
    observe(vm._data)
}
export {
    initState
}