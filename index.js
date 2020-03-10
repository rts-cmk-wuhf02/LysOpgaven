document.addEventListener("DOMContentLoaded", ()=>{
    //pause array
    let pauses = [
        {pauseStart:"8:10", pauseSlut:"9:39", besked:"Skoletid"},//ikke pause
        {pauseStart:"9:40", pauseSlut:"09:59", besked:"Pause"},
        {pauseStart:"10:0", pauseSlut:"11:29", besked:"Skoletid"},//ikke pause
        {pauseStart:"11:30", pauseSlut:"11:59", besked:"Pause"},
        {pauseStart:"12:0", pauseSlut:"13:29", besked:"Skoletid"},//ikke pause
        {pauseStart:"13:30", pauseSlut:"13:39", besked:"Pause"},
        {pauseStart:"13:40", pauseSlut:"15:10", besked:"Skoletid"}//ikke pause
    ];

    //changes the time into one number - easier to manage
    function timeInOneNbr(hours, minutes){
        return parseInt(hours) * 60 + parseInt(minutes) 
    }

    //getting the time every 500 ms
    setInterval(() => {
        let today = new Date();
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
        let s = addZero(today.getSeconds());
        let showTime = h + ":" + m + ":" + s;

        //writes the correct time on the page
        document.querySelector(".currentTime").innerHTML =  "Klokken er " + showTime; 

        //changes the message when you are outside school time(weekends and done for the day)
        //0 = sunday, 6 = saturday
        let shortDay;
        let lateDay;
        let day = today.getDay();

        //rainbow lights
        if(day === 1 && showTime > "13:30:00" && showTime < "13:30:10" || day === 5 && showTime > "13:30:00" && showTime < "13:30:10"){
            shortDay = 1;
            message = "Færdig for i dag";

        //lights off 10 seconds later
        }else if(day === 1 && showTime > "13:30:10" || day === 5 && showTime > "13:30:10"){
            shortDay = 0;
            message = "Færdig for i dag";

        //rainbow lights
        }else if(day > 1 && day < 5 && showTime > "15:10:00" && showTime < "15:10:10" ){
            lateDay = 1;
            message = "Færdig for i dag";

        //lights off 10 seconds later
        }else if(day > 1 && day < 5 && showTime > "15:10:10"){
            lateDay = 0;
            message = "Færdig for i dag";

        //i weekenderne
        }else if(day === 6 || day === 0){
            message = "Det er weekend";
        }

        //buttons code along = yellow, oplæg = purple
        document.querySelector(".Code-Along").addEventListener("click", ()=>{
            if(OplægOn === true){
                document.querySelector(".Oplæg").classList.remove("OplægOn");
            }
            document.querySelector(".Code-Along").classList.toggle("CodeAlongOn");
        });

        document.querySelector(".Oplæg").addEventListener("click", ()=>{
            if(CodeAlongOn === true){
                document.querySelector(".Code-Along").classList.remove("CodeAlongOn");
            }
            document.querySelector(".Oplæg").classList.toggle("OplægOn");
        });

        //classlist contains skal jeg bruge til at se om at knapperne er blevet trykket - og til at tilføje noget css
        var CodeAlongOn = document.querySelector(".Code-Along").classList.contains("CodeAlongOn");
        var OplægOn = document.querySelector(".Oplæg").classList.contains("OplægOn");

        //tells the light and background what color to be based on the message
        let body = document.querySelector("body");

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
            body.style.backgroundColor="#0F0";
            fetching(26920, 80, true);
        }else{
            body.style.backgroundColor="#000";
            //rainbow lights
            if(lateDay === 1 || shortDay === 1){
                rainbow();
            //turns the light off 10 seconds later
            }else{
                fetching(56656, 0, false);
            }
        }
        
        //rainbow lights that last for 10 seconds - then they turn off (because of two of the if else statements above)
        function rainbow(){           
            let colors = [00000, 10000, 20000, 30000, 50000, 60000];
            colors.forEach(color => {
                fetching(color, 80, true);
            });
        }

        //shows the relevant message
        document.querySelector(".message").innerHTML = message;
    }, 1000);

    //----------------------------henter fra APIet------------------------------
    function fetching(color, brightness, onOff){
        fetch("https://192.168.8.100/api/90pkxK64tycrPfvs7qn0n-mgoLHMG9hm0W6QY54G/lights/12/state", {
            method: "PUT",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                hue:color,
                bri:brightness,
                on:onOff,
                sat:245
            })
        })
        .catch(error => console.error(error))
    }
});