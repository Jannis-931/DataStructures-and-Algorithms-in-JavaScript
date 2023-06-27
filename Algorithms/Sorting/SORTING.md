# Sorting:

# Sorting Without Recursion
### 1. Bubble Sort:
- Bubble sort also known as Sinking Sort/ Exchange Sort.
- Bubble sort also known as inplace sorting algorithm.
- It's a stable sorting algorithm.

Time Complexity:
- Best Case: O(n)
- Worst Case: O(n^2)
<img src="https://github.com/sajib-mandal/DataStructures-and-Algorithms-in-JavaScript/blob/main/images/bubblesort.jpg" alt="bubblesort" height="400" weight="420">

### 2. Selection Sort:
- As the name suggest selection sort is select an element an insert it's correct position.
- There are two ways select an element: min or max element.
- This algorithm is good for small size of the array.

Time Complexity:
- Worst Case: O(n^2)
- Best Case: also O(n^2)

### 3. Insertion Sort:
- Insertion sort basically means we are sorting the array partially.
- It's a stable sorting algorithm.
- Used for smaller value of N. Where array is partially sorted.

Time Complexity:
- Worst Case: O(n^2)
- Best Case: O(n)

### Cyclic Sort:
- `When given numbers from range(1, N) use Cyclic Sort.`
- Ex:
   1. You given numbers 1 to N, find the messing number.
   2. You given unsorted array find smallest or positive messing number.
   3. You given numbers 1 to N, find the duplicate number.

**Tips**:
- If range is given by [0, N], then every element will be at `index = value`.
- If range is given by [1, N], then every element will be at `index = value - 1` or `value = index + 1`.

# Sort With Recursion

### Merge Sort:

**`STEPS`**:
 1. Divide array into two parts.
 2. Get both part sorted via RECURSION.
 3. Merge two sorted parts.

Complexity:
- Time complexity: O(nlog(n))
- Space complexity: O(n) only for recursive

### Quick Sort:
- It's not stable.

How to Pick Pivot:
- Random element
- Corner element [end, start]
- Pick the middle of the elements

<img src="https://github.com/sajib-mandal/DataStructures-and-Algorithms-in-JavaScript/blob/main/images/QuickSort2.png" height="312" weight="703">

Complexity:
- Time complexity: 
1. Best case: O(nlogn)
2. Worst case: O(n^2)
