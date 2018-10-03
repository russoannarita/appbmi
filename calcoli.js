/*calcoli per la app sul BMI*/
function calcolo(){
//identificare i calcoli del form
var peso=document.forms.BMI.peso.valueAsNumber;
var altezza=document.forms.BMI.altezza.valueAsNumber;
var sesso=document.forms.BMI.sesso.value;
if(sesso="m"){
var totale=peso/(altezza*altezza);
     document.getElementById('calcola').innerHTML="BMI ="+totale;
if(totale<20.1){
 document.getElementById('spiegazione').innerHTML="sottopeso";
}
else if(totale<25){
  document.getElementById('spiegazione').innerHTML="peso ottimale";
    }
else if(totale<29.9){
  document.getElementById('spiegazione').innerHTML="sovrappeso";
    }
else if(totale<35){
  document.getElementById('spiegazione').innerHTML="obesità 1°";
    }
else if(totale<40){
  document.getElementById('spiegazione').innerHTML="obesità 2°";
    }
else{
  document.getElementById('spiegazione').innerHTML="USA CITIZEN BOY;
    }
}

else if(sesso="f"){
var totale=var totale=(peso/(altezza*altezza))*0.9;
  document.getElementById('calcola').innerHTML="BMI ="+totale;
   if(totale<18.7){
  document.getElementById('spiegazione').innerHTML="sottopeso";
}
 else if(totale<23.8){
  document.getElementById('spiegazione').innerHTML="peso ottimale";
}
 else if(totale<28.6){
  document.getElementById('spiegazione').innerHTML="sovrappeso";
}
else if(totale<35){
  document.getElementById('spiegazione').innerHTML="obesità 1°";
}
else if(totale<40){
  document.getElementById('spiegazione').innerHTML="obesità 2°";
}
else{
  document.getElementById('spiegazione').innerHTML="USA CITIZEN GIRLL ";
} 
    
}
}
function cancella(){
 document.getElementById('calcola').innerHTML=" ";
