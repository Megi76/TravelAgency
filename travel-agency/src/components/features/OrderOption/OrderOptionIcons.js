import React from 'react';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, currentValue, required, setOptionValue}) => (

  <div className={styles.icon}>

    {required ? '' : (
      <div value={currentValue}
        className={styles.icon}
        onChange={() => setOptionValue('')}
      >
        <Icon name={'times-circle'}/> {'none'}
      </div>
    )}

    {values.map(value => (
      <div className={currentValue === value.id ? styles.iconActive : styles.icon}
        key = {value.id}
        value = {value.id}
        onClick = {() => setOptionValue(value.id)}
      >
        <Icon name={value.icon}/>{value.name}({formatPrice(value.price)})
      </div>
    ))}

  </div>

);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.node,
  required: PropTypes.bool,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;
