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

nu er der kun 2 knapper på siden (oplæg og code along)
    resten kommer på de rigtige tidspunkter

    nu starter det blå lys klokken 08:10 og starter igen efter hver pause
        fetching(46920, 84, true);

    nu starter det grønt lys da det er pause tid
        fetching(65535, 80, true);

    en af mine knapper hedder oplæg og gør lyset violet
        fetching(56656, 90, true);

    den anden knap hedder code along og gør lyset gult
        fetching(10000, 84, true);

    klokken 13:30 på mandag og fredag, klokken 15:10 de andre dage og om weekenderne slukker lyset selv
        fetching(56656, 90, false);
