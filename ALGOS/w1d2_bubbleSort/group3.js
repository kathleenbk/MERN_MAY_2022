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
    let temp; // creates a temp variable to later hold index values
    for(let i = 0; i< nums.length; i++){ 
        for(let j = 0; j<nums.length-i; -1 j++){ //iterating through loop
            if(nums[j] > nums[j+1]){  //conditional to see if index is greater than index+1 
                temp = nums[j];  //next 3 lines do the swap
                nums[j] = nums[j+1];
                nums[j+1] = temp;     
                // [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]; Fancy one-line swap with destructuring   
            }
        }
    }
    //return array    
    return nums;
}

console.log(bubbleSort(nums1));
console.log(bubbleSort(nums2));
console.log(bubbleSort(nums3));



// function bubbleSort2(nums) {
//     let temp;
//     let sorted = false;
//     while (sorted === false) {
//         sorted = true;
//         for (let i = 0; i < nums.length; i++) {
//             let next = i + 1;
//             if (nums[i] > nums[next]) {
//                 temp = nums[i];
//                 nums[i] = nums[next];
//                 nums[next] = temp;
//                 sorted = false;
//             }

//         }
//     }
//     return nums;
// }

// console.log(bubbleSort2(nums1));
// console.log(bubbleSort2(nums2));
// console.log(bubbleSort2(nums3));// 👉 Remember to call the function and pass nums1, nums2, nums3