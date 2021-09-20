import { IHamburguer } from "./IHamburguer";

export default class Hamburguer implements IHamburguer {


    constructor() {}

    prepare(): void {
        console.log("\nHamburguer")
    }

    finish(): void { 
        console.log("\nHamburguer pronto!");
    }
}