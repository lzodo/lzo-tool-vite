import axios from "axios";
import qs from "qs";
import errorCode from "@/utils/errorCode";
import useLogin from "../pinia/login";
const loginStore = useLogin();

// 创建axios实例
const service = axios.create({
  // timeout: 10000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    let rtnData = response.data;
    // try {
    //   rtnData = JSON.parse(response.data);
    // } catch (error) {
    //   //
    // }

    // const code = rtnData.code || 200;
    // // 获取错误信息
    // let msg = errorCode[code] || rtnData.msg || errorCode["default"];

    // if (code == 200) {
    //   return rtnData;
    // } else {
    //   console.log({ message: msg, type: "error" });
    //   return rtnData;
    // }

    return rtnData;
  },
  (error) => {
    return {};
  }
);

//参数统一签名
const getAxios = (url, method, data, options = {}) => {
  let config = {
    url: url,
    method: method,
    ...options,
    [options.dataType
      ? options.dataType
      : ["get", "delete"].includes(method)
      ? "params"
      : "data"]: data,
  };
  config.headers = {
    ...config.headers,
    // nonce: random(),
    timestamp: Date.now(),
  };

  //登录参数序列化
  if (
    method == "post" ||
    config.headers["Content-Type"] == "application/x-www-form-urlencoded"
  ) {
    config.data = qs.stringify(data);
  }

  //请求头签名
  if (loginStore.userInfo.token) {
    config.headers.token = loginStore.userInfo.token;
  }

  return service(config);
};

// 导出方法
const get = (url, params, options = {}) => {
  return getAxios(url, "get", params, options);
};
const post = (url, data, options = {}) => {
  return getAxios(url, "post", data, options);
};
const upload = (url, data = {}, options = { upload: true }) => {
  return getAxios(url, "post", data, options);
};
const del = (url, data = {}, options = {}) => {
  return getAxios(url, "delete", data, options);
};
const put = (url, data = {}, options = {}) => {
  return getAxios(url, "put", data, options);
};

export default {
  get,
  post,
  put,
  upload,
  del,
  service,
};
