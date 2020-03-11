Krav til slutprojektet - Inga

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

    klokken 13:30 på mandag og fredag, klokken 15:10 de andre dage og om weekenderne går lyset igennem en farve array og efter 10 sekunder slukker lyset
        fetching(56656, 90, false);


---------------------------------------------------------Svar på spørgsmål 4 og 5-------------------------------------------------------------


4.	Eleven har kendskab til netværkstyper, forbindelser samt sikkerhed.		 	 	 
    -----------------------------------------------WIFI-----------------------------------------------
    WIFI står for Wireless Fidelity, det er en network som gør at computere, mobiler og andre enheder kan kommunikere med andre enheder uden et kabel. Det betyder at det er meget nemmere at komme på nettet og i stedet for at tænke på længden af vores kabel skal vi bara være i det samme område som vores router. 

    -----------------------------------------------5G-----------------------------------------------
    5G er den fenmte generation af trådløst teknologi for mobilnetwærk. Det er hurtigere, det mangler vi fordi mobil data traffik fordobbler sig hver 18 måneder og det kan 4G ikke håndtere. Med 5G bliver det hurtigere og man skal ikke bekymre sig om at det ikke virker fordi der er så mange mennesker omkring dig der også brugere det. 5G betyder at hver enhed får sin egen lille del af 5Gs netwærk, derfor bliver din forbindelse ikke afbrudt på grund af meget traffik.

    -----------------------------------------------Sikkerhed-----------------------------------------------
    Sikkerhed er et stort problem i dag, hvis man er god nok til at hacke, kan man næsten gøre hvad som helst på nettet. Hver gang nogen kommer med løsning på hvordan man kan sikkre et eller andet på nettet, så er der kommet noget som kan hacke ind på en anden måde. 
    Derfor bruger man en kryptering, ligesom SSL (secure socket layer). SSL krypterer det du sender og giver den du sender til en public secret som gør at den som modtager set du sender kan læse det, men en tredje menneske som prøver at læs beskeden ser kun noget der ikke giver mening.
    Der er og så en der bliver brugt med emails som hedder SSH (secure shell) som gør det samme men med emails. Grunden til at det virker det meste af tiden er fordi der er million forskellige måder at gøre det på, det betyder at man kan hacke ind i det men det kunne tage virkelig lang tid.



5.	Eleven kan beskrive udbredelsen af IoT og fremtidsmuligheder i forbindelse med programmerbare fysiske enheder.
    -----------------------------------------------IOT-----------------------------------------------

    IOT er en måde til at bruge internettet til at styre enheder, det kan være din bil som får besked fra knappen på din nøgle om at nu skal bilen låses op. Et godt eksempel er en landmand som bruger sensore til at fortælle ham hvornår han skal vande afgrøden, sensorene kan fortælle ham hvor tør det er blevet, hvornår det kommer til med at regne(for at undgå at vande lige før regn) o.s.v. 
    IOT kan også samle statistik og og fortælle landmanderne hvilke måde er den bedste for at deres produkt er så godt som det kan være.

    Med IOT er muglighederne endeløse og hvis vi når langt nok ind i fremtiden har mennesker sikkert tilføjet det til alt.
    Lige nu er der mennesker der arbejder på at lave en robot som kan styre arbejdskraft.
    Der er også nogen der arbejder på at lave en bil som kan køre sig selv, den bil vil behøve at vide når der er nogen på gaden, hvis der er rødt lys og masse af andre ting. De har ikke helt nået at lave disse ting men de er på vej. 


---------------------------------------------------------Hvordan jeg lavede projectet--------------------------------------------------------------
Til at begynde med havde vi ikke et bridge så jeg skulle starte med UI

derefter brugte jeg
    https://developers.meethue.com/develop/get-started-2/ 
        for at få det op at køre

så skulle jeg få en id og en internalipaddress
    https://discovery.meethue.com/
        det fik jeg på denne side og det var også her jeg fandt ud af at mit lys var nummer 12
    
så skulle jeg få et bruger navn
    https://192.168.8.100/debug/clip.html (https://<bridge ip address>/debug/clip.html)
    
så havde jeg alt jeg manglede for at kunne komme ind på deres debugging tool side(https://internalipaddress/api/brugernavn/lights/12)
    https://192.168.8.100/api/90pkxK64tycrPfvs7qn0n-mgoLHMG9hm0W6QY54G/lights/12
        det var her som jeg fandt ud af hvordan deres api ser ud, så derfor viste jeg hvad jeg kunne hente og ændre
        jeg legede lidt med det her for at lære det lidt at kende og efter det lavede jeg en fetch GET i min javascript fil for at være sikker at jeg gjorde det rigtigt
            derefter begynte jeg at bruge PUT for at ændre lyset
            så startede jeg på mit project
