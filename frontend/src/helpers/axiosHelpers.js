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

export const getUserData = async () => {
  try {
    const { data } = await axios.get(apiUrl);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
