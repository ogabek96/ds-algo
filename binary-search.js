/**
 * arr - sorted array
 * num - number to search
 * start - starting index of the array
 * end - ending index of the array
 */
function binarySearch(arr, num, start, end) {
  if(start > end) {
      return false;
  }
  const mid = Math.floor((start + end) / 2);
  if(arr[mid] === num) {
      return true;
  } else {
      if(num < arr[mid]) {
          return binarySearch(arr, num, start, mid - 1);
      } else {
          return binarySearch(arr, num, mid + 1, end);
      }
  }
}
