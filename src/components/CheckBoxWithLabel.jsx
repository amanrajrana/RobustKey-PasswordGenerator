import PropTypes from "prop-types";

const CheckBoxWithLabel = ({label, isChecked, handleCheckBoxClick}) => {
  return (
    <div className="flex gap-2">
      <input
        className="cursor-pointer"
        type="checkbox"
        name={label}
        checked={isChecked}
        onChange={handleCheckBoxClick}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

CheckBoxWithLabel.propTypes = {
    label: PropTypes.string.isRequired,
    handleCheckBoxClick: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
};

export default CheckBoxWithLabel;
