
class Injector{
    constructor(){
        this._iocMap = new Map();
    }
    register(key, callback){
        this._iocMap.set(key, callback);
    }
    use(key, ...args){
        let cb = this._iocMap.get(key);
        return cb(...args);
    }
}
export default new Injector();
