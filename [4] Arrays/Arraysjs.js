function sumOfSquares(arr) {
    return arr.reduce((sum, num) => sum + num ** 2, 0);
  }

  
console.log(sumOfSquares([1, 2, 3])); //14
console.log(sumOfSquares([4, 5, 6])); //77
console.log(sumOfSquares([-2, 0, 2])); //8
console.log(sumOfSquares([0, 0, 0])); //0
