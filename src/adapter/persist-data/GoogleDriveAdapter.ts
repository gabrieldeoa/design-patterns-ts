import IDataPersistence from "./IDataPersistence";

export default class GoogleDriveAdapter implements IDataPersistence {
    
    /*
    * Aqui teriamos a implentação com a comunicação com a api do Google Drive
    * e/ou pacote de terceiro que faz isso
    */
    record(file: string): void {
        console.log(`Gravando o arquivo ${file} no Google Drive.`);
    };

    read(filename: string): string {
        console.log(`Retornando o arquivo ${filename} do Google Drive`);
        return "Arquivo";
    };
  }