function detect(password){
    let isUpper = false;    
    let isLower = false;
    let isNumber =false; 
    let isSymbol = false; 
    for (i =  0 ; i< password.length; i ++){
        if (password[i].match(/\d/) ){
            isNumber = true
        }
        else if(password[i].match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)){
            isSymbol = true

        }
        else  if (password[i] == password[i].toLowerCase()){
            isLower = true
        }else if ( password[i].match(/[A-Z]/ )){
            isUpper = true
        }
        }

        if (isLower=== true && isUpper === true && isNumber === true && isSymbol === true){
            return("strong");
        }else {
            return("weak");
        }
    }


console.log(detect("qwerQWER++/"));