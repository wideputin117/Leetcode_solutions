var reverseStr = function(s, k) {
   s= s.split("")
   let reverseValue=""
    if(s.length>= 2*k){
        let newStr = s.splice(0,2*k)
        console.log(s)
        let left =0;
        let right =1;
        while (right<k){
            let temp= newStr[left];
            newStr[left]= newStr[right]
            newStr[right]= temp;
            left++;
            right++;
        }if(s.length<k) {
            s.reverse() 
        } else if(s.length< 2*k || s.length>=k){
            let left2=0;
            let right2=1;
        while(right2<k){
            let temp2= s[left2];
            s[left2]= s[right2]
            s[right2]= temp2;
            left2++;
            right2++;
        } 
        console.log(s)
        } 
        reverseValue=newStr+s;
        console.log(reverseValue)
    }
     return reverseValue
};

reverseStr("manishgupta",2)

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    // Convert string to array to make manipulation easier
    let arr = s.split("");
    
    // Iterate through the string in chunks of size 2k
    for (let i = 0; i < arr.length; i += 2 * k) {
        // Calculate the end index for the current chunk
        let end = Math.min(i + k, arr.length);
        
        // Reverse the first k characters in the current chunk
        let left = i;
        let right = end - 1;
        
        while (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    
    // Convert array back to string
    return arr.join("");
};




var reverseStr = function(s, k) {
    s = s.split(""); // Split string into an array for easier manipulation
    let reverseValue = []; // Use an array to build the final string
    
    for (let i = 0; i < s.length; i += 2 * k) {
        let part1 = s.slice(i, i + k).reverse(); // Reverse the first k characters
        let part2 = s.slice(i + k, i + 2 * k); // Keep the next k characters as is
        
        reverseValue.push(...part1, ...part2); // Append both parts to the result
    }
    
    return reverseValue.join(""); // Join the array back into a string
 };