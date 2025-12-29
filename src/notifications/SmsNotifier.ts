import { INotifier } from "../interfaces/INotifier";

export class SmsNotifier implements INotifier {
    notify(orderId: string, message: string): void {
        console.log(`📱 SMS: Order ${orderId} - ${message}`);
    }
}
