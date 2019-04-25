
    function btnFunction(n){

       calculator.screen.value = calculator.screen.value + n;
    }
    function btnBackspaceFunction(){
       var v1 =  calculator.screen.value ;
       calculator.screen.value = v1.substr(0,v1.length - 1);
    }

    function btnClearFunction(){
        calculator.screen.value = "";
    }