import { useSelector } from 'react-redux';
import { selectItems } from '../../redux/trucks/selectors';
import TruckItem from '../TruckItem/TruckItem';
import css from './TruckList.module.css';

export default function TruckList() {
  const trucks = useSelector(selectItems);

  if (trucks.length === 0) {
    return;
  }

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {trucks.map(truck => (
          <li className={css.item} key={truck.id}>
            <TruckItem data={truck} />
          </li>
        ))}
      </ul>
      {trucks.length > 0 && (
        <button className={css.btn} type="button">
          Load more
        </button>
      )}
    </div>
  );
}
