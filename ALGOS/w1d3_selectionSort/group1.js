/* 
    https://visualgo.net/en/sorting
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
        - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items...
*/
const myArr = [3,2,9,5,1,4,8]

function selectionSort(arr){ // Looping through array and getting minimum index;
    for (let i=0; i<arr.length; i++){
        // Set minimum index
        let minIndex = i;
        // Loop through array and compare array[j] with arr[minIndex]
        for(let j=i+1; j<arr.length; j++){
            // check if value of arr[j] is less than the value at arr[minIndex]
            if(arr[j] < arr[minIndex]){
                // if the value at j is less than the value at minIndex:
                // set minIndex equal to j
                minIndex=j;
            }
        }
        // Check if minIndex is not equal to i
        if(minIndex != i){
            // if it is not equal, swap the value at minIndex with the value at i

            arr[minIndex] += arr[i];
            arr[i] = arr[minIndex]-arr[i];
            arr[minIndex] -= arr[i];
        }

    } return arr //return the sorted array
}

console.log(selectionSort(myArr));
