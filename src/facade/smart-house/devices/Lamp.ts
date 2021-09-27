import IDevice from "../IDevice"

export default class Lamp implements IDevice{
    constructor(private name: string, private color: string = "white", private intensity: number = 5) {}


    private setColor(color: string) {
        this.color = color;
    }

    private setIntensity(intensity: number) {
        this.intensity = intensity;
    }

    public turnOn() {
        console.log("Lampada ligada.");
    }

    public turnOff() {
        console.log("Lampada desligada.")
    }

    public changeColor(color: string) {
        this.setColor(color);
        console.log(`Lampada cor ${color}.`);
    }

    public changeIntensity(intensity: number) {
        this.setIntensity(intensity);
        console.log(`Lampada intensidade ${intensity}.`);
    }
}