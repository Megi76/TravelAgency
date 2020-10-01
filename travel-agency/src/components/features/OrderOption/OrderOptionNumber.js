import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionNumber= ({limits, currentValue, setOptionValue, price}) => (
  <div className={styles.number}>
    <input
      type='number'
      className={styles.inputSmall}
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    ></input> ({formatPrice(price)})
  </div>
);

OrderOptionNumber.propTypes = {
  values: PropTypes.array,
  limits: PropTypes.object,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
  price: PropTypes.node,
};
export default OrderOptionNumber;
