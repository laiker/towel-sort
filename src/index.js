
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  
  if(!Array.isArray(matrix)) {
    return [];
  }

  var arr = [];
  var counter = 1;
  for(i = 0; i < matrix.length; i++) {
    for(j = 0; j < matrix[i].length; j++) {
      if(counter % 2 == 0) {
        towelIndex = matrix[i].length - 1 - j;
        if(j >= matrix[i].length) {
          towelIndex += 1;
        }
        arr.push(matrix[i][towelIndex]);
      } else {
        arr.push(matrix[i][j]);
      }
    }
    ++counter;
  }
  
  return arr;
}
