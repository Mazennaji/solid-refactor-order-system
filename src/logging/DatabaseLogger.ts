import { ILogger } from "../interfaces/ILogger";

export class DatabaseLogger implements ILogger {
    log(message: string): void {
        console.log(`🗄️ DB Log: ${message}`);
    }
}
