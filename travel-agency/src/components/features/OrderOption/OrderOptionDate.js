import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';


class OrderOptionDate extends React.Component {

   state = {
     startDate: new Date(),
   };

   handleChange = date => {
     this.setState({
       startDate: date,
     });
   };

   render() {
     return (
       <DatePicker
         selected={this.state.startDate}
         onChange={this.handleChange}
       />
     );
   }
}

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
};

export default OrderOptionDate;
