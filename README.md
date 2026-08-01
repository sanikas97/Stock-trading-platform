# Stock-trading-platform

A full-stack trading dashboard clone inspired by [Zerodha Kite](https://kite.zerodha.com/), built with the MERN stack (MongoDB, Express, React, Node.js). This project replicates the core UI/UX of a modern trading platform, including a live watchlist, holdings, positions, orders, and funds pages.

![Dashboard Preview](./screenshot.png)

## Features

- **Dashboard** — Portfolio summary with equity margin and holdings overview
- **Watchlist** — Scrollable stock list with live price/percentage display and quick Buy/Sell actions
- **Holdings** — Table view of owned stocks with P&L, current value, and a visual bar chart
- **Positions** — Open positions with real-time profit/loss coloring
- **Orders** — Order history view (currently displays orders placed via the backend API)
- **Funds** — Account margin, balance, and commodity account details
- **Apps** — Placeholder page for future app integrations

## Tech Stack

**Frontend**
- React 18
- React Router DOM
- Material UI (MUI)
- Chart.js / react-chartjs-2
- Axios

**Backend**
- Node.js
- Express
- MongoDB with Mongoose
- dotenv, cors, body-parser

## Project Structure

```
Zerodha-main/
├── backend/          # Express API server + MongoDB models
│   ├── model/
│   ├── schemas/
│   ├── index.js
│   └── .env
├── dashboard/         # Main React trading dashboard (MUI-based)
│   ├── src/
│   │   ├── components/
│   │   ├── index.css
│   │   └── index.js
└── frontend/          # Secondary React app (landing/auth)
    └── src/
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally, or a MongoDB Atlas cluster)

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd Zerodha-main
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```
MONGO_URL=mongodb://127.0.0.1:27017/zerodha
```

(Replace with your MongoDB Atlas connection string if using the cloud instead of a local database.)

Start the backend server:

```bash
npm start
```

The server runs on `http://localhost:3002` by default.

### 3. Seed sample data (optional, first-time only)

With the backend running, visit these URLs once in your browser to populate sample holdings and positions:

```
http://localhost:3002/addHoldings
http://localhost:3002/addPositions
```

### 4. Set up the dashboard (frontend)

In a new terminal:

```bash
cd dashboard
npm install
npm start
```

This opens the dashboard automatically at `http://localhost:3000`.

## Environment Variables

| Variable    | Description                          | Example                                |
|-------------|---------------------------------------|-----------------------------------------|
| `MONGO_URL` | MongoDB connection string             | `mongodb://127.0.0.1:27017/zerodha`     |
| `PORT`      | Backend server port (optional)        | `3002`                                  |

## API Endpoints

| Method | Endpoint         | Description                     |
|--------|------------------|----------------------------------|
| GET    | `/allHoldings`   | Fetch all holdings              |
| GET    | `/allPositions`  | Fetch all positions             |
| POST   | `/newOrder`      | Save a new buy/sell order       |
| GET    | `/addHoldings`   | Seed sample holdings (dev only) |
| GET    | `/addPositions`  | Seed sample positions (dev only)|

## Notes

- This is an educational clone built for learning full-stack development — it does not connect to real market data or a live brokerage.
- NIFTY 50 / SENSEX index values shown in the top bar are static placeholders.
- Positions data is currently sourced from a static local file rather than the database.

## License

This project is for educational purposes only.
