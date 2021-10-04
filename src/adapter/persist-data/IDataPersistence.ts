export default interface IDataPersistence {
    record(file: string): void;
    read(filename: string): string;
}