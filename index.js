function isPalindrome(x) {
2    if (x < 0) {
3        return false;
4    }
5
6    let original = x; // Store the original number
7    let rev = 0;
8
9
10    while (x != 0) {
11        let y = x % 10; // Get the last digit
12        rev = rev * 10 + y; // Build the reversed number
13        x = Math.floor(x / 10); // Remove the last digit
14    }
15
16    return original === rev; // Check if original and reversed numbers are the same
17}
18
19// Test the function
20console.log(isPalindrome(121)); 
21module.exports=isPalindrome;
