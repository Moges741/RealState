import { NavLink, Outlet, useLocation } from "react-router";
// import User from "./User"
import "./dashboard.css";

function Dashboard() {
    const {pathname} = useLocation();
    console.log(pathname);
  return (
    <div className="container">
      <div className="sidebar">
        <div className="profile">
          <div className="profile-img">
            <img src="/profile.jpg" alt="admin" />
          </div>
          <div className="description">
            <p>Admin</p>
            <p>Efeson Uliso</p>
          </div>
        </div>

        <div className="links">
          <NavLink end to="/dashboard" className={({ isActive }) =>
          isActive ? "active" : ""
        }>Dashboard</NavLink>
          <NavLink to="/dashboard/users" className={({ isActive }) =>
          isActive ? "active" : ""
        }>Users</NavLink>
          <NavLink to="/dashboard/properties" className={({ isActive }) =>
          isActive ? "active" : ""
        }>Properties</NavLink>
          <NavLink to="/dashboard/booked" className={({ isActive }) =>
          isActive ? "active" : ""
        }>Booked Properties</NavLink>
          <NavLink to="/dashboard/rented" className={({ isActive }) =>
          isActive ? "active" : "   "
        }>Rented Properties</NavLink>
          <NavLink to="/dashboard/sold" className={({ isActive }) =>
          isActive ? "active" : ""
        }>Sold Properties</NavLink>
        </div>

        <div className="btn">
            <button>Logout</button>
        </div>
      </div>
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
