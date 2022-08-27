import axios from "axios";

const apiUrl = "http://localhost:8000";

const registerEP = apiUrl + "/register";

export const postUserData = async (obj) => {
  try {
    const { data } = await axios.post(registerEP, obj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getUserData = async (_id) => {
  try {
    let getUrl;
    if (_id) {
      getUrl = apiUrl + `/${_id}`;
    } else {
      getUrl = apiUrl;
    }
    const { data } = await axios.get(getUrl);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
