# React Investment Calculator

A sleek, modern React application built with **Vite** that helps users calculate their investment growth over time. 

![Investment Calculator Preview](https://via.placeholder.com/800x400.png?text=Investment+Calculator+Preview) <!-- Note: Replace with actual screenshot when UI is implemented -->

## 🚀 Features

- **Real-time Calculations**: Instantly see how your money grows as you adjust inputs.
- **Dynamic Inputs**:
  - `Initial Investment`: Your starting capital.
  - `Annual Investment`: Amount added to the investment each year.
  - `Expected Return`: Annual rate of return (%).
  - `Duration`: Number of years for the investment.
- **Data Visualization**: (Planned) Visual tables and charts to represent year-by-year growth.
- **Currency Formatting**: Automatically formats values in USD using the built-in `Intl.NumberFormat` API.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS
- **Linting**: ESLint

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd "Investment Calculator"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📂 Project Structure

- `src/util/investment.js`: Core logic for calculating annual investment results.
- `src/App.jsx`: Main application component.
- `src/index.css`: Global styles and UI theme.

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
