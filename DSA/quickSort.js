function qs(arr, left, right) {
  if (left < right) {
    const PI = partition(arr, left, right); //3
    qs(arr, left, PI - 1);
    qs(arr, PI + 1, right);
  }
}

function partition(arr, left, right) {
  const pivot = arr[right];

  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, right);
  return i;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
qs(arr, 0, arr.length - 1);
console.log(arr, "Arr");
