import { StatusUpdateStrategy } from "../interfaces/StatusUpdateStrategy";
import { INotifier } from "../interfaces/INotifier";
import { ILogger } from "../interfaces/ILogger";

export class DeliveredStatusStrategy implements StatusUpdateStrategy {
    constructor(
        private notifier: INotifier,
        private logger: ILogger
    ) {}

    execute(orderId: string): void {
        this.notifier.notify(orderId, "Your order has been delivered!");
        this.logger.log(`Order ${orderId} delivered`);
    }
}
