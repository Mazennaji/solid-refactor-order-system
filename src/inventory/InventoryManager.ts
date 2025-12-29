import { IInventoryManager } from "../interfaces/IInventoryManager";

export class InventoryManager implements IInventoryManager {
    constructor(private inventory: Record<string, number>) {}

    reduceStock(item: string, quantity: number): void {
        this.inventory[item] -= quantity;
        console.log(`📦 Inventory for ${item}: ${this.inventory[item]}`);
    }
}
