function binarySearch(arr,target){
    let left = 0
    let right = arr.length -1
    
    while(left <= right){
        const mid = Math.floor((left+right) /2)
        
        if(arr[mid] === target){
            return mid
        }else if(arr[mid] > target){
            right = mid -1
        }else{
            left = mid+1
        }
    }
    return -1
}


let arr = [2,5,1,6,2,77,23,8,9]
arr.sort((a,b) => a-b)
console.log(binarySearch(arr,5))