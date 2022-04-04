
import IOC from "./config.js";

let arr = [
    {name:"巴士", age:10, address:"北京"},
    {name:"飞机", age:15, address:"上海"},
    {name:"高铁", age:20, address:"深圳"},
    {name:"动车", age:25, address:"武汉"},
];


let list = IOC.use("List", arr);
let data = IOC.use("Constant");
debugger
