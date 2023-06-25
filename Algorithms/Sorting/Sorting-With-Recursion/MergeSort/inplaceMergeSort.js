function mergeSortInPlace(arr, start, end) {
    // here no return anything
    if (end - start === 1) {
        return;
    }

    let mid = Math.floor((start + end) / 2);

    mergeSortInPlace(arr, start, mid);
    mergeSortInPlace(arr, mid, end);

    mergeInPlace(arr, start, mid, end);
}

function mergeInPlace(arr, start, mid, end) {
    let mix = new Array(end - start);

    let i = start;
    let j = mid;
    let k = 0;

    while (i < mid && j < end) {
        if (arr[i] < arr[j]) {
            mix[k] = arr[i];
            i++;
        } else {
            mix[k] = arr[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements if any
    while (i < mid) {
        mix[k] = arr[i];
        i++;
        k++;
    }

    // Copy the remaining elements if any
    while (j < end) {
        mix[k] = arr[j];
        j++;
        k++;
    }

    for (let l = 0; l < mix.length; l++) {
        arr[start + l] = mix[l];
    }
}

// Test case
let arr = [5, 4, 3, 2, 1, 0];
mergeSortInPlace(arr, 0, arr.length);
console.log(arr);

