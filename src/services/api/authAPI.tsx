import axios from "axios";
import storage from "../../utils/storage";
import { UserAuthInput } from "../model/auth";

const instance = axios.create({
  baseURL: "https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com/auth/",
});

instance.interceptors.response.use(
  (res) => {
    const { access_token } = res.data;
    storage.set({ key: "TOKEN", value: access_token });
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const fetchLogin = async (props: UserAuthInput) => {
  return instance.post("signin", props);
};

const fetchSignUp = (props: UserAuthInput) => {
  return instance.post("signup", props);
};

export { fetchLogin, fetchSignUp };
