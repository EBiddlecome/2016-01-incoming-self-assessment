/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */
//take in a sorted array (meaning in order) and a target element to search for, so we can return its index position
//define the search paramaters-beginning and end of the array
//start looking for index in the middle of the array to save time
//

var binarySearch = function (array, target) {
//define function to take in a sorted array and the index position of the target that we're looking for
	var start = 0;
	//set start of seach at first index of array
	var end = array.length - 1;
	//set end of search at end of array
 	var find;
 	//set our identifier utility to obtain the desired index

    while (start <= end) {
    //while there are still elements to search in the array, look for target
    //this will stop the function when it runs out of elements, so we dont keep recursing forever
        find = Math.floor((start + end) / 2);
        //set find attempt as the result of average of beginning & end, rounded down to nearest integer in case we get a fractional
        //splits array in half and saves time by starting from the middle
        if (array[find] === target) {
        //if find locates the target index in the array
            return find;
            //stop firing the function, and return resultant target index.
        	} else {
            	if (array[find] < target) {
        		//else if find stops short of locating the target index, it was looking too low, so
                	start = find + 1;
                	//set find to start looking one index position up (move forward thru array)
        		} else {
    			//else, find was looking too high up in the index
                	end = find - 1;
                	//set find to look one index position down (move backward thru the array)

            	}
        	}
    	}

    return -1;
    //return -1 if the target index isnt present in the array, because -1 can't be an array index value

};

// var myArr = [1,2,3,4,5];
// console.log(binarySearch(myArr, 7));
