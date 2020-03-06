document.addEventListener("DOMContentLoaded", ()=>{
    //----------------------------henter fra APIet------------------------------
    function fetching(color, brightness){
        fetch("https://192.168.8.100/api/90pkxK64tycrPfvs7qn0n-mgoLHMG9hm0W6QY54G/lights/12/state", {
            method: "PUT",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                on:true,
                hue:color,
                sat:245,
                bri:brightness
            })
        })
        .then(response => response.json())
        .then(function(result){
            console.log(result)
        })
        .catch(error => console.error(error))
    }
    function fetchOff(){
        fetch("https://192.168.8.100/api/90pkxK64tycrPfvs7qn0n-mgoLHMG9hm0W6QY54G/lights/12/state/", {
            method: "PUT",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                on:false
            })
        })
        .then(response => response.json())
        .then(function(result){
            console.log(result)
        })
        .catch(error => console.error(error))
    }

    //----------------------------buttons---------------------------------------
    let body = document.querySelector("body");
    let Skoletid = document.querySelector(".Skoletid");
    let Pause = document.querySelector(".Pause");
    let Oplæg = document.querySelector(".Oplæg");
    let CodeAlong = document.querySelector(".Code-Along");
    let Færdig = document.querySelector(".Færdig");

    Skoletid.addEventListener("click", ()=>{
        body.style.backgroundColor="#1414cc";
        fetching(46920, 84);
    });

    Pause.addEventListener("click", ()=>{
        body.style.backgroundColor="#d11f0b";
        fetching(65535, 80);
    });
    
    Oplæg.addEventListener("click", ()=>{
        body.style.backgroundColor="#ce09d1";
        fetching(56656, 90);
    });
    
    CodeAlong.addEventListener("click", ()=>{
        body.style.backgroundColor="#f0c91d";
        fetching(10000, 84);
    });

    Færdig.addEventListener("click", ()=>{
        body.style.backgroundColor="#000";
        fetchOff();
    });
});