console.log(strictEquals(1, 1));
console.log(strictEquals(1, "1"));
console.log(strictEquals(0, -0));
console.log(strictEquals(-0, 0));
console.log(strictEquals(NaN, NaN));
console.log(strictEquals(true, false));
console.log(strictEquals(false, false));
console.log(strictEquals("water", "oil"));

strictEquals = (valueA, valueB) => {
  switch (true) {
    case Object.is(valueA, 0) && Object.is(valueB, -0):
    case Object.is(valueA, -0) && Object.is(valueB, 0):
    case Object.is(valueA, 1) && Object.is(valueB, 1):
      return true;

    default:
      return false;
  }
};

strictEquals(valueA, valueB);
