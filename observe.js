import Observer  from './Observer.js'
function observe(data) {
  if(typeof data !== 'object' || !data) {
    return;
  }  
  return new Observer(data);
}
export default observe