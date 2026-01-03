import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../src/Landing/Landing.jsx";
import PropertyDetail from "./Component/Properties/PropertyDetail.jsx";
import Login from "./page/Login/Login.jsx";
import SignUp from "./page/Signup/Signup.jsx";
import CheckEmail from "./page/Signup/CheckEmail.jsx";
import Dashboard from "./page/Dashboard/Dashboard.jsx";
import User from "./page/Dashboard/User.jsx";
import Booked from "./page/Dashboard/Booked.jsx";
import Properties from "./page/Dashboard/Properties.jsx";
import Rented from "./page/Dashboard/Rented.jsx";
import Sold from "./page/Dashboard/Sold.jsx";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="property/:id" element={<PropertyDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="check-email" element={<CheckEmail />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="users" element={<User />} />
          <Route path="booked" element={<Booked />} />
          <Route path="properties" element={<Properties />} />
          <Route path="rented" element={<Rented />} />
          <Route path="sold" element={<Sold />} />  
        </Route>
      </Routes>
    </Router>
  );
};
export default Routing;
