import IDataPersistence from "./IDataPersistence";

export default class ServicePersistData {
    static record(file: string, data: IDataPersistence): boolean {
        try {
            data.record(file);
            return true;
        } catch(error) {
            throw new Error(error);
        }
        
    };

    static read(file: string, data: IDataPersistence): string {
        try {
            return data.read(file);
        } catch(error) {
            throw new Error(error);
        }
    };
}