

class Pacman

{
   x;
   y;
   direction;
   bougePacman()
{
        
    
    var div = document.createElement("div")
    div.style.gridRow = pacman.y;
    div.style.gridColumn = pacman.x;
   div.classList.add("pacman");
    laGrille.appendChild(div)
    
    document.querySelector('body').addEventListener('keydown', function() {

        var touche = window.event ? event.keyCode : event.which;
        if (touche == 90) {
            pacman.direction = 1;
        }
        if (touche == 83) {
            pacman.direction = 2;
        }
        if (touche == 68) {
            pacman.direction = 3;

        }
        if (touche == 81) {
            pacman.direction = 4;
        }
    });
    if (pacman.direction == 1) {
        pacman.y--;

    }
    if (pacman.direction == 2) {
        pacman.y++;

    }
    if (pacman.direction == 3) {
        pacman.x++;

    }
    if (pacman.direction == 4) {
        pacman.x--;

    }

    if (grille[pacman.y - 1][pacman.x - 1] == 0 && pacman.direction == 3) {
        pacman.x--

    }
    if (grille[pacman.y - 1][pacman.x - 1] == 0 && pacman.direction == 4) {
        pacman.x++

    }
    if (grille[pacman.y - 1][pacman.x - 1] == 0 && pacman.direction == 1) {
        pacman.y++

    }
    if (grille[pacman.y - 1][pacman.x - 1] == 0 && pacman.direction == 2) {
        pacman.y--

    }

    if (grille[pacman.y - 1][pacman.x - 1] == 2) {
        grille[pacman.y - 1][pacman.x - 1] = 1
        score++
        affichage.textContent = 'Votre score : ' + score

    }
                 if (score == 191) {
               alert("You Win")
            }
 
}
constructor()
   {
       this.x=5;
       this.y=2;
       this.direction=0;
   }
}
  