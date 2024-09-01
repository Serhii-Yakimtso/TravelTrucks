import { useSelector } from 'react-redux';
import { selectTruckItems } from '../../redux/truck/selectors';
import RatingsStars from '../RatingsStars/RatingsStars';
import OrderForm from '../OrderForm/OrderForm';
import css from './TruckReviews.module.css';

export default function TruckReviews() {
  const truckData = useSelector(selectTruckItems);

  const { reviews } = truckData;

  return (
    <div className={css.container}>
      <ul className={css.reviewsList}>
        {reviews.map((review, item) => (
          <li key={item}>
            <div className={css.wrapperName}>
              <p className={css.firstLetter}>
                {review.reviewer_name[0].toUpperCase()}
              </p>
              <div>
                <p className={css.text}>{review.reviewer_name}</p>
                <RatingsStars rating={review.reviewer_rating} />
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
      <OrderForm />
    </div>
  );
}
