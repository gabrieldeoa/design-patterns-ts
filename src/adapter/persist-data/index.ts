import DropBoxAdapter from "./DropboxAdapter";
import GoogleDriveAdapter from "./GoogleDriveAdapter";
import ServicePersistData from "./ServicePersistData";

const file = "teste";

const dropbox = new DropBoxAdapter();
ServicePersistData.record(file, dropbox);
ServicePersistData.read(file, dropbox);

const gDrive = new GoogleDriveAdapter();
ServicePersistData.record(file, gDrive);
ServicePersistData.read(file, gDrive);