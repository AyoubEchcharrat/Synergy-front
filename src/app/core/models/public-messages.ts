import {User} from "./users";
import {Channel} from "./channels";

export interface PublicMessage {
  id: number,
  content: string,
  upvoters: User[],
  downvoters: User[],
  sender: User,
  creationDate: Date,
  updateDate: Date,
  channel: Channel
}
