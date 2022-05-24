import { ChangeEvent } from 'react';

interface InputRadioStarProps {
  value: number,
  rating: number,
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void
}

function InputRadioStar({value, rating, onChange}: InputRadioStarProps): JSX.Element {
  return (
    <>
      <input onChange={onChange} className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value} checked={rating === value} />
      <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
    </>
  );
}

export default InputRadioStar;

