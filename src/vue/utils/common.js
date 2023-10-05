// vite 用 import.meta.env.MODE 代替 process.env.NODE_ENV
console.log(import.meta.env.BASE_URL); // baseurl
console.log(import.meta.env.DEV); // 是否是开发环境
console.log(import.meta.env.MODE); // vite 直接通过这个判断  production/development 生产或开发模式
console.log(import.meta.env.PROD); // 是否是生产环境
console.log(import.meta.env.SSR); // 是否SSR环境
console.log(import.meta.env);

// 代理前缀
const prodBaseApi = import.meta.env.DEV ? "/testApi" : "/testApi";
const services = {
  default: `${prodBaseApi}`,
};

export default {
  services,
};
