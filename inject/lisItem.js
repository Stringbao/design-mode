
class ListItem {
    constructor(name="", age="", address=""){
        this._name = name;
        this._age = age;
        this._address = address;
    }

    run(){
        console.log(this._name + "_" + this._age + "_" + this.address);
    }
}


export default ListItem;