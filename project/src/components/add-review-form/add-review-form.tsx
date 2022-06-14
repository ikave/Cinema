import { ChangeEvent, FormEvent, useState } from 'react';
import InputRadioStar from '../input-radio-star/input-radio-star';
import { reviewStars } from '../../const';
import { useAppDispatch } from '../../hooks';
import { sendComment } from '../../store/api-action';

interface AddReviewFormProps {
  id: number;
}

function AddReviewForm({ id }: AddReviewFormProps): JSX.Element {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const dispatch = useAppDispatch();

  function handleChangeText(evt: ChangeEvent<HTMLTextAreaElement>) {
    setReviewText(evt.target.value);
  }

  function handleChangeRating(evt: ChangeEvent<HTMLInputElement>) {
    setRating(Number(evt.target.value) || 10);
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    // eslint-disable-next-line no-console
    console.log(rating, reviewText);
    dispatch(sendComment({ id, rating, comment: reviewText }));
  }

  return (
    <form className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {reviewStars.map((value) => (
            <InputRadioStar
              key={value}
              value={value}
              onChange={handleChangeRating}
              rating={rating}
            />
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={handleChangeText}
          value={reviewText}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddReviewForm;
