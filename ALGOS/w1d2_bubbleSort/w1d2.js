// bubbleSort()
/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
    -> Assume there are no duplicates
*/

const nums1 = [5,3,4,2,1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(nums){
    let isSorted = false; // flag to check if things are sorted or not.

    while(isSorted === false) { // we want to run the bubble sorting as long as our flag says the array is not yet sorted
        isSorted = true; // we'll flip the flag to true, as default 

        for(let i=0; i< nums.length - 1; i++) { // length - 1 bc we set j to i+1
            const j = i + 1; // check value at the current index with the value at the next index

            if (nums[i] > nums[j]) { // if the current index's value is ( > ) greater than the next value
                isSorted = false; // flip the flag
                // swap
                const temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
 }
 console.log(nums);
 return nums; // by this time it's sorted
}

function bubbleSort2(arr) {
    var len = arr.length; // fix the length
    for (var i=0; i< len; i++) { // loop over every element
        for (var j=0; j<len - i - 1; j++) { // go no further than length -i
            // compare and classic swap
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
    // return the given array
    return arr;
}

// call the function and pass nums1, nums2, nums3
bubbleSort2(nums2);