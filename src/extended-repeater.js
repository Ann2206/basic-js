import { NotImplementedError } from '../extensions/index.js';


export default function repeater(/* str, options */) {
  let stroka = '';
  let result = '';
  if (typeof options.additionRepeatTimes == 'undefined' || options.additionRepeatTimes == 'undefined'){
    stroka = options.addition;
  }else{
  for (let i=0;i<options.additionRepeatTimes-1;i++){
    if (typeof options.additionSeparator == 'undefined' || options.additionSeparator == 'undefined'){
      options.additionSeparator = '|';
    }
    let stroka1 = options.addition + options.additionSeparator;
    stroka+= stroka1;
  }
  stroka += options.addition;
  }
  if (typeof options.repeatTimes == 'undefined' || options.repeatTimes == 'undefined'){
    result = str;
  }else{
  for (let j=0;j<options.repeatTimes-1;j++){
    if (typeof options.separator == 'undefined' || options.separator == 'undefined'){
      options.separator = '+';
    }
    let res = str + stroka + options.separator;
    result += res;
  }
  result += (str + stroka);
  }
  return result;
};

}
