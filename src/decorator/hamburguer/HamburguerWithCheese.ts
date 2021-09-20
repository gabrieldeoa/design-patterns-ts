import HamburguerDecorator from "./HamburguerDecorator";

export default class HamburguerWithCheese extends HamburguerDecorator {
    prepare() :void {
        this.ingredients.push("Queijo");
        this.wrapper.prepare();

    }
}