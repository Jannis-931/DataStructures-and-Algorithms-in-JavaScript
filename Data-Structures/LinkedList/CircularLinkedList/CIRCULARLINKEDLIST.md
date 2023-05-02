# Circular LinkedList
## why `printList()` method using do-while loop.
The `printList()` method uses a `do-while` loop because it needs to iterate through all the nodes in a circular linked list at least once, even if the list is empty. With a `do-while` loop, the loop body is executed at least once before checking the loop condition, which is useful in this case since the loop needs to execute at least once to print the first node's value.

Additionally, since this is a circular linked list, the loop condition `curr !== this.head` would always be true, even if the list is empty, since `this.head` would be `null`. Therefore, using a `while` loop instead of a `do-while loop` would result in an infinite loop if the list is empty.

## We can use `while` loop here?
Yes, we can use a while loop to traverse a circular linked list. However, using a do-while loop in this case has an advantage.

Since a circular linked list has no null pointer at the end, a while loop with a condition of `while (curr !== null)` would not work. Instead, we need to use a condition that checks whether we have returned to the starting point, which is exactly what the do-while loop does.

So, while a while loop can also work for a circular linked list, a do-while loop is preferred in this case for its clarity and correctness.