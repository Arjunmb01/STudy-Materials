function binarySearch(arr,target,left=0,right=arr.length-1){
    if(left>right) return -1
    
    const mid = Math.floor((left+right)/2)
    
    if(arr[mid] === target){
        return mid
    }else if(arr[mid] < target){
        return binarySearch(arr,target,mid+1,right)
    }else{
        return binarySearch(arr,target,left,mid-1)
    }
}

let arr = [2,5,1,6,2,77,23,8,9]
arr.sort((a,b) => a-b)
console.log(binarySearch(arr,5))