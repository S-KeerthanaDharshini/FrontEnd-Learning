function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  let newarr = arr1.concat(arr2);
  for(let i=0;i<newarr.length;i++){
   sum += newarr[i];
  }
  return sum; //something went wrong
}