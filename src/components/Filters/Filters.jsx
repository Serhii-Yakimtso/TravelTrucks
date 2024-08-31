import Location from '../Location/Location';
import VehicleEquipment from '../VehicleEquipment/VehicleEquipment';
import VehicleType from '../VehicleType/VehicleType';
import css from './Filters.module.css';

export default function Filters() {
  return (
    <div className={css.wrapper}>
      <Location />
      <VehicleEquipment />
      <VehicleType />
      <button className={css.btn} type="button">
        Search
      </button>
    </div>
  );
}
