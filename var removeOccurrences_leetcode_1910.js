var removeOccurrences = function(s, part) {
    // console.log(s.indexOf(part))
    
     
     

    while(s.length >= part.length){
        let index = s.indexOf(part)
        if(index === -1){
            return s
        }
        console.log("the index inside is", index)
        s = s.substring(0, index) + s.substring(index+part.length)
        console.log("the s inside is", s)
    }
    console.log(s)
    return s
    // console.log(newString)
};

removeOccurrences(s = "daabcbaabcbc", part = "abc")