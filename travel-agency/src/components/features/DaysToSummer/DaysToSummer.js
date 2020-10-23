import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  getDaysToSummer() {
    const currentTime = new Date();
    const summerTimeStart = new Date(Date.UTC(currentTime.getUTCFullYear(), 5, 21));
    const summerTimeEnd = new Date(Date.UTC(currentTime.getUTCFullYear(), 8, 22));

    let daysCounter;

    if (summerTimeStart <= currentTime && summerTimeEnd >= currentTime) {
      daysCounter = 'It is summer!';
    } else if (currentTime > summerTimeEnd) {
      const currentYear = currentTime.getUTCFullYear();
      const nextYear = currentYear + 1;
      const summerNextYear = new Date(Date.UTC(nextYear, 5, 21));
      daysCounter = Math.floor((summerNextYear.getTime() - currentTime.getTime()) / (1000*60*60*24)) + ' days to summer';
    } else if (currentTime < summerTimeStart) {
      const oneDayLeft = new Date(Date.UTC(currentTime.getUTCFullYear(), 5, 20));
      if (currentTime.getTime() === oneDayLeft.getTime()) {
        daysCounter = '1 day to summer';
      } else {
        daysCounter = Math.floor((summerTimeStart.getTime() - currentTime.getTime()) / (1000*60*60*24)) + ' days to summer';
      }
    }

    return daysCounter;
  }

  render() {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{this.getDaysToSummer()}</h3>
      </div>
    );
  }
}

export default DaysToSummer;
