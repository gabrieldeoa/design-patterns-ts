import path from "path";
import { existsSync, writeFileSync, appendFileSync } from "fs";

import ILoggerOutput from "./ILoggerOutput";

export default class LoggerFile implements ILoggerOutput {


  constructor(private filename: string, private filepath: string) { }

  print(message: string): void {
    const baseDir = path.join(__dirname, this.filepath);
    const pathfile = `${baseDir}${this.filename}`;

    const fileExists = existsSync(pathfile);

    if(fileExists) {
      const messageWithLineBreak = `\n\r${message}`;
      appendFileSync(pathfile, messageWithLineBreak);
    } else {
      writeFileSync(pathfile, message);
    }

    console.log(`${message} in file ${this.filename}`);
  }
}
