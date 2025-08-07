function intersectWithDuplicates(nums1, nums2) {
  let freq = new Map();
  let result = [];

  // Count frequency in nums1
  for (let num of nums1) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  // Find intersection with nums2
  for (let num of nums2) {
    if (freq.has(num) && freq.get(num) > 0) {
      result.push(num);
      freq.set(num, freq.get(num) - 1);
    }
  }

  return result;
}

console.log(intersectWithDuplicates([1, 2, 2, 1], [2, 2])); // [2, 2]
console.log(intersectWithDuplicates([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
