function longRepeat(line) {
    if (line == ''){
        return 0;
    }else{
        let arr = [];
        let count = 1;
        let newarr = Array.from(line);
       
        for(let i = 0; i<newarr.length; i++){
            if(newarr[i] == newarr[i + 1]){
                count+=1;
            }else {
                count=1;}
                arr.push(count);
            }
         return Math.max( ...arr );
          }}
