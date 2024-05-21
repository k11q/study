const merge = function (nums1, m, nums2, n) {
  let curM = m - 1;
  let curN = n - 1;
  let idx = m + n - 1;

  while (curN >= 0) {
    if (curM == -1 || nums1[curM] <= nums2[curN]) {
      nums1[idx--] = nums2[curN--];
    } else if (nums1[curM] > nums2[curN]) {
      nums1[idx--] = nums1[curM--];
    }
  }
};
