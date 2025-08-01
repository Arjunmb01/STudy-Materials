function insertionSort(arr){
    for(let i =1; i < arr.length;i++){
        let key = arr[i]
        let j = i - 1
        while(j >=0 && arr[j] > key){
            arr[j + 1] = arr[j]
            j --
        }
        arr[j + 1 ] = key
    }
    return arr
}

const arr = [5, 3, 8, 6, 2];
console.log("Before sorting:", arr);

const sortedArr = insertionSort(arr);
console.log("After sorting:", sortedArr);


// Sort an Array of Student Marks

function insertionSort(arr){
    for(let i = 1; i <arr.length; i++){
        let key = arr[i]
        let j = i - 1
        while(j >=0 && arr[j] > key){
            arr[j+1]= arr[j]
            j--
        }
        arr[j+1] = key
    }
    return arr
}


const marks = [85, 92, 78, 90, 66];
console.log("Sorted Marks:", insertionSort(marks));


//  Sort an Array of Strings Alphabetically

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let key = arr[i]
        let j = i-1
        while(j >= 0  && arr[j] > key){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key
    }
    return arr
}

const names = ["Zara", "Alice", "Mike", "Bob"];
console.log("Sorted Marks:", insertionSort(names))


// Sort an Array of Objects by a Key


function sortByAge(arr){
    for(let i = 1; i<arr.length; i++){
        let key = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j].age > key.age){
            arr[j+1] = arr[j]
            j --
        }
        arr[j+1] = key
    }
    return arr
}


const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 30 }
];

console.log("Sorted People by Age:", sortByAge(people));
