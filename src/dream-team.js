import { NotImplementedError } from '../extensions/index.js';


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

