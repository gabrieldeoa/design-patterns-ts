import HamburguerDecorator from "./HamburguerDecorator";

export default class HamburguerWithBacon extends HamburguerDecorator {
    prepare() :void {
        this.ingredients.push("Bacon");
        this.wrapper.prepare();
    }
}