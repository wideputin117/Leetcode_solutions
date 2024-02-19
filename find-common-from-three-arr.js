function findSame(arr1, arr2, arr3) {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    arr3.sort((a, b) => a - b);

    let i = 0, j = 0, k = 0;
    const tempArr = [];

    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
            tempArr.push(arr1[i]);
            i++;
            j++;
            k++;
        } else {
            // Move the pointers of the arrays with smaller elements
            const minVal = Math.min(arr1[i], arr2[j], arr3[k]);
            if (arr1[i] === minVal) {
                i++;
            }
            if (arr2[j] === minVal) {
                j++;
            }
            if (arr3[k] === minVal) {
                k++;
            }
        }
    }

    return tempArr;
}

const ans = findSame(
    [1, 4, 2, 1, 6, 8, 4, 2, 4, 7, 3, 2, 1, 3, 5, 6],
    [3, 3, 1, 32, 4, 2, 7, 1, 3, 6, 2, 1, 4, 5,6, 7, 2],
    [52, 4, 6, 2, 1, 2, 3, 1, 3, 6, 3, 1, 3, 5]
);

console.log(ans);