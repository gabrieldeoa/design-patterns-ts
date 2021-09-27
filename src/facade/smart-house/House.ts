import Room from "./Room";

export default class House {
    constructor(private name: string, private room: Room[]) {}

    public getRoom() :Room[] {
        return this.room;
    }
}