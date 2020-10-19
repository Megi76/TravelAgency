export const formatTime = (par) => {
  if (par === undefined) {
    return null;
  }
  else if (isNaN(par)) {
    return null;
  }
  else if (par < 0 ) {
    return null;
  }
  else {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    seconds = (seconds + Math.floor(par % 60) + '').padStart(2,'0');
    minutes = ((minutes + Math.floor(par / 60) % 60) + '').padStart(2,'0');
    hours =  (hours + Math.floor(par / 3600) + '').padStart(2,'0');

    return hours + ':' + minutes + ':' + seconds;
  }
};
