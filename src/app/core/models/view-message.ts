export interface ViewMessage {
  id: number;
  content: string;
  sender?: string;
  creationDate?: string;
  updateDate?: string;
  icon: string;
  upvoters: number;
  downvoters: number;
}
