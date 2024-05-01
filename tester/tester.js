const manaCattivo=(function(){//cosi dovrebbe essere globale ma modificabile solo dalle mie funzioni
    let value=5;
    function getManaCattivo(){
        return value;
      }
    function updManaCattivo(i){
      if(!isNaN(i)){//se i è un numero
        manaCattivo+=i;
      }
      else throw new exception("updManaCattivo ha ricevuto NaN")
    }
    function resetManaCattivo(){//funzione per il fine turno 
     manaCattivo=5;
    }
    return {//cosi si possono accedere da altre funzioni
        getManaCattivo: getManaCattivo,
        updManaCattivo: updManaCattivo,
        resetManaCattivo: resetManaCattivo
    }
  })();
  
function mydumbPlay(hand){
    var costi=[];
    for(let i=0;i<hand.length;i++){//creo lista di costi
      costi[i]=hand[i].costo;
    }
    const nCarte = costi.length;
    console.log(nCarte);
    var arrayFinale=[nCarte+1];//se carta usata ha nel suo slot true senno false
    console.log(arrayFinale);
    
    arrayFinale[0]=999;//in primo slot metto spesa massima della combinazione


    var arrayTemp=[nCarte];//ci salvo bool delle varie carte in combinazione
    var costoMax=manaCattivo.getManaCattivo();//costo della combinazione attuale
    for(let cartaIni = 0; cartaIni <= nCarte-1; cartaIni++){

      
      for(let pos=0;pos<= nCarte-1; pos++){
        var ciclo=(pos+cartaIni)%nCarte;
        console.log("ciclo"+ciclo);
        if(costi[ciclo]<=costoMax){
          costoMax=costoMax-costi[ciclo];
          arrayTemp[ciclo]=true;
        }
      }
      console.log("-----");
      
      if(costoMax<arrayFinale[0]){
        arrayFinale[0]=costoMax;
        for(let i=0;i<nCarte;i++){//se trovo combinazione migliore aggiorno arrayFinale
          arrayFinale[i+1]=arrayTemp[i];
        }
      }  
      costoMax=manaCattivo.getManaCattivo()//quando vado a carta dopo resetto tutto
      for(let i=0;i<nCarte;i++){//resetto anche l array
        arrayTemp[i]=false;
      }
    }
    return arrayFinale;
    }
// Define dummy data for testing
var hand = [
    { costo: 2 },
    { costo: 1 },
    { costo: 3 },
    { costo: 4 }
];

// Test the function
var result = mydumbPlay(hand);

console.log(result); // Output: An array representing the combination of cards with the lowest cost