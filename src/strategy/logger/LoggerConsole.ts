import ILoggerOutput from "./ILoggerOutput";

export default class LoggerConsole implements ILoggerOutput {
  print(message: string): void {
    console.log(`${message}`);
  }
}
