import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTrucks } from '../../redux/trucks/operations';

import Filters from '../../components/Filters/Filters';
import TruckList from '../../components/TruckList/TruckList';

import css from './Catalog.module.css';

export default function Catalog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Filters />
      <TruckList />
    </div>
  );
}
