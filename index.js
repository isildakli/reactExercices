
// import sumTwo from "./my-module.js";

// console.log(sumTwo(4,55));

import getData from "./app.js";

getData(1)
.then((data) => console.log(data))
.catch((e) => console.log(e));