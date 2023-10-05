<template>
  <div class="login-page">
    <button @click="login">登录</button>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { userLogin } from "@/api";
import useLogin from "../pinia/login";
let loginStore = useLogin();
// 登录接口调用
let loginInfo = reactive({
  name: "admin",
  passwd: "456",
});
const login = async () => {
  let res = await userLogin(loginInfo);
  if (res.code == 0) {
    loginStore.updateUserInfo(res);
  }
};
</script>

<style lang="scss" scoped></style>
