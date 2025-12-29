import { InventoryManager } from "./inventory/InventoryManager";
import { EmailNotifier } from "./notifications/EmailNotifier";
import { SmsNotifier } from "./notifications/SmsNotifier";
import { ConsoleLogger } from "./logging/ConsoleLogger";
import { ShippedStatusStrategy } from "./strategies/ShippedStatusStrategy";
import { DeliveredStatusStrategy } from "./strategies/DeliveredStatusStrategy";
import { OrderStatusUpdater } from "./core/OrderStatusUpdater";


const inventoryDB = { item1: 10, item2: 5 };

// Services
const inventory = new InventoryManager(inventoryDB);
const email = new EmailNotifier();
const sms = new SmsNotifier();
const logger = new ConsoleLogger();

// Strategies
const strategies = new Map<string, ShippedStatusStrategy | DeliveredStatusStrategy>([
    ["shipped", new ShippedStatusStrategy(email, inventory, logger)],
    ["delivered", new DeliveredStatusStrategy(sms, logger)]
]);

// App
const updater = new OrderStatusUpdater(strategies);

// Demo
updater.updateStatus("shipped", "order-1", "item1", 2);
updater.updateStatus("delivered", "order-2", "item2", 1);
