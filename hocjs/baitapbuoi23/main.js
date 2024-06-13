/* var n = 6;
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
*/

// Bài 2:
console.log("Bài 2:");
var nums1 = [1, 3],
  nums2 = [2];
console.log("Cho 2 mảng: ", nums1, "và", nums2);
var findMedianSortedArrays = function (nums1, nums2) {
  const nums = nums1.concat(nums2);
  nums.sort(function (a, b) {
    return a - b;
  });
  if ((nums.length + 1) % 2 === 0) {
    let median = (nums.length + 1) / 2;
    return nums[median - 1];
  } else {
    let first = nums.length / 2;
    let second = first + 1;
    let med1 = nums[first - 1];
    let med2 = nums[second - 1];
    const median = (med1 + med2) / 2;
    return median;
  }
};
console.log("và trung vị là:", findMedianSortedArrays(nums1, nums2));
