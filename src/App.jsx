import { BrowserRouter, Routes, Route } from "react-router-dom";

import StationsPage from "./pages/StationsPage";
import SlotsPage from "./pages/SlotsPage";
import BookingsPage from "./pages/BookingsPage";
import MapPage from "./pages/MapPage";
import DashboardPage from "./pages/DashboardPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import { Navigate } from "react-router-dom";

function App() {

  return (

    <BrowserRouter>

      <Routes>
       <Route
       path="/"
       element={
        localStorage.getItem("role") === "ADMIN"
            ? <Navigate to="/dashboard"/>
            : localStorage.getItem("role") === "USER"
                ? <Navigate to="/stations"/>
                : <Navigate to="/login"/>
       }
      />
        <Route
          path="/login"
          element={ <LoginPage /> }
        />

        <Route
          path="/register"
          element={ <RegisterPage /> }
        />

        <Route
          path="/stations"
          element={ <ProtectedRoute><StationsPage /></ProtectedRoute> }
        />

        <Route
          path="/slots/:stationId"
          element={ <ProtectedRoute><SlotsPage /></ProtectedRoute> }
        />

        <Route
          path="/bookings"
          element={ <ProtectedRoute><BookingsPage /></ProtectedRoute> }
        />

        <Route
          path="/map"
          element={ <ProtectedRoute><MapPage /></ProtectedRoute> }
        />

       <Route
      path="/dashboard"
     element={
        localStorage.getItem("role") === "ADMIN"
            ? <DashboardPage/>
            : <Navigate to="/stations"/>
    }
/>
      </Routes>

    </BrowserRouter>

  );

}

export default App;