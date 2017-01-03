"use strict";

function processform(){
    event.preventDefault();
    
    var flag = false;
     var firstName, lastName, address, xresults;
    
    console.log("from funtion");
    firstName = document.getElementById("FirstName").value;
   // alert(firstName);
    
    lastName = document.getElementById('LastName').value;
    
    address = document.getElementById('Address').value;
    
    
   xresults =    "FirstName: " + firstName; 
    xresults += "<br>LastName: " + lastName;
    xresults += "<br> Address: " + address;
    
    console.log(firstName.length);
    
    if (firstName.length  == 0){
        flag = true;
    }
    
    
     if (lastName.length  == 0){
        flag = true;
    }
    
     if (address.length  == 0){
        flag = true;
    }
    
    if (flag){
        
        alert ("error");
    } else {
        alert ("form submited");
        results( xresults );
    }
    
    
    

}


function results (paramResults) {
        document.getElementById('results').innerHTML = paramResults
        
    }