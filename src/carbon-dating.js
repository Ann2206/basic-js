

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if (typeof sampleActivity != 'String' && typeof sampleActivity != 'Number'){
    return false;
  }
  if (Number(sampleActivity) == 'undefined'){
    return false;
  }
  let k = Math.log(2)/HALF_LIFE_PERIOD;
  let chs = MODERN_ACTIVITY/sampleActivity;
  let t = Math.log(chs)/k;
  return t;
};
