

let counter =0;
 for (let i=0; i<matrix.length;i++){
  for (let j=0; j<matrix[i].length;j++){
  if (matrix[j] == '^^'){
    counter++;
  }
  }
 }
 return counter;
};
export default function countCats(/* matrix */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
