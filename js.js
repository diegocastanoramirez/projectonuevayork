/*
7.	Utilizando el código anexo, poner el evento click al boton del menu movil para que puedan mostrarse los enlaces del menú.  código ejercicio

*/

const $elementoicon=document.querySelector(".icon");




$elementoicon.addEventListener("click",function(){

    const $otro = document.querySelector("#myNavbar");
    

    if($otro){

        $otro.classList.toggle("responsive");

    }

    
});









