// Declaration des variables

let sub_number = document.getElementById('number');
let button_one = document.getElementById('button_one');
let reponses_preced  = document.getElementById('c');

// On definit une fonction factorielle qui returne la factorielle d'un nombre
function factorielle (nbr){
    // Si nbr = 0 la factorielle returnera 1
    if(nbr == 0){
        return 1;
    }
    // Et si le nombre est > a 0, On fait appel la procedure recursive
    else if( nbr > 0) {
        return nbr * factorielle(nbr - 1);
    }
    // Enfin On aura un message d'erreur si le nombre est < a 0
    else{
        return 'Oups ERROR'
    }
}
/*
    A la variable button_one on y ajoute une action qui est 'onclick' qui lorsqu'on va 
    cliquer sur notre button va executer une tache et a cette button on y affecte une fonction
*/
button_one.onclick = function(){
    /*
        la valeur stokee dans la variable 'sub_number' sera prise en paramettre de la fonction factorielle
        'factorielle(sub_number.value)' puis le resultat sera affecter a 
        'document.getElementById('aff_reponse').textContent'
    */
   if(factorielle(sub_number.value) != 'Oups ERROR'){
        document.getElementById('conteneur').style.borderColor = 'blue';
        document.getElementById('aff_reponse').style.backgroundColor = 'rgb(6, 192, 248)';
        document.getElementById('aff_reponse').textContent = factorielle(sub_number.value);
   }
   else{
        document.getElementById('aff_reponse').style.backgroundColor = 'red';
        document.getElementById('conteneur').style.borderColor = 'red';
        document.getElementById('aff_reponse').textContent = factorielle(sub_number.value);
   }
}