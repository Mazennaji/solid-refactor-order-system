import { StatusUpdateStrategy } from "../interfaces/StatusUpdateStrategy";
import { INotifier } from "../interfaces/INotifier";
import { IInventoryManager } from "../interfaces/IInventoryManager";
import { ILogger } from "../interfaces/ILogger";

export class ShippedStatusStrategy implements StatusUpdateStrategy {
    constructor(
        private notifier: INotifier,
        private inventory: IInventoryManager,
        private logger: ILogger
    ) {}

    execute(orderId: string, item: string, quantity: number): void {
        this.notifier.notify(orderId, "Your order has shipped!");
        this.inventory.reduceStock(item, quantity);
        this.logger.log(`Order ${orderId} shipped`);
    }
}
