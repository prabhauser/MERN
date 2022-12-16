import { getDB } from "../utils/mongodb/node-mongo-wrapper";

class User {
  name: any;
  email: any;
  password: any;
  constructor(name: any, email: any, password: any) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static showAllUsers() {
    const db = getDB();
    return db
      .collection("user_mstr")
      .find()
      .toArray()
      .then((user: any) => {
        return { data: user };
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}

export default User;
