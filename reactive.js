import observe from "./observe.js";

function defineReactiveData(data, key, value) {
    observe(value);
    Object.defineProperty(data, key, {
        get() {
            console.log('get');
            return value;
        },
        set(newValue) {
            console.log('set');
            if (value === newValue) {
                return;
            }
            observe(newValue);
            value = newValue;
        }
    })
}
export default defineReactiveData