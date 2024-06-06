// Bài 1:
var arr = [1, 0, 5, 8, 9, 6];
function minMax(array) {
  var min = array[0];
  var minLocation = 0;
  var max = array[0];
  var maxLocation = 0;
  for (var i = 1; i < array.length; ++i) {
    if (min > array[i]) {
      min = array[i];
      minLocation = i;
    }
    if (max < array[i]) {
      max = array[i];
      maxLocation = i;
    }
  }

  console.log("Bài 1:");
  console.log("Số nhỏ nhất là: ", min);
  console.log("Vị trí của số nhỏ nhất là: ", minLocation);
  console.log("Số lớn nhất là: ", max);
  console.log("Vị trí của số lớn nhất là: ", maxLocation);
}
minMax(arr);
console.log("------------------------------------------------------------");

// bài 2: -------------------------------------------------------------------------
console.log("Bài 2:");
var primeNumber = [2, 3, 5, 7, 11, 13];
/* function hello() {
  var check = true;
  if (n % 1 !== 0 || n <= 1) {
    check = false;
    console.log(`Không có số nguyên tố`);
  } else {
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        check = false;
        break;
        console.log(`Không có số nguyên tố`);
      }
    }
  }
} */
// hello(n);

var getTotal = 0;
function arithmeticMean() {
  for (var i = 0; i < primeNumber.length; i++) {
    getTotal = getTotal + primeNumber[i];
  }
  var average = getTotal / primeNumber.length;
  console.log(average);
}
arithmeticMean(primeNumber);
