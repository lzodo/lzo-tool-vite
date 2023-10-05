import { defineStore } from "pinia";

// home 这个名称以后要抽取
const useHome = defineStore("home-vite", {
  state: () => {
    return {
      name: "lzoxun",
      age: "18",
    };
  },
  getters: {
    dblage: (state) => {
      return `${state.name}-${state.age * 2}`;
    },
  },
  actions: {
    yearAdd(payload) {
      // 没有state，直接是参数
      this.age++;
    },
  },
});

export default useHome;
