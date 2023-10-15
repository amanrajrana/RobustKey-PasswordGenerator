import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const NavLink = ({ to, label }) => {
  const location = useLocation();
  return (
    <Link
      to={to}
      className={`hover:text-white text-lg ${
        location.pathname === to ? "text-white" : "text-slate-200"
      }`}
    >
      {label}
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavLink;
