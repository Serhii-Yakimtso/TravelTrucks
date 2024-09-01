import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink, useParams } from 'react-router-dom';

import { HiStar } from 'react-icons/hi';
import { CiMap } from 'react-icons/ci';

import { selectTruckItems } from '../../redux/truck/selectors';
import { fetchTruck } from '../../redux/truck/operation';

import css from './TruckDetailsPage.module.css';

export default function TruckDetailsPage() {
  const { id } = useParams();

  const truckData = useSelector(selectTruckItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTruck(id));
  }, [dispatch, id]);

  if (truckData.length === 0) {
    return;
  }

  const { name, price, rating, location, description, reviews, gallery } =
    truckData;

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.name}>{name}</h2>
        <div className={css.wrapperHeader}>
          <div className={css.wrapperRating}>
            <HiStar className={css.iconStar} />
            <p className={css.rating}>
              {rating}({reviews.length} Reviews)
            </p>
          </div>
          <div className={css.wrapperLocation}>
            <CiMap className={css.iconMap} />
            <p className={css.location}>{location}</p>
          </div>
        </div>
        <h2 className={css.price}>€{price}</h2>
      </div>

      <ul className={css.galleryList}>
        {gallery.map(img => (
          <li className={css.galleryItem} key={img.original}>
            <img className={css.image} src={img.original} alt="photo truck" />
          </li>
        ))}
      </ul>
      <p className={css.descriprion}>{description}</p>
      <ul className={css.linksList}>
        <li>
          <NavLink className={css.link} to="features">
            Features
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
    </section>
  );
}
