function findIntersection(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let intersection = [];

  for (let element of set2) {
    if (set1.has(element)) {
      intersection.push(element);
    }
  }
  return intersection;
}

console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]

// --------------------Alternate Method------------------------------
function intersection(nums1, nums2) {
  let set1 = new Set(nums1);
  let resultSet = new Set();

  for (let num of nums2) {
    if (set1.has(num)) {
      resultSet.add(num);
    }
  }

  return Array.from(resultSet);
}

console.log(intersection([1, 2, 2, 1], [2, 2]));

// Alternative approach----------------------------------------
function intersectionAlt(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  return [...set1].filter((num) => set2.has(num));
}

console.log(intersectionAlt([4, 9, 5], [9, 4, 9, 8, 4]));
