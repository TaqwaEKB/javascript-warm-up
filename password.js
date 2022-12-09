let password =["s6tib9+*+r"]; 

function containsSpecialChars(password) {
    const specialChars =
      /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(password);
  }
 
  function containsmubers(password){
    return /\d/.test(password);
  }


  function containsUppercase(password){
    return /[A-Z]/.test(password);
  }
  
console.log(containsUppercase(password));
  function containsLowercase(password){
    return /[a-z]/.test(password);
  }
   

    if ( containsLowercase(password) == true
        &&  containsUppercase(password) == true 
        && containsmubers(password)==true 
        && containsSpecialChars(password)== true){

        console.log("password is good");
    }
    else{
        console.log("try again");
    }
