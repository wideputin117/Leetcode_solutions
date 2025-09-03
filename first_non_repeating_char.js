/* first non repeating character */

const check = (s)=>{
    let left =0
    let right=1
    if(s[0]!=s[1]){
        return s[0]
    }
    while(left <right){
        if(s[left]!=s[right] && s[right]!=s[right+1]){
            return s[right]
        }
        if(s[left]==s[right]){
            right ++
        }else{
            left = right
            right+=1
        }
    }
    return false
}
console.log(check('aabbbdde'))