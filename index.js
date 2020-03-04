document.addEventListener("DOMContentLoaded", ()=>{
    //----------------------------henter fra APIet------------------------------
    /*
    fetch("https://<bridge ip address>/api/username/lights/1", {

    })
        .then(response => response.json())
        .then(function(result){
            console.log(result)
        })
        .catch(error => console.error(error))*/

    //----------------------------buttons---------------------------------------
    let body = document.querySelector("body");
    let Skoletid = document.querySelector(".Skoletid");
    let Pause = document.querySelector(".Pause");
    let Oplæg = document.querySelector(".Oplæg");
    let CodeAlong = document.querySelector(".Code-Along");
    let Færdig = document.querySelector(".Færdig");

    Skoletid.addEventListener("click", ()=>{
        body.style.backgroundColor="#1414cc";
    });

    Pause.addEventListener("click", ()=>{
        body.style.backgroundColor="#d11f0b";
    });
    
    Oplæg.addEventListener("click", ()=>{
        body.style.backgroundColor="#ce09d1";
    });

    Færdig.addEventListener("click", ()=>{
        body.style.backgroundColor="#000";
    });

    CodeAlong.addEventListener("click", ()=>{
        body.style.backgroundColor="#f0c91d";
    });
});