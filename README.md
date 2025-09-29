# 🌾 AgriCircle – Connecting Farmers to Markets, Smarter & Fairer

![KisanSetu Banner](docs/images/banner.png)

AgriCircle is an **AI-driven agriculture marketplace platform** that empowers farmers by:

* Providing **fair price predictions** for their crops
* Offering **cooperative selling advantages**
* Delivering **risk alerts** (weather, pests, demand cycles)
* Connecting directly with **buyers & marketplaces**

👉 Our mission: **Reduce farmer losses, enable smarter selling, and strengthen rural communities.**

---

## 📌 Table of Contents

1. [Problem Statement](#-problem-statement)
2. [Solution](#-solution)
3. [Key Features](#-key-features)
4. [Tech Stack](#-tech-stack)
5. [System Architecture](#-system-architecture)
6. [Installation & Setup](#-installation--setup)
7. [Usage Guide](#-usage-guide)
8. [Screenshots / Demo](#-screenshots--demo)
9. [Roadmap](#-roadmap)
10. [Contributing](#-contributing)
11. [License](#-license)
12. [Acknowledgements](#-acknowledgements)

---

## ❌ Problem Statement

Farmers in India often sell their produce at **low prices** due to:

* Lack of **real-time market insights**
* Dependence on **middlemen & mandis**
* **No forecasting tools** to predict demand & price trends
* Limited **access to buyers** outside their local market

This results in **financial losses** and a weaker rural economy.

---

## ✅ Solution

AgriCircle provides farmers with:

* 📊 **AI-driven crop price predictions** using time-series forecasting (Prophet, ARIMA, LSTM).
* 🌦 **Risk alerts** for weather & pests.
* 👨‍👩‍👦 **Cooperative advantage** – group selling, bulk contracts, shared storage.
* 🛒 **Marketplace integration** – direct access to buyers, mandi comparisons, bulk bidding.
* 📱 **Mobile-first design** – easy to use on smartphones, even in low-bandwidth regions.

---

## 🚀 Key Features

### 1. Buyer & Marketplace Dashboard

* Login/Signup with authentication
* Browse produce listings (price, quantity, seller info)
* Search & filter by crop, price, location
* Real-time mandi price comparison
* Bid on produce or create bulk contracts

### 2. Cooperative Features

* Group listings & deals from village cooperatives
* Shared storage & rental coordination
* AI-based negotiator for minimum price suggestions
* Profit tracking dashboard

### 3. Transactions & Payments

* UPI/Paytm/PhonePe integration for instant payouts
* Transparent transaction history

### 4. Notifications & Alerts

* Price alerts, deal status updates
* Weather & pest risk warnings

### 5. Analytics & Reports

* Market intelligence (price trends, demand forecasts)
* Yield & risk analysis (per crop & region)

### 6. Admin Panel (Optional)

* Manage users, cooperatives, listings
* Generate platform-wide analytics

---

## 🛠 Tech Stack

### Frontend

* **React + TypeScript** (UI development)
* **Tailwind CSS** (styling, responsive design)
* **Vite** or **Next.js** (for optimized builds & SSR if needed)

### Backend

* **Node.js + Express** (API handling)
* **MongoDB / PostgreSQL** (data storage)
* **Redis** (caching, real-time price updates)

### AI & Machine Learning

* **Python (FastAPI / Flask)** for ML services
* **Prophet, ARIMA, LSTM (TensorFlow/PyTorch)** for price forecasting
* **Scikit-learn** for risk prediction models

### DevOps

* **Docker** (containerization)
* **Kubernetes** (scaling microservices)
* **CI/CD** via GitHub Actions

### Others

* **Payment APIs** – Razorpay, UPI
* **Localization** – i18n (Hindi, Telugu, Tamil, Bengali, etc.)

---

## 🏗 System Architecture

```
Farmer/Buyer App → Frontend (React/Next.js)
                  → Backend (Node.js + Express API)
                  → ML Models (FastAPI microservice)
                  → Database (MongoDB/Postgres)
                  → Payments (UPI/Razorpay)
```

---

## ⚡ Installation & Setup

1. **Clone Repo**

```bash
git clone https://github.com/Govern0r111/farmer.git
cd kisansetu
```

2. **Install Dependencies**

```bash
npm install   # frontend
cd ml-models && pip install -r requirements.txt   # ML service
```

3. **Run Frontend**

```bash
npm run dev
```

4. **Run Backend**

```bash
cd backend
npm start
```

5. **Run ML Models**

```bash
uvicorn app:main --reload
```

---

## 📖 Usage Guide

* Visit: `http://localhost:3000` for the web app
* Signup/Login as a **Farmer**, **Buyer**, or **Cooperative**
* Explore Marketplace → Create Listing → Bid → Track Analytics

---

## 📸 Screenshots / Demo

*(Add images when ready)*

* **Landing Page**
* **Marketplace View**
* **Cooperative Dashboard**
* **Price Prediction Graphs**

---

## 🛤 Roadmap

* [ ] Add multi-language support
* [ ] Launch Android PWA version
* [ ] Expand AI to include **pest detection** from crop images
* [ ] Blockchain-based transparent transactions

---

## 🤝 Contributing

We welcome contributions! 🚜

1. Fork the repo
2. Create a feature branch: `git checkout -b feature-new`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push branch: `git push origin feature-new`
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🙏 Acknowledgements

* Farmers & cooperatives who inspired this project
* Open-source community (React, Tailwind, TensorFlow)
* Govt. agri-market data APIs (Agmarknet, FCI)
* Contributors & supporters of KisanSetu

---
