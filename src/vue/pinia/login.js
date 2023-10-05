import { defineStore } from "pinia";

const useLogin = defineStore("login-vite", {
  state: () => {
    return {
      userInfo: {},
    };
  },
  getters: {},
  actions: {
    updateUserInfo(payload) {
      // 没有state，直接是参数
      this.userInfo = { ...payload };
    },
  },
  persist: true,
});

export default useLogin;
