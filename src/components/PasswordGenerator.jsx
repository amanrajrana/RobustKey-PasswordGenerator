import React, { useState } from "react";
import CheckBoxWithLabel from "./checkBoxWithLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

const PasswordGenerator = () => {
  // State variables
  const [message, setMessage] = useState(
    "Create. Protect. Secure. Generate your password now"
  );
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(15);
  const [isUserError, setIsUserError] = useState(false);
  const [checkBox, setCheckBox] = useState({
    alphabets: true,
    numbers: true,
    specialChar: true,
  });

  // Checkbox options for password generation
  const options = [
    { name: "Alphabets", enabled: checkBox.alphabets, generator: "alphabet" },
    { name: "Numbers", enabled: checkBox.numbers, generator: "number" },
    {
      name: "Special Characters",
      enabled: checkBox.specialChar,
      generator: "specialChar",
    },
  ];

  // Character generators for each option
  const generators = {
    alphabet: () => {
      const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      return text[Math.trunc(Math.random() * 51)];
    },
    number: () => {
      const text = "0123456789";
      return text[Math.trunc(Math.random() * 9)];
    },
    specialChar: () => {
      const text = "!@#$%^&*()-=[]{}/?<>_";
      return text[Math.trunc(Math.random() * 20)];
    },
  };

  const handleGeneratePass = () => {
    const selectedOptions = options.filter((option) => option.enabled);
    if (selectedOptions.length < 1) {
      setMessage("Please select at least one option to generate password");
      setIsUserError(true);
      return;
    }

    let generatedPassword = "";
    let i = 0;
    while (i < passwordLength) {
      const randomOption =
        selectedOptions[Math.trunc(Math.random() * selectedOptions.length)];
      generatedPassword += generators[randomOption.generator]();
      i++;
    }
    setPassword(generatedPassword);
    setMessage("Click to copy password");
  };

  const copyPassword = () => {
    if (password.length < 1) {
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          alert("Password copied");
        })
        .catch((error) => {
          alert("Unable to copy text to clipboard:", error);
        });
    } else {
      alert("Unable to copy password!");
    }
  };

  const handleCheckBoxClick = (e) => {
    const { name, checked } = e.target;
    setCheckBox((prev) => ({ ...prev, [name]: checked }));
    setMessage("Create. Protect. Secure. Generate your password now");
    setIsUserError(false);
  };

  return (
    <section className="text-gray-600 body-font dark:text-gray-400">
      <div className="container max-w-screen-xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100">
            Generate Strong and Secure Passwords with Ease
          </h1>
          <p className="mb-8 leading-relaxed">
            Generate strong, secure passwords instantly. Safeguard your accounts
            with ease. Take control of your online security now.
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <input
                type="text"
                className={`w-full bg-gray-100 dark:bg-gray-600 rounded border bg-opacity-50 border-gray-300 dark:border-blue-950 focus:ring-2 focus:ring-blue-200 focus:bg-transparent focus:border-indigo-700 text-lg font-semibold outline-none text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out cursor-copy tracking-widest active:relative active:top-0.5`}
                value={password}
                readOnly
                onClick={copyPassword}
                placeholder="Click Generate to Generate Password"
              />
            </div>
            <button
              className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg active:relative active:top-0.5"
              onClick={handleGeneratePass}
            >
              Generate
            </button>
          </div>
          <p
            className={`text-sm mt-2 ${
              isUserError ? "text-red-600" : "text-gray-500"
            } mb-4 w-full`}
          >
            {password.length > 0 ? (
              <FontAwesomeIcon icon={faCopy} onClick={copyPassword} style={{ cursor: "pointer" }} />
            ) : (
              message
            )}
          </p>
          <h4 className="font-semibold my-3">Customize Password</h4>
          <div className="flex gap-2">
            <input
              className="cursor-pointer"
              type="range"
              name="passwordLength"
              min={8}
              max={30}
              value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
            />
            <input
              className="w-16 text-center p-1 bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-blue-200 focus:bg-transparent focus:border-indigo-700 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
              type="number"
              max={30}
              name="passwordLength"
              value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
            />
          </div>
          <CheckBoxWithLabel
            label="alphabets"
            isChecked={checkBox.alphabets}
            handleCheckBoxClick={handleCheckBoxClick}
          />
          <CheckBoxWithLabel
            label="numbers"
            isChecked={checkBox.numbers}
            handleCheckBoxClick={handleCheckBoxClick}
          />
          <CheckBoxWithLabel
            label="specialChar"
            isChecked={checkBox.specialChar}
            handleCheckBoxClick={handleCheckBoxClick}
          />
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center"
            alt="hero"
            src="https://github.com/amanrajrana/RobustKey-PasswordGenerator/assets/75106349/974adb14-1952-408a-970b-168f3d94da63"
            height={500}
            // alt="Password Generator"
          />
        </div>
      </div>
    </section>
  );
};

export default PasswordGenerator;
