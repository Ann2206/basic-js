import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(/* members */) {
  const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  console.log(members)
  members.sort();
  console.log(members)
  let arr = [];
  for (let i=0;i<members.length;i++){
    if (typeof members[i] == 'string'){
      members[i] = members[i].toUpperCase();
      arr.push(members[i]);
    }
  }
  for (let i=0;i<arr.length;i++){
    arr[i] = (arr[i])[0];
  }
  str = arr.join('');
  console.log(str);
  return str;
};
createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])
createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])
}
