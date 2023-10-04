// 直接右键运行 index.html
// import { msg } from "./utils/index.js";
// import _ from "../node_modules/lodash-es/lodash.default.js"; // 要加载所有依赖的一大堆文件
// import { sum } from "./ts/index.ts"; // 报错无法识别

// 通过 vite 启动的服务运行
import { msg } from "./utils/index";
import _ from "lodash-es"; // vite 优化，简单的合并文件
import { sum } from "./ts/index.ts"; // 通过esbuild 直接转换为浏览器可识别的代码
import "./assets/scss/global.scss";
import "./assets/css/global.css";
import { createApp } from "vue";
import App from "./vue/App.vue";
import router from "./vue/router/index";

import { isBrowser, sleep, randomRange } from "lzo-js-tools";
console.log(isBrowser());
sleep(3000);
console.log(randomRange(30, 35));
console.log(isBrowser());

msg();
window.msg = msg;
console.log(sum(1, 2));
console.log(_.join([123, 456]));

// 操作dom
// dom 操作
// let a = document.createElement("a");
// a.innerText = "创建dom";
// document.body.append(a);

let app = createApp(App).use(router).mount(document.querySelector("#app"));
