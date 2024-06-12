function pattern(n){
    let pattern = new Array();
    for(let row=0; row < n; row++){
        
        for(let column = 0; column <= row; column++){
        pattern.push("* '/n'")
        }
        
        console.log(' ');
    }
    return pattern
}
console.log(pattern(5));