var countSegments = function(s) {
    
    s = s.trim();
    if(s.length === 0) {
        return 0;
    }

 
    let len = s.split(/\s+/).length;
    return len;
};

console.log(countSegments("   "))