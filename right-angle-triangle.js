// printing right angle trianglr pattern


var pattern = (n)=>{

    for(let row = 0;  row < n; row++){
        let output = "";
       for(let col = 0 ;col <= row; col++){
       
        output += "*  ";
       }
       console.log(output);
            
    }

}

pattern(5);