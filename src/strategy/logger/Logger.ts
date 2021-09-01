import LoggerOutputInterface from "./LoggerOutputInterface";

export default class Logger {
  private logOutput: LoggerOutputInterface | null = null;

  setLogOutput(logOutput: LoggerOutputInterface): void {
    this.logOutput = logOutput;
  }

  private doPrint(message: string) {
    if (!this.logOutput) {
      throw new Error("No output has been set");
    }
  
    this.logOutput.print(message);
  }

  debug(message: string): void {
    this.doPrint(`[DEBUG]: ${message}`)
  }

  error(message: string): void {
    this.doPrint(`[ERROR]: ${message}`)
  }

  info(message: string): void {
    this.doPrint(`[INFO]: ${message}`)
  }
}
