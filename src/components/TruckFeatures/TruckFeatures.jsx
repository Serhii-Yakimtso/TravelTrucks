import { useSelector } from 'react-redux';
import { selectTruckItems } from '../../redux/truck/selectors';

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

import css from './TruckFeatures.module.css';

export default function TruckFeatures() {
  const truckData = useSelector(selectTruckItems);

  // const razorWord = data => {
  //   for (let i = 1; i < data.length; i++) {
  //     if (data[i] === data[i].toUpperCase() && data[i - 1] !== ' ') {
  //       return data.slice(0, i) + ' ' + data.slice(i);
  //     }
  //   }
  //   return data;
  // };

  const razorWord = data => {
    const originalWord = data.split('');
    const lowerCaseWord = data.toLowerCase().split('');
    const newWord = [];

    for (let i = 0; i < data.length; i++) {
      if (originalWord[i] !== lowerCaseWord[i]) {
        newWord.push(` ${originalWord[i]}`);
      } else {
        newWord.push(originalWord[i]);
      }
    }

    return newWord.join('');
  };

  const {
    consumption,
    tank,
    length,
    width,
    form,
    height,
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
  } = truckData;

  return (
    <div className={css.container}>
      <div className={css.info}>
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

        <h2 className={css.title}>Vehicle details</h2>
        <ul className={css.charactList}>
          <li className={css.charactItem}>
            <p>Form</p>
            <p className={css.typeText}>{razorWord(form)}</p>
          </li>
          <li className={css.charactItem}>
            <p>Length</p>
            <p>{length.slice(0, -1) + ' ' + length.slice(-1)}</p>
          </li>
          <li className={css.charactItem}>
            <p>Width</p>
            <p>{width.slice(0, -1) + ' ' + width.slice(-1)}</p>
          </li>
          <li className={css.charactItem}>
            <p>Height</p>
            <p>{height.slice(0, -1) + ' ' + height.slice(-1)}</p>
          </li>
          <li className={css.charactItem}>
            <p>Tank</p>
            <p>{tank.slice(0, -1) + ' ' + tank.slice(-1)}</p>
          </li>
          <li className={css.charactItem}>
            <p>Consumption</p>
            <p>
              {consumption.slice(0, consumption.length - 2) +
                ' ' +
                consumption.slice(consumption.length - 2)}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
