function partition(a, start, end) {
  let i = start - 1;
  let j = start;
  const pivot = a[end];
  let tmp;
  while(j <= end - 1) {
      if(a[j] < pivot) {
          i++;
          tmp = a[i];
          a[i] = a[j];
          a[j] = tmp;
      }
      j++;
  }
  tmp = a[end];
  a[end] = a[i+1];
  a[i+1] = tmp;

  return i+1;
}

function quickSort(a, start, end) {
  if(start <= end) {
      const pi = partition(a, start, end);
      quickSort(a, start, pi - 1);
      quickSort(a, pi+1, end);
  }
}