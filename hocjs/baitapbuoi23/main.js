// Bài 1:
console.log("Bài 1:");
// var n = 6;
var n = 8;
// var n = 13;
console.log("Cho mảng n = ", n);
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
var isPalindrome = function (nums) {
  var getNumbers = nums.toString();
  var reverseNumbers = getNumbers.split("").reverse().join("");
  return getNumbers === reverseNumbers;
};

function nextPrimePalindrome(N) {
  var newNums = N;
  while (true) {
    if (isPalindrome(newNums) && isPrime(newNums)) {
      return newNums;
    }
    newNums++;
  }
}
console.log(
  "Số nguyên tố đối xứng nhỏ nhất lớn hơn hoặc bằng",
  n,
  "là:",
  nextPrimePalindrome(n)
);
console.log("------------------------------------------------------");
// Bài 2:
console.log("Bài 2:");
/* var nums1 = [1, 3],
  nums2 = [2]; */
/* var nums1 = [1, 2],
  nums2 = [3, 4]; */
var nums1 = [1, 2],
  nums2 = [3, 7];
console.log("Cho 2 mảng: ", nums1, "và", nums2);
var medianArrays = function (nums1, nums2) {
  var addNums = nums1.concat(nums2);
  addNums.sort(function (a, b) {
    return a - b;
  });
  console.log("Mảng sau khi hợp nhất: ", addNums);
  if ((addNums.length + 1) % 2 === 0) {
    let median = (addNums.length + 1) / 2;
    return addNums[median - 1];
  } else {
    let first = addNums.length / 2;
    let second = first + 1;
    let med1 = addNums[first - 1];
    let med2 = addNums[second - 1];
    var median = (med1 + med2) / 2;
    return median;
  }
};
console.log("Trung vị là:", medianArrays(nums1, nums2));
console.log("------------------------------------------------------");

// Bài 3:
console.log("Bài 3:");
// nums = [1, 2, 0];
nums = [3, 4, -1, 1];
// nums = [7, 8, 9, 11, 12];
console.log("Cho mảng: ", nums);
function solution(A) {
  var lowestNumber = 1;
  var newArray = A.sort(function (a, b) {
    return a - b;
  });
  A.map(function (arr) {
    var n = newArray[arr];
    if (n > 0) {
      if (lowestNumber < n) {
        return lowestNumber;
      } else {
        lowestNumber = n + 1;
      }
    }
  });
  return lowestNumber;
}
console.log("Số nguyên dương nhỏ nhất không có trong mảng là:", solution(nums));
