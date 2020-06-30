
 var notValid = true;
    var firstAttempt = true;
    var numberInput;
    while(notValid){
        

        if(firstAttempt == true){
            numberInput = prompt("Please enter an integer:");
            if(numberInput > 0 && numberInput < 100){
                notValid = false; //User enter a proper number
            }
            else{
                firstAttempt = false;
            }
        }
        else{
            numberInput = prompt("Please re-enter:");
            if(numberInput > 0 && numberInput < 100){
                notValid = false; //User enter a proper number
            }
        }
    }

    console.log(numberInput * numberInput);