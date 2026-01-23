import User from "../domain/models/User";

export default interface IUserController {
  getUser(userId: string): Promise<User>;
}