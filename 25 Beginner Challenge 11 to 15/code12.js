function findSmallestInt(arr) {
  let small = Number.MAX_VALUE;
  for(let i=0;i<arr.length;i++){
    if(arr[i] < small){
      small = arr[i];
    }
  }
  return small;
}