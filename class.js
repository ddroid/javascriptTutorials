//* class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions ex. static keyword, encapsulation, inheritance

class Tiles{
    constructor(name, sizeInMeters, color, pricePerMeterSquare){
        this.name = name;
        this.size = sizeInMeters;
        this.color = color;
        this.price = pricePerMeterSquare; 
    }

    displayTiles(){
        console.log(this.name);
        console.log(this.size);
        console.log(this.color);
        console.log(this.price);
    }
}

const Tile1 = new Tiles("Chiti", "5x5", "white and brown", 4.55);
const Tile2 = new Tiles("Pilli", "2x2", "yellow and orange", 2.99);
const Tile3 = new Tiles("Nille", "7x5", "white and blue", 8.99);

Tile1.displayTiles();
Tile2.displayTiles();
Tile3.displayTiles();

console.log(Tile1);
