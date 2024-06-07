// Bài 1:
var array = [48, 10, 2, 8, 9, 17];
function minMax() {
  var min = array[0];
  var indexMin = 0;
  var max = array[0];
  var indexMax = 0;
  for (var i = 1; i < array.length; ++i) {
    if (min > array[i]) {
      min = array[i];
      indexMin = i;
    }
    if (max < array[i]) {
      max = array[i];
      indexMax = i;
    }
  }

  console.log("Bài 1:");
  console.log("Cho mảng: ", array);
  console.log("Số nhỏ nhất là: ", min);
  console.log("Vị trí của số nhỏ nhất là: ", indexMin);
  console.log("Số lớn nhất là: ", max);
  console.log("Vị trí của số lớn nhất là: ", indexMax);
}
minMax(array);
console.log("------------------------------------------------------------");

// bài 2: -------------------------------------------------------------------------
console.log("Bài 2:");
// var primeNumber = [2, 3, 5, 7, 11, 13];
// var primeNumber = [0, 1, 4, 6];
var primeNumber = [2, 3, 8, 10, 4];
console.log("Cho mảng:", primeNumber);
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
function averagePrimeNumber(arr) {
  var sum = 0;
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      sum += arr[i];
      count++;
    }
  }
  if (count !== 0) {
    var averageNumber = sum / count;
    console.log("Trung bình các số nguyên tố trong mảng: ", averageNumber);
  } else {
    console.log("Không có số nguyên tố trong mảng.");
    return "Không có số nguyên tố trong mảng.";
  }
}
averagePrimeNumber(primeNumber);
console.log("------------------------------------------------------------");

// Bài 3: -----------------------------------------------------------
console.log("Bài 3:");
var arr3 = [2, 3, 5, 2, 4, 3, 1, 4, 6];
var newArr3 = [];
for (var i in arr3) {
  if (newArr3.indexOf(arr3[i]) === -1) {
    newArr3[newArr3.length] = arr3[i];
  }
}
console.log("Cho mảng:", arr3);
console.log("Sau lọc trùng ta được:", newArr3);
console.log("------------------------------------------------------------");

// Bài 4: -----------------------------------------------------------
