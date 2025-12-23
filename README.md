# 🌍 E-Waste Management System - https://aquamarine-starburst-db715f.netlify.app/donate

## 📖 Introduction

This project is a comprehensive **E-Waste Management System** designed to bridge the gap between end-users and recycling facilities. It digitizes the lifecycle of electronic waste—from the moment a user decides to dispose of a device to its final processing at a certified recycling center.

**Live Demo:**  https://aquamarine-starburst-db715f.netlify.app/donate  <!-- Replace with your hosted URL -->

---

## 🛠 Tech Stack

The project is built using a classic **Relational Database Management System (RDBMS)** approach, suitable for integration with web frameworks.

* **Database:** MySQL / MariaDB (Relational)
* **Language:** SQL (Structured Query Language)
* **Backend (Optional):** PHP (PDO) or Python (Flask/Django)
* **Frontend:** HTML5, CSS3, JavaScript (Bootstrap for responsive UI)

---

## ⚙️ How It Works (System Logic)

The system operates through a four-step process:

1. **User Registration:** Users (Individuals or Corporates) create accounts to track their disposal history.
2. **Item Logging:** Users input details about their e-waste (e.g., brand, condition, estimated weight, and category).
3. **Center Allocation:** The system identifies the nearest or most appropriate **Recycling Center** based on the category of waste.
4. **Transaction/Status Tracking:** Every item is assigned a status (e.g., *Pending, Collected, In-Process, Recycled*).

---

## 🗄️ Database Architecture (ERD Breakdown)

The `e-waste.sql` file initializes a schema designed for data integrity and scalability.

### **Core Entities**

| Table | Description | Key Fields |
| --- | --- | --- |
| **Users** | Stores personal details of donors and admins. | `user_id`, `username`, `email`, `address`, `role` |
| **Categories** | Defines types of waste (Laptops, Batteries, CRT). | `cat_id`, `category_name`, `hazard_level` |
| **WasteItems** | The actual devices being recycled. | `item_id`, `user_id`, `cat_id`, `weight`, `status` |
| **Centers** | Physical locations where waste is processed. | `center_id`, `location`, `contact`, `capacity` |
| **Pickups** | Manages the logistics of waste collection. | `pickup_id`, `item_id`, `date`, `agent_name` |

### **Relationship Logic**

* **One-to-Many:** One **User** can dispose of multiple **WasteItems**.
* **Categorization:** Every **WasteItem** must belong to one **Category** to ensure proper handling.
* **Logistics:** One **Center** can manage multiple **Pickups**.

---

## 🚀 Installation Guide

### **Prerequisites**

* XAMPP / WAMP or standalone MySQL Server.
* Code editor like VS Code or PHPStorm.

### **Execution Steps**

1. **Import Database:**

* Open **phpMyAdmin**.
* Create a database named `ewaste_mgmt`.
* Click **Import** → Select `e-waste.sql` → **Go**.

2. **Verify Tables:**

Ensure all tables (Users, Items, Categories, Centers, Pickups) are visible.

3. **Example Query: Track Waste by User**

```sql
SELECT u.username, i.item_name, c.category_name
FROM Users u
`````

## 📈 Impact & Sustainability

* **Reduce Landfill Waste:** Ensures toxic components like lead and mercury are extracted safely.  
* **Data-Driven Decisions:** SQL queries provide insights on regional e-waste generation.  
* **Transparency:** Users can track when their item was recycled, building trust.

JOIN WasteItems i ON u.user_id = i.user_id
JOIN Categories c ON i.cat_id = c.cat_id;
