/*  output the number of minimum deleted character to make two given string Anagram to each other
   Input: STR1 = "ddehgt",    STR2 = "gtd"
   Output: 3

   Explanation: we need to delete "deh" from first string, after deletion these are look like
      "dgt" and "gtd" which are anagram of each other.*/
        function makeAnagram(string1, string2) { 
      // Initialize a map object with the characters in string1 
        let freq = new Map(); 
        for (let c of string1) { 
          freq.set(c, (freq.get(c) || 0) + 1); 
        } 
      
        // Subtract the characters in string2 from the map object 
        for (let c of string2) { 
          freq.set(c, (freq.get(c) || 0) - 1); 
        } 
      
        // Calculate the sum of absolute values of counts in the map object 
        let count = 0; 
        for (let [key, value] of freq) { 
          count += Math.abs(value); 
        } 
        return count; 
      } 
      
      let str1 = "bcadeh"; 
      let str2 = "hea"; 
      console.log(makeAnagram(str1, str2));
      