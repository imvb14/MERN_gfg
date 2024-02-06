let str ="Thequickbrownfoxjumpsoverthelazydog"
let arrnew = new Array(27).fill(0);
       for(let i=0; i<str.length; i++){
           
           arrnew[str[i].toLowerCase().charCodeAt() - 96]++
       }

      
       for(let i=1; i<arrnew.length; i++){
        if(arrnew[i] === 0){
          console.log(0)
        }
      }

    console.log(arrnew)