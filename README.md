# SOLID Refactor – Order Status System

## 📖 About

This project is a refactoring of a legacy order status management system written in TypeScript.  
The original implementation tightly coupled notification handling, inventory updates, and logging logic into a single class, making the system hard to maintain and extend.

The goal of this project is to apply the **SOLID principles** and clean architecture concepts to produce a **modular, extensible, and testable design** that reflects real-world software engineering best practices.

---

## 📌 Project Overview

The system simulates a simple e-commerce workflow where:
- A customer’s order status changes (shipped or delivered)
- The customer is notified
- Inventory is updated when necessary
- The event is logged

Each responsibility is handled by a dedicated component and coordinated through a high-level module.

---

## 🧱 Project Structure

| Path | Responsibility | SOLID Principle |
|-----|---------------|----------------|
| `interfaces/` | Defines abstractions and contracts | ISP, DIP |
| `inventory/` | Handles inventory updates | SRP |
| `notifications/` | Manages notification channels (Email, SMS, Push) | OCP |
| `logging/` | Provides logging implementations | LSP |
| `strategies/` | Encapsulates order status behavior | Strategy Pattern, OCP |
| `core/` | Coordinates order status updates | DIP |
| `main.ts` | Composition root and application entry point | — |


---

## 🚀 Example Execution Output

When running the application, you will see the following output:

```txt
📧 Email: Order order-1 - Your order has shipped!
📦 Inventory for item1: 8
📝 LOG: Order order-1 shipped
📱 SMS: Order order-2 - Your order has been delivered!
📝 LOG: Order order-2 delivered
```
---
## 🔍 What This Output Demonstrates

### 1️⃣ Shipped Order (`order-1`)
- An **email notification** is sent to the customer  
- The **inventory is reduced** after shipment  
- The event is **logged**

### 2️⃣ Delivered Order (`order-2`)
- An **SMS notification** is sent  
- **No inventory update** is required  
- The delivery event is **logged**

Each action is handled by a **separate class**, coordinated by a **high-level module**, ensuring clear separation of concerns.

---

## ✅ SOLID Principles Applied

| Principle | How It’s Applied |
|---------|------------------|
| **S – Single Responsibility** | Each class has one responsibility |
| **O – Open/Closed** | New notifiers, loggers, or statuses can be added without modifying existing code |
| **L – Liskov Substitution** | All logger implementations can be safely substituted |
| **I – Interface Segregation** | Small, focused interfaces are used |
| **D – Dependency Inversion** | High-level modules depend on abstractions, not concrete classes |

---
## 🎯 Conclusion

This project demonstrates how applying the SOLID principles transforms a tightly coupled legacy system into a clean, extensible, and maintainable architecture suitable for real-world applications and professional software development.
