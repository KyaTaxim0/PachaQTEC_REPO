let name=document.querySelector(".js_name");
let lastname=document.querySelector(".js_lastname");
let form=document.querySelector("form");
let container=document.querySelector(".js_container");


form.addEventListener("submit",function(e){
    e.preventDefault();
    container.innerHTML= `Hola mi nombre es ${name.value} y mi apellido es ${lastname.value}`;
    name.value='';
    lastname.value='';
})
