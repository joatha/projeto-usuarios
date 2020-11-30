var nome = document.querySelector("#exampleInputName");
var gender = document.querySelectorAll("#form-user-create [name=gender]:checked");
var ani = document.querySelector("#exampleInputBirth");
var pais = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail1");
var senha = document.querySelector("#exampleInputPassword1");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("exampleInputAdmin");



var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach(function(field, index){

    if(field.name =="gender"){

        if(field.checked){
            console.log("SIM", field);

        }
   
    } else{
        console.log("NÃO");
    }

    //console.log(index, field.value, field.id);

});