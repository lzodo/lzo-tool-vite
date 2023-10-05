import { createPinia } from "pinia";
// pinia 数据持久化 , use一下，然后在需要持久的仓库设置 persist: true
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
export default pinia;
