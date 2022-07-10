import userSchema from "./userSchema.js";

//create
export const addUser = (obj) => {
  return userSchema(obj).save();
};

//fetch users
export const getUser = (filter) => {
  return userSchema.find(filter);
};

//update user

export const updateUser = (filter, updateObj) => {
  return userSchema.findOneAndUpdate(filter, updateObj);
};

//delete user

export const deleteUser = (filter) => {
  return userSchema.findOneAndDelete(filter);
};
