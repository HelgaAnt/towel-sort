
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  if ( !Array.isArray(matrix)) return res;
  if (matrix.length == 0 ) return res;

  res = matrix.reduce(function(el1,el2, index) {
    //console.log(el1);
    //console.log(el2);
    //console.log(el1.concat(el2));
    if ( ( (index + 1) % 2) == 0) el2 = el2.reverse();
    return el1.concat(el2);
  });

  return res;
}
