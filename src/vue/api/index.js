import $axios from "@/utils/request";
import common from "@/utils/common";
const api = common.services.default;

// 用户登录
export const userLogin = (data) => {
  return $axios.post(api + `/users/login`, data);
};
