/*calcoli per la app sul BMI*/
function calcolo(){
//identificare i calcoli del form
var peso=document.forms.BMI.peso.value;
var altezza=document.forms.BMI.altezza.valueAsNumber;
var sesso=document.forms.BMI.sesso.value;
//i dati non possono essere vuoti --> required
//verifico se l' utente è m o f
if(sesso="m"){
//applico la formula bmi per m
var totale=peso/(altezza*altezza);
/*math.pow(base,exp)
*math.pow(altezza,2)*/
     document.getElementById('calcola').innerHTML="BMI ="+totale;
    }
else if(sesso="f"){
//applico forma bmi per f
var totale=var totale=(peso/(altezza*altezza))*0.9;
 document.getElementById('calcola').innerHTML="BMI ="+totale; 
    }

function cancella(){
 document.getElementById('calcola').innerHTML=" ";
}
//ciao a tutti
