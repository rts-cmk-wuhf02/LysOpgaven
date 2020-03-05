Krav til slutprojektet

Når der er pause skal den være grøn.

Når der er time skal det være blå.

Udenfor skoletid (hvis muligt regnbuefarver ellers violet farvet)

Den lytter efter tiden og ændres ved de rette tider

Vi har tænkt at bruge et api til ansigtsgenkendelse, med føelelser. (ked af det) og (glad)

Philips Hue API
    https://developers.meethue.com/develop/get-started-2/

Philips Hue npm pakke
    https://www.npmjs.com/package/philips-hue-api

Sider med ansigtsgenkendelse API'er
    https://rapidapi.com/blog/top-facial-recognition-apis/

---------------------------------------------------------------------------------------------
Inga

Der bliver knapper på siden
    den første knap hedder start og gør lyset blåt
        https://192.168.8.100/api/90pkxK64tycrPfvs7qn0n-mgoLHMG9hm0W6QY54G/lights/12/state
        {"on":true, "sat":304, "bri":154,"hue":46920}
    den anden knap hedder pause og gør lyset rødt
        https://192.168.8.100/api/90pkxK64tycrPfvs7qn0n-mgoLHMG9hm0W6QY54G/lights/12/state
        {"on":true, "sat":154, "bri":154,"hue":65535}
    den tredje knap hedder oplæg og gør lyset violet
        https://192.168.8.100/api/90pkxK64tycrPfvs7qn0n-mgoLHMG9hm0W6QY54G/lights/12/state
        {"on":true, "sat":254, "bri":174,"hue":56656}
    den fjerde knap hedder code along og gør lyset gult
        https://192.168.8.100/api/90pkxK64tycrPfvs7qn0n-mgoLHMG9hm0W6QY54G/lights/12/state
        {"on":true, "sat":354, "bri":144,"hue":10000}
    den femte knap hedder færdig for i dag og den slukker lyset
        https://192.168.8.100/api/90pkxK64tycrPfvs7qn0n-mgoLHMG9hm0W6QY54G/lights/12/state/on
        {"on":false}

    hvis jeg har mere tid tilbage går jeg over listen nedenfor
        laver jeg det så den gør det automatisk efter tiden
        ændrer femte knappen til at gå hurtigt over en farve array før den slukker lyset
        

