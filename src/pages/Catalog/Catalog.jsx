import Filters from '../../components/Filters/Filters';
import TruckList from '../../components/TruckList/TruckList';
import css from './Catalog.module.css';

export default function Catalog() {
  return (
    <div className={css.container}>
      <Filters />
      <TruckList />
    </div>
  );
}
