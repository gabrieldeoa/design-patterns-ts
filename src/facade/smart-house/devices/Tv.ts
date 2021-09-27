import IDevice from "../IDevice";
export default class Tv implements IDevice {
    constructor(private name: string) {}

    public turnOn() {
        console.log("TV ligada.")
    }

    public turnOff() {
        console.log("TV desligada.")
    }

    public play(midia: string) {
        console.log(`TV executando ${midia}`)
    }
}