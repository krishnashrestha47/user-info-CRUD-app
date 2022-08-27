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

export const updateUser = (_id, updateObj) => {
  return userSchema.findByIdAndUpdate(_id, updateObj);
};

//delete user

export const deleteUser = (_id) => {
  return userSchema.findByIdAndDelete(_id);
};
