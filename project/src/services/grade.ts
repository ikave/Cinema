import { MovieGrade } from '../const';

export const getMovieGrade = (grade: number): string => {
  if (grade === 10) {
    return MovieGrade.Avesome;
  }
  if (grade > 8 && grade < 10) {
    return MovieGrade.VeryGood;
  }
  if (grade > 5 && grade < 8) {
    return MovieGrade.Good;
  }
  if (grade > 3 && grade < 5) {
    return MovieGrade.Normal;
  }
  return MovieGrade.Bad;
};
