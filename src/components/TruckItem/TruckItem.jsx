import { NavLink } from 'react-router-dom';
import ACIcon from '../../assets/icons/ac.svg';
import EngineIcon from '../../assets/icons/engine.svg';
import TransmissionIcon from '../../assets/icons/transmission.svg';
import BathroomIcon from '../../assets/icons/bathroom.svg';
import KitchenIcon from '../../assets/icons/kitchen.svg';
import TVIcon from '../../assets/icons/tv.svg';
import RadioIcon from '../../assets/icons/radio.svg';
import RefrigeratorIcon from '../../assets/icons/refrigerator.svg';
import MicrowaveIcon from '../../assets/icons/microwave.svg';
import GasIcon from '../../assets/icons/gas.svg';
import WaterIcon from '../../assets/icons/water.svg';

import css from './TruckItem.module.css';

export default function TruckItem({ data }) {
  const {
    id,
    name,
    location,
    description,
    price,
    rating,
    reviews,
    gallery,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = data;

  return (
    <>
      <img
        className={css.img}
        src={gallery[0].thumb}
        alt={name}
        width="292"
        height="320"
      />
      <div className={css.wrapper}>
        <div className={css.wrapperInfo}>
          <div>
            <div className={css.wrapperHeader}>
              <h2 className={css.title}>{name}</h2>
              <p className={css.price}>€{price.toFixed(2)}</p>
              <button className={css.iconFavourite} type="button"></button>
            </div>
            <div className={css.wrapperDetails}>
              <div className={css.iconRating}></div>
              <p className={css.rating}>
                {rating}({reviews.length} Reviews)
              </p>
              <div className={css.iconLocation}></div>
              <p className={css.location}>{location}</p>
            </div>
          </div>

          <p className={css.description}>{description}</p>

          <ul className={css.listProps}>
            {transmission && (
              <li className={css.itemProp}>
                <img className={css.itemIcon} src={TransmissionIcon} />
                <p className={css.itemDescription}>{transmission}</p>
              </li>
            )}
            {engine && (
              <li className={css.itemProp}>
                <img className={css.itemIcon} src={EngineIcon} />
                <p className={css.itemDescription}>{engine}</p>
              </li>
            )}
            {AC && (
              <li className={css.itemProp}>
                <img className={css.itemIcon} src={ACIcon} />
                <p className={css.itemDescription}>AC</p>
              </li>
            )}
            {bathroom && (
              <li className={css.itemProp}>
                <img className={css.itemIcon} src={BathroomIcon} />
                <p className={css.itemDescription}>bathroom</p>
              </li>
            )}
            {kitchen && (
              <li className={css.itemProp}>
                <img className={css.itemIcon} src={KitchenIcon} />
                <p className={css.itemDescription}>kitchen</p>
              </li>
            )}
            {TV && (
              <li className={css.itemProp}>
                <img className={css.itemIcon} src={TVIcon} />
                <p className={css.itemDescription}>TV</p>
              </li>
            )}
            {radio && (
              <li className={css.itemProp}>
                <img className={css.itemIcon} src={RadioIcon} />
                <p className={css.itemDescription}>radio</p>
              </li>
            )}
            {refrigerator && (
              <li className={css.itemProp}>
                <img className={css.itemIcon} src={RefrigeratorIcon} />
                <p className={css.itemDescription}>refrigerator</p>
              </li>
            )}
            {microwave && (
              <li className={css.itemProp}>
                <img className={css.itemIcon} src={MicrowaveIcon} />
                <p className={css.itemDescription}>microwave</p>
              </li>
            )}
            {gas && (
              <li className={css.itemProp}>
                <img className={css.itemIcon} src={GasIcon} />
                <p className={css.itemDescription}>gas</p>
              </li>
            )}
            {water && (
              <li className={css.itemProp}>
                <img className={css.itemIcon} src={WaterIcon} />
                <p className={css.itemDescription}>water</p>
              </li>
            )}
          </ul>

          <NavLink className={css.link} to={`/catalog/${id}`}>
            Show more
          </NavLink>
        </div>
      </div>
    </>
  );
}
