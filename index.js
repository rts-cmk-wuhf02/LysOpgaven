document.addEventListener("DOMContentLoaded", ()=>{
    //----------------------------henter fra APIet------------------------------
    fetch("https://192.168.8.100/api/90pkxK64tycrPfvs7qn0n-mgoLHMG9hm0W6QY54G/lights/12/state", {
        method: "PUT",
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
                hue:30000
            })
    })
        .then(response => response.json())
        .then(function(result){
            console.log(result)
            // console.log("on: " + result.on)
            // console.log("sat: " + result.sat)
            // console.log("bri: " + result.bri)
            // console.log("hue: " + result.hue)
        })
        .catch(error => console.error(error))

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