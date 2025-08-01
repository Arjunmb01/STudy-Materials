
//======================================remove duplicates

let arr =  [1, 2, 2, 3, 4, 4]

function duplicate(arr){
    for(let i = 0; i< arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                for(let k = j; k<arr.length; k++){
                    arr[k] = arr[k+1]
                }
                j--
                arr.length--
            }
        }
    }
    return arr
}

console.log(duplicate(arr))


function duplicate(arr){
    for(let i = 0; i< arr.length; i++){
        let dupli = false
        for(let j = i+1; j< arr.length; j++){
            if(arr[i] === arr[j]){
                dupli = true
                arr.splice(j,1)
                j--
            }
        }
        if(dupli){
            arr.splice(i,1)
            i--
        }
    }
    return arr
}

console.log(duplicate(arr))


//================================find pair

let arr1 = [1,2,3,4,5], target = 6

function pair(arr,target){
    for(let i =0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                console.log(`Pair :  ${arr[i]} ,${arr[j]}`)
            }
        }
    }
}

pair(arr1,target)



function pair(arr,target){
    let seen = {}
    for(let i = 0; i< arr.length; i++){
        let pair =  target - arr[i]
        if(seen[pair]){
            console.log(`pair : ${pair},${arr[i]}`)
        }
        seen[arr[i]]= true
    }
}

pair(arr1,target)


//==============================missing number

for(let i = 0; i <arr.length-1; i++ ){
    let current = arr[i]
    let end = arr[i+1]
    
    for(let j = current +1 ; j < end;j++){
        console.log(j)
    }
}


//====================palindrome

let a = "malayalam"

function isPalindrome(a){
    let start = 0
    let end = a.length-1


    while(start < end){
        if(a[start] !== a[end]){
            return false
        }
        start++
        end--
    }
    return true
}

console.log(isPalindrome(a))


let ab = [1,2,3,2,1]

function isPalindrome(ab){

    let start = 0
    let end = ab.length -1
    
    while(start < end){
        if(ab[start] !== ab[end]){
            return false
        }
        start++
        end--
    }
    return true
}

console.log(isPalindrome(ab))


//=============================================reverseString

let words = "hello world"
function reverseString(str){
    let word ="", res = ''
    for(let i =0 ; i<= str.length; i++){
        let ch = str[i]
        if(ch === " " || i === str.length){
            for(let j = word.length-1; j>=0; j--){
                res+= word[j]
            }
            if(i !== str.length) res+=" "
            word = ""
        }else{
            word += ch
        }
    }
    console.log(res)
}


reverseString(words)


//=======================================non repeating charceter

let str = "aabbcddf" 

function findNonRep(str){
    let freq ={}
    for(let i = 0; i< str.length; i++){
        let ch = str[i]
        if(freq[ch] === undefined){
            freq[ch] = 1
        }else{
            freq[ch]++
        }
    }
    
    for(let i = 0; i< str.length; i++){
        let ch = str[i]
        if(freq[ch] > 1){
            console.log(ch)
        }
    }
}
findNonRep(str)
