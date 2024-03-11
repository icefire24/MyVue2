import observe from "./observe.js";

function observeArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        observe(ele);
    }
}
export default observeArr