import {User} from "./users";

export interface PrivateMessage {
  id: number,
  content: string,
  upvoters: User[],
  downvoters: User[],
  sender: User,
  creationDate: Date,
  updateDate: Date,
  recipient: User
}
