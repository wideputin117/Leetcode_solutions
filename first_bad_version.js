const firstBadVirsion= (n,bad)=>{
   let left =0 ;
   let right = n;
   let pos =  1;
   while(left <right){
   let mid =  left + Math.floor((right-left)/2)
   let x = isBadVersion(mid)

   if(x== true){
    pos = mid;
    last= mid-1
   }else{
    beg = mid+1
     }
   }
   return pos;
}