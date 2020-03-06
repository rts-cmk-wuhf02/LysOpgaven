document.addEventListener("DOMContentLoaded", ()=>{
    let pauses = [
        {pauseStart:"09:40", pauseSlut:"10:00", besked:"Pause"},
        {pauseStart:"11:30", pauseSlut:"12:00", besked:"Pause"},
        {pauseStart:"13:30", pauseSlut:"13:40", besked:"Pause"}
    ];
    let body = document.querySelector("body");
    //changes the time into one number - easier to manage
    function timeInOneNbr(hours, minutes){
        return parseInt(hours) * 60 + parseInt(minutes) 
    }

    //getting the time every 500 ms
    setInterval(() => {
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes();
        let currentTime = timeInOneNbr(today.getHours(), today.getMinutes());
        let message = "Skoletid"; 

        document.querySelector(".currentTime").innerHTML =  "Klokken er " + time; 
        
    for (const pause of pauses) { 
        let start = pause.pauseStart.split(":");
        let startMinutes = timeInOneNbr(...start);
        let end = pause.pauseSlut.split(":");
        let endMinutes = timeInOneNbr(...end);

        //checks for a break
        if(currentTime >= startMinutes && currentTime <= endMinutes){ 
            message = pause.besked;
                break;
        }
    }
    //changes the message when you are outside school time(weekends and time when your done for the day)
    let day = today.getDate();
    if(day === 0 || day === 1){
        message = "Det er weekend"
    }else if(day === 2 || day === 6){
        if(time >= "13:30"){
            message = "Færdig for i dag"
        }
    }else{
        if(time >= "15:10"){
            message = "Færdig for i dag"
        }  
    }

    //shows the relevant message
    document.querySelector(".message").innerHTML = message;

    //tells the light what color to be based on the message
    if(message === "Skoletid"){
        body.style.backgroundColor="#1414cc";
        fetching(46920, 84, true);
    }else if(message === "Pause"){
        body.style.backgroundColor="#d11f0b";
        fetching(65535, 80, true);
    }else{
        body.style.backgroundColor="#000";
        fetching(56656, 90, false);
    }
    }, 500);

    //----------------------------henter fra APIet------------------------------
    function fetching(color, brightness, onOff){
        fetch("https://192.168.8.100/api/90pkxK64tycrPfvs7qn0n-mgoLHMG9hm0W6QY54G/lights/12/state", {
            method: "PUT",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                on:onOff,
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

});