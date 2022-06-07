/* eslint-disable comma-dangle */
import { useAppSelector } from '../../hooks';
import { CommentsType } from '../../types/reviews';
import Comment from '../comment/comment';

function Reviews(): JSX.Element {
  const comments: CommentsType[] = useAppSelector(
    (state) => state.FILMS.comments
  );

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.map((review) => (
          <Comment key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
