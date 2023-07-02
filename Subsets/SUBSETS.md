# Subsets

### Permutations:
Permutations refer to the different arrangements or orders in which a set of elements can be organized. In mathematics, a permutation of a set is a specific arrangement of its elements. The number of permutations for a set of n distinct elements is given by the factorial of n, denoted as n!.

For example, let's consider a set with three elements: {A, B, C}. The permutations of this set would be:

1. ABC
2. ACB
3. BAC
4. BCA
5. CAB
6. CBA

In this case, there are six possible permutations since there are three distinct elements (n = 3), and 3! = 3 x 2 x 1 = 6.

Permutations can also be represented using mathematical notation. The notation P(n, r) represents the number of permutations of r elements chosen from a set of n distinct elements. It is calculated using the formula:

P(n, r) = n! / (n - r)!

This formula accounts for cases where only a subset of elements is chosen from the set. The "!" symbol represents the factorial operation.

For example, if we want to find the number of permutations of 4 elements chosen 2 at a time, we use the formula:

P(4, 2) = 4! / (4 - 2)! = 4! / 2! = 4 x 3 = 12

Therefore, there are 12 possible permutations of 2 elements chosen from a set of 4 elements.

### Combinations
Combinations refer to the selection of items from a larger set without considering the order of selection. In mathematics, a combination is a selection of elements from a set where the order does not matter.

The number of combinations for selecting r elements from a set of n distinct elements is denoted as C(n, r) or "n choose r." It is calculated using the binomial coefficient formula:

C(n, r) = n! / (r! * (n - r)!)

Here, "!" represents the factorial operation. The binomial coefficient accounts for the fact that the order of selection is not considered.

For example, let's consider a set with five elements: {A, B, C, D, E}. The combinations of selecting three elements from this set would be:

1. ABC
2. ABD
3. ABE
4. ACD
5. ACE
6. ADE
7. BCD
8. BCE
9. BDE
10. CDE

In this case, there are ten possible combinations, as we are selecting three elements from a set of five (n = 5, r = 3).

To generate combinations programmatically, you can use various algorithms such as recursive backtracking, iterative methods, or mathematical formulas involving binomial coefficients. The specific approach depends on the programming language and requirements of your application.