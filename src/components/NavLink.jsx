import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavLink = ({ to, label }) => {
  return (
    <Link to={to} className="text-lg sm:opacity-90 hover:opacity-100">
      {label}
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavLink;
