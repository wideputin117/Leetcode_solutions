  let str = "Hello World"
 let strLen = (str)=>{
 str = str.split(" ").trim();
 let lastIndex =  str.length-1; // can remove this and just use in single line 
                                /**let str = s.trim().split(" ");
                                 return str[str.length-1].length; */
 return str[lastIndex].length;
 }
 console.log(strLen(str))