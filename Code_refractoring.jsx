import React from 'react';

// Create an array of checkbox options with props
const checkBoxOptions = [
  {
    label: 'uppercase',
    isChecked: checkBox.uppercase,
    handleCheckBoxClick: handleCheckBoxClick,
  },
  {
    label: 'lowercase',
    isChecked: checkBox.lowercase,
    handleCheckBoxClick: handleCheckBoxClick,
  },
  {
    label: 'numbers',
    isChecked: checkBox.numbers,
    handleCheckBoxClick: handleCheckBoxClick,
  },
  {
    label: 'specialChar',
    isChecked: checkBox.specialChar,
    handleCheckBoxClick: handleCheckBoxClick,
  },
];

function App() {
  return (
    <div>
      {/* Use map to generate the CheckBoxWithLabel components */}
      {checkBoxOptions.map((option) => (
        <CheckBoxWithLabel
          key={option.label} // Use label as the key since it should be unique
          label={option.label}
          isChecked={option.isChecked}
          handleCheckBoxClick={option.handleCheckBoxClick}
        />
      ))}
    </div>
  );
}

export default App;
