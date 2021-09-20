import { IHamburguer } from "./IHamburguer";

export default class HamburguerDecorator implements IHamburguer {

    protected ingredients: Array<string>;
    protected wrapper: IHamburguer;

    constructor(wrapper: IHamburguer, ingredients: string[] = ["Pão", "Carne", "Salada"]) {
        this.wrapper = wrapper;
        this.ingredients = ingredients;
    }

    prepare(): void { 
        this.wrapper.prepare();
    }

    finish(): void { 
        console.log(`Hamburguer pronto! Ingredientes: ${this.ingredients.toString()}`);
    }
}