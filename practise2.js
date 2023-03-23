function multiply(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
  }

  var arr = multiply(1, 1, 2, 3);
  console.log(arr);
