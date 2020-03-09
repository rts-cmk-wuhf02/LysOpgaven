document.addEventListener("DOMContentLoaded", ()=>{
    let pauses = [
        {pauseStart:"8:10", pauseSlut:"9:39", besked:"Skoletid"},//ikke pause
        {pauseStart:"9:40", pauseSlut:"09:59", besked:"Pause"},
        {pauseStart:"10:0", pauseSlut:"11:29", besked:"Skoletid"},//ikke pause
        {pauseStart:"11:30", pauseSlut:"11:59", besked:"Pause"},
        {pauseStart:"12:0", pauseSlut:"13:29", besked:"Skoletid"},//ikke pause
        {pauseStart:"13:30", pauseSlut:"13:39", besked:"Pause"},
        {pauseStart:"13:40", pauseSlut:"15:10", besked:"Skoletid"}//ikke pause
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
        let message; 

        for (const pause of pauses) { 
            let start = pause.pauseStart.split(":");
            let startMinutes = timeInOneNbr(...start); 
            let end = pause.pauseSlut.split(":");
            let endMinutes = timeInOneNbr(...end);

            //checks my pauses array
            if(currentTime >= startMinutes && currentTime <= endMinutes){ 
                message = pause.besked;
                    break;
            }
        }

        //get the time to show 04 instead of 4
        function addZero(i) {
            if (i < 10) {
              i = "0" + i;
            }
            return i;
        }
        let h = addZero(today.getHours());
        let m = addZero(today.getMinutes());
        let showTime = h + ":" + m;
        document.querySelector(".currentTime").innerHTML =  "Klokken er " + showTime; 
        

        //changes the message when you are outside school time(weekends and done for the day)
        let day = today.getDay();
        if(day === 1 && time >= "13:30" || day === 5 && time >= "13:30" ){
        //1 = monday, 5 = friday
            message = "Færdig for i dag";
            //console.log(time)
            //console.log(day)
        }else if(day >= 2 && day <= 4 && time >= "15:10"){
            message = "Færdig for i dag";
        }else if(day === 6 || day === 0){
        //6 = saturday, 0 = sunday
            message = "Det er weekend";
        }

        //buttons code along = yellow, oplæg = purple
        document.querySelector(".Code-Along").addEventListener("click", ()=>{
            if(OplægOn === true){
                document.querySelector(".Oplæg").classList.remove("OplægOn");
            }
            document.querySelector(".Code-Along").classList.toggle("CodeAlongOn");
        });

        var CodeAlongOn = document.querySelector(".Code-Along").classList.contains("CodeAlongOn");

        document.querySelector(".Oplæg").addEventListener("click", ()=>{
            if(CodeAlongOn === true){
                document.querySelector(".Code-Along").classList.remove("CodeAlongOn");
            }
            document.querySelector(".Oplæg").classList.toggle("OplægOn");
        });
        
        var OplægOn = document.querySelector(".Oplæg").classList.contains("OplægOn");

        //tells the light what color to be based on the message
        if(CodeAlongOn === true && message === "Skoletid"){
            body.style.backgroundColor="#f0c91d";
            fetching(10000, 84, true);
        }else if(OplægOn === true && message === "Skoletid"){
            body.style.backgroundColor="#ce09d1";
            fetching(56656, 90, true);
        }else if(message === "Skoletid"){
            body.style.backgroundColor="#1414cc";
            fetching(46920, 84, true);
        }else if(message === "Pause"){
            body.style.backgroundColor="#d11f0b";
            fetching(65535, 80, true);
        }else{
            body.style.backgroundColor="#000";
            fetching(56656, 90, false);
        }

        //shows the relevant message
        document.querySelector(".message").innerHTML = message;
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
        .catch(error => console.error(error))
    }

});