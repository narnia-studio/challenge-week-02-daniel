/**
 * 
 * @param {number[]} numbersArray 
 * @returns Array with consecutive groups
 */
function repeatedGroups(numbersArray) {
    const groups = [];
    let previous;
    let arrIndex = 0;

    numbersArray.forEach((num) => {
        if (!groups[arrIndex]) {
            groups[arrIndex] = [];
        }

        if (num !== previous) {
            arrIndex = arrIndex + 1;
            groups[arrIndex] = [num];
        } else {
            groups[arrIndex].push(num)
        }
        
        previous = num;
    })

    return groups.filter((group) => group.length > 1);
}

console.log(repeatedGroups([1, 2, 2, 4, 5]));
// return [[2, 2]]

// console.log(repeatedGroups([1, 1, 0, 0, 8, 4, 4, 4, 3, 2, 1, 9, 9]));
// return [[1, 1], [0, 0], [4, 4, 4], [9, 9]]