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

const nums1 = [5, 3, 4, 2, 1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(nums) {
    let count = 0; //create variable count and set it = 0
    for (let i = 0; i < nums.length-count-1; i++) { // first for loop we set nums.length-1 because j will check the last value.
        // console.log(i);
        for (let j = i+1; j < nums.length; j++) { // j will start one index after i and will follow i 
            if (nums[i] > nums[j]) { // checking to see if the number at the index of i > number at the index of j
                if (j === nums.length) {
                    count++ //increment count
                    console.log(count);
                }
                const temp = nums[i]; // creating a temp value and setting it equal to nums at index i 
                nums[i] = nums[j]; // setting the value of nums i = nums of j
                nums[j] = temp; // set the value of nums[j] = temp variable 
            }
        }
    }
}
console.log("nums 1 before sort: " + nums1);
bubbleSort(nums1);
console.log("nums 1 after sort: " + nums1);

console.log("nums 2 before sort: " + nums2);
bubbleSort(nums2);
console.log("nums 2 after sort: " + nums2);

console.log("nums 3 before sort: " + nums3);
bubbleSort(nums3);
console.log("nums 3 after sort: " + nums3);

// 👉 Remember to call the function and pass nums1, nums2, nums3