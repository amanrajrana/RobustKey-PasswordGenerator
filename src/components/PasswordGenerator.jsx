import { useState } from "react";
import {GrCopy} from "react-icons/gr"
import CheckBoxWithLabel from "./checkBoxWithLabel";
// import CopyClipboard from "../assets/CopyClipboard";

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
  
  const checkBoxOptions = [
    { label: 'uppercase', key: 'uppercase' },
    { label: 'lowercase', key: 'lowercase' },
    { label: 'numbers', key: 'numbers' },
    { label: 'specialChar', key: 'specialChar' }
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
      alert("unable to copy password!");
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
          <div className="flex gap-2 w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <input
                type="text"
                className="placeholder:italic w-full text-sm bg-gray-100 dark:bg-gray-600 rounded border bg-opacity-50 border-gray-300 dark:border-blue-950 focus:ring-2 focus:ring-blue-200 focus:bg-transparent focus:border-indigo-700 outline-none text-gray-700 dark:text-white py-1 pl-3 pr-8 leading-8 transition-colors duration-200 ease-in-out tracking-widest active:relative active:top-0.5 text-ellipsis"
                value={password}
                readOnly
                placeholder="Click the icon on right to copy password"
              />
              
              <button
                onClick={copyPassword}
                className="absolute right-0 top-0 bottom-0 m-auto mr-2 cursor-pointer"
              >
                {password ? <GrCopy /> : ""}
              </button>
            </div>
            {/* <GrCopy size={35} className="mr-3"/> */}
            <button
              className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6  focus:outline-none hover:bg-indigo-700 rounded text-lg active:relative active:top-0.5"
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
            {message}
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
          <div style={{display:"flex", flexDirection: "column"}}>
            {checkBoxOptions.map(option => (
             <CheckBoxWithLabel
               key={option.key}
               label={option.label}
               isChecked={checkBox[option.key]}
               handleCheckBoxClick={handleCheckBoxClick}
             />
            ))}
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2">
              Exclude Characters:
            </label>
            <input
              type="text"
              className="w-52 text-sm bg-gray-100 dark:bg-gray-600 rounded border bg-opacity-50 border-gray-300 dark:border-blue-950 focus:ring-2 focus:ring-blue-200 focus:bg-transparent focus:border-indigo-700 outline-none text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Enter characters to exclude"
              value={excludeCharacters}
              onChange={(e) => setExcludeCharacters(e.target.value)}
            />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center"
            alt="hero"
            src="https://github.com/amanrajrana/RobustKey-PasswordGenerator/assets/75106349/974adb14-1952-408a-970b-168f3d94da63"
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default PasswordGenerator;