
let grille=[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],/* 1 */
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],/* 2 */
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],/* 3 */
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],/* 4 */
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],/* 5 */
    [0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],/* 6 */
    [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],/* 7 */
    [0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],/* 8 */
    [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],/* 9 */
    [0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],/* 10 */
    [2,2,2,2,2,2,2,0,1,1,1,0,2,2,2,2,2,2,2],/* 11 */
    [0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],/* 12 */
    [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],/* 13 */
    [0,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0],/* 14 */
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],/* 15 */
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],/* 16 */
    [0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0],/* 17 */
    [0,0,2,0,2,0,2,0,0,0,0,0,2,0,2,0,2,0,0],/* 18 */
    [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],/* 19 */
    [0,2,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,2,0],/* 20 */
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],/* 21 */
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],/* 22 */
];

var pacman =
{
    x:5,
    y:2,
    direction:0
}
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



 




function bougePacman()
{
        
    
    var div = document.createElement("div")
    div.style.gridRow = pacman.y;
    div.style.gridColumn = pacman.x;
   div.classList.add("pacman");
    laGrille.appendChild(div)
    pacman.direction = 1;
     if (pacman.direction == 1) {
        pacman.y--;
        pacman.direction = 0;}
}
console.log;

if (pacman.direction =0) {
    pacman.cols ++;//droite
} else if (pacman.direction =1) {
    pacman.rows++;//bas
} else if (pacman.direction = 2) {
    pacman.cols--;//gauche
}else if (pacman.direction = 3) {
    pacman.rows--;//haut
} 






function rafraichir()
{
    initGrille();
    bougePacman();

    setTimeout(rafraichir,1000)
    
}

rafraichir(); 



