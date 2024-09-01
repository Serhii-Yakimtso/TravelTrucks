import { clsx } from 'clsx';
import css from './RatingsStars.module.css';
import { HiStar } from 'react-icons/hi';

export default function RatingsStars({ rating }) {
  const ratingMaxValue = [1, 2, 3, 4, 5];
  return (
    <ul className={css.list}>
      {ratingMaxValue.map(value => (
        <li key={value}>
          <HiStar
            className={clsx(value <= rating ? css.active : css.disActive)}
          />
        </li>
      ))}
    </ul>
  );
}
