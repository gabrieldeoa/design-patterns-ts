import IDevice from "./IDevice"

export default class Room {
   constructor(private name: string, private description: string, private devices: IDevice[] ) {}

    public getDevices() :IDevice[] {
        return this.devices;
    }
}