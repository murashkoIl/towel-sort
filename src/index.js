module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix === undefined || !matrix) { return arr}
	for (i = 0; i < matrix.length; i++) {
		if ((i + 1) % 2 === 0) {
			matrix[i].reverse();
		}
		arr = arr.concat(matrix[i]);
	}
	return arr;
}
