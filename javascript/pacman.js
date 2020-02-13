











var pacman = new Pacman()

var fantomeBleu = new Fantome("fantomeBleu")
var fantomeJaune = new Fantome("fantomeJaune")
var fantomeVert = new Fantome("fantomeVert")
var fantomeRouge = new Fantome("fantomeRouge")

var grilleDef = new Grille()
var grille = grilleDef.getGrilleDef();



var laGrille =document.querySelector("#grille");

function initGrille(){
/* vider la grille */
let i= 1;
let y = 1;

laGrille.innerHTML="";
/* /* dimension dynamique de la grille */
laGrille.style.gridTemplateRows = "repeat(22, 40px)";
laGrille.style.gridTemplateColumns = "repeat(19, 40px)";

for(let ligne in grille){
    for(let col in grille [ligne]){
        let monelement=document.createElement("div");

        if ((grille[ligne][col]) ==(0)){
            monelement.classList.add("mur");
        }

        else    if((grille[ligne][col])==(1)){
            monelement.classList.add("sol");
        }

        else    if((grille[ligne][col])==(2)){
            monelement.classList.add("bonbon");
        }
        monelement.style.gridColumn=(+col)+1;
        monelement.style.gridRow=(+ligne)+1;
        laGrille.appendChild(monelement);
}}}



 var score = 0;

var affichage = document.querySelector('h2')



function rafraichir()
{
    initGrille();
    pacman.bougePacman();
    fantomeBleu.bougeFantome();
    fantomeJaune.bougeFantome();
    fantomeRouge.bougeFantome();
    fantomeVert.bougeFantome();

    setTimeout(rafraichir,200)
    
}

rafraichir(); 