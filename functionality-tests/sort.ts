export default function arraySorter(arr: Array<number>): Array<number> {
  if (arr.length <= 1) {
      return arr;
  }

  const pivot: number = arr[arr.length - 1]; // Choose the last element as the pivot
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
          left.push(arr[i]);
      } else {
          right.push(arr[i]);
      }
  }

  return [...arraySorter(left), pivot, ...arraySorter(right)];
}