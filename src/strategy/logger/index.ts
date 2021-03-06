import Logger from "./Logger";
import LoggerConsole from "./LoggerConsole";
import LoggerFile from "./LoggerFile";

const logger = new Logger();

logger.setLogOutput(new LoggerConsole());
logger.debug("Debugging");

logger.setLogOutput(new LoggerFile("Test.txt", "/file/"));
logger.debug("Debugging");
logger.error("Error on line 43... ");
