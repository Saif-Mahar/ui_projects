//event.js
//put it in obj
    var personList=[];

$(document).ready(function() {
    var personObj1 = new Person();
    var personObj2 = new Person();
    var personObj3 = new Person();
    
    personObj1.setfirstName("Ali");
    personObj1.setlastName("Masl");
    personObj1.setPhone("213213");
    personObj1.setemail("ilian@gmail.com");
    
    personObj2.setfirstName("Rami");
    personObj2.setlastName("Bouafia");
    personObj2.setPhone("21312");
    personObj2.setemail("rami@gmail.com");
    
    personObj3.setfirstName("Ishak");
    personObj3.setlastName("Algie");
    personObj3.setPhone("12312321");
     personObj3.setemail("Ishak@gmail.com");
    
    personList.push(personObj1);
    personList.push(personObj2);
   personList.push(personObj3);
    
    render();
    
    //console.log(personList);
    $("#add").on("click",submit);
    
});