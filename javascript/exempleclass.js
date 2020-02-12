class Voiture
{
    Marque;
    Modele;
    Couleur;
    constructor(marque,modele,couleur){
        this.Marque = marque;
        this.Modele = modele;
        this.couleur =couleur;
    }
roule(){
    return "Vroum Vroum";
}

get toto(){
    return "Voiture de marque"+this.Marque;
}
set toto(laMarque){
    this.Marque = laMarque.toUpperCase();
}
get Modele(){
    return"Voiture de modele"+this.Modele;
}
set Modele(leModele){
    this.Modele= leModele
}
}

var maVoit = new Voiture ("Audi","A3","grise")
console.log(maVoit.roule());
console.log(maVoit.toto);
maVoit.toto="ford";
