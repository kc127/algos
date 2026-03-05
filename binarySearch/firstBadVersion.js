function firstBadVersion (n) {
  let l = 1;
  let r = n;
  let firstBadVrs = -1;

  while (l <= r) {
    let mid = l + Math.floor((r - 1)/2);
    if (isBadVersion(mid)) {
      firstBadVrs = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return firstBadVrs;
}