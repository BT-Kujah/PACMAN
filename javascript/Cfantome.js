class Fantome {
    x;
    y;
    direction;
    couleur;


     getRandomIntInclusive(min,max)
{  min=Math.ceil(min);
  max=Math.floor(max);
  return Math.floor(Math.random()*(max-min+1))+min;
} 


     bougeFantome () 
{
    var div = document.createElement("div")
    div.style.gridRow = this.y;
    div.style.gridColumn = this.x;
   div.classList.add(this.couleur);
    laGrille.appendChild(div)

Fantome.direction= this.getRandomIntInclusive(1,4) 


if (Fantome.direction == 1) {
        this.y--;

    }
    if (Fantome.direction == 2) {
        this.y++;

    }
    if (Fantome.direction == 3) {
        this.x++;

    }
    if (Fantome.direction == 4) {
        this.x--;

    }
}



constructor(couleur)
{
    this.x=5;
    this.y=2;
    this.direction=0;
    this.couleur = couleur
}
}