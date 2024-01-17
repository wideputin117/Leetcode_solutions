// Function to find the square-root of N 
function findSqrt(number) { 
	let start = 0, end = number, mid, ans; 

	// To find integral part of square 
	// root of number 
	while (start <= end) { 

		// Find mid 
		mid = Math.floor((start + end) / 2); 

		// If number is perfect square 
		// then break 
		if (mid * mid == number) { 
			ans = mid; 
			break; 
		} 

		// Increment start if integral 
		// part lies on right side 
		// of the mid 
		if (mid * mid < number) { 

			// First start value should be 
			// added to answer 
			ans = start; 

			// Then start should be changed 
			start = mid + 1; 
		} 

		// Decrement end if integral part 
		// lies on the left side of the mid 
		else { 
			end = mid - 1; 
		} 
	} 

	// To find the fractional part 
	// of square root upto 5 decimal 
	let increment = 0.1; 

	for (let i = 0; i < 5; i++) { 
		while (ans * ans <= number) { 
			ans += increment; 
		} 

		// Loop terminates, 
		// when ans * ans > number 
		ans = ans - increment; 
		increment = increment / 10; 
	} 
	return ans; 
} 

// Driver Code 
const n = 36; 

console.log(findSqrt(n));
