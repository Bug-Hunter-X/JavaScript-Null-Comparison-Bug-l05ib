# JavaScript Null Comparison Bug

This repository demonstrates a common yet subtle bug in JavaScript related to null comparisons. The `foo` function aims to add two numbers, but it handles null values incorrectly, leading to unexpected results when both parameters are not numbers.

## Bug

The bug lies in the comparison `a === null || b === null`. While it correctly identifies null values, the behavior may not always be desirable. In JavaScript, `0` and `false` are loosely equal to `null`. This might cause the function to return `0` even when one of the arguments is `0` or `false`.