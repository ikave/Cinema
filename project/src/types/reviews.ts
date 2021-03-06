export interface CommentsType {
  id: number;
  user: {
    id: number;
    name: string;
  };
  rating: number;
  comment: string;
  date: string;
}

export type Comment = Pick<CommentsType, 'rating' | 'comment'> & {
  id: number;
};
