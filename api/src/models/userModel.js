import userSchema from "./userSchema.js";

//create
export const addUser = (obj) => {
  return userSchema(obj).save();
};

//fetch single user
export const getSingleUser = (_id) => {
  return userSchema.findById(_id);
};

//fetch users
export const getUser = () => {
  return userSchema.find();
};

//update user

export const updateUser = (filter, updateObj) => {
  return userSchema.findOneAndUpdate(filter, updateObj);
};

//delete user

export const deleteUser = (filter) => {
  return userSchema.findOneAndDelete(filter);
};
