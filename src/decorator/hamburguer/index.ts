import Hamburguer from "./Hamburguer";
import HamburguerWithBacon from "./HamburguerWithBacon";
import HamburguerWithCheese from "./HamburguerWithCheese";

const hamburguer =  new Hamburguer();

const xBurguer = new HamburguerWithCheese(hamburguer);
const xBacon = new HamburguerWithBacon(hamburguer);

console.log("=============");
console.log("X Burguer");
xBurguer.prepare();
xBurguer.finish();
console.log("=============");

console.log("\n\n=============");
console.log("X Burguer");
xBacon.prepare();
xBacon.finish();
console.log("=============");
