function binarySearchRecursive(arr,target,left=0,right=arr.length-1){
  if(left > right){
      return -1
  }
  let mid = Math.floor((left +right)/2)
  
  if(arr[mid]===target){
      return mid
  }else if(arr[mid] < target){
      return binarySearchRecursive(arr,target,mid+1,right)
  }else{
      return binarySearchRecursive(arr,target,left,mid-1)
  }
}

let arr = [1,2,3,4,5,6,7,8]
let tar = 8
console.log(binarySearchRecursive(arr,tar))