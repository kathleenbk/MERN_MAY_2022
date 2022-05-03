function bubbleSort(nums) {
    let isSorted = false; //assume array isn't sorted to start
    let stop = 0 // this will keep track of how many values we have floated to the end
    while(!isSorted){ // if our array isn't sorted, start bubbling
        isSorted = true // will stay true if we don't do any swaps
        for (let i = 0; i < nums.length-1-stop; i++){ // iterate through the array
            if (nums[i] > nums[i+1]){ // if the next value is smaller than the current value
                isSorted = false; // flag that we are still floating values, and therefore not done sorting
                [nums[i], nums[i+1]] = [nums[i+1], nums[i]] // perform swap
            }
        }
      stop++ // increase stop amount because we floated one value to it's correct position
    }

    return nums
}
