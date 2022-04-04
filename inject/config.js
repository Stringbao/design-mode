
import $rootInjector from "./injector";

import List from "./list";
import ListItem from "./lisItem";

const IOCConfig = {
    init(){
        $rootInjector.register("List", (...args)=>{
            let list = new List(...args);
            list._data.forEach(x => {
                let item = $rootInjector.use("ListItem", x);
                list.add(item);
            });
            return list;
        })

        $rootInjector.register("ListItem", (...args)=>{
            return new ListItem(...args);
        })
    }
}
IOCConfig.init();
export default $rootInjector;
