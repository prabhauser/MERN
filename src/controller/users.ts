import UserModel from "../model/user";

export const getProduct1 = async () => {
  return await UserModel.showAllUsers();
};
