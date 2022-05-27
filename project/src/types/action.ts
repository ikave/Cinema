export enum ActionType {
  ChangeActiveGenre = 'films/changeActiveGenre',
}

export type ChangeActiveGenre = {
  type: ActionType.ChangeActiveGenre;
  payload: string;
};

export type Action = ChangeActiveGenre;
