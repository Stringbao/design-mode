
class List {
    constructor(data){
        this._data = data;
        this._items = [];
    }

    add(item){
        this._items.push(item);
    }
}

export default List;