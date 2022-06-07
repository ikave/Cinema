import { CommentsType } from '../../types/reviews';

interface CommentsProps {
  review: CommentsType;
}

function Comment({ review }: CommentsProps): JSX.Element {
  const { comment, user, rating, date } = review;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">
            {date}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Comment;
