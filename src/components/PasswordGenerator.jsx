import { useState } from "react";

const PasswordGenerator = () => {
  // State variables
  const [message, setMessage] = useState("Create. Protect. Secure. Generate your password now");
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(15);
  const [isAlphabetsCheck, setIsAlphabetsCheck] = useState(true);
  const [isNumbersCheck, setIsNumbersCheck] = useState(true);
  const [isSpecialCharCheck, setIsSpecialCharCheck] = useState(true);

  // Checkbox options for password generation
  const options = [
    { name: "Alphabets", enabled: isAlphabetsCheck, generator: "alphabet" },
    { name: "Numbers", enabled: isNumbersCheck, generator: "number" },
    { name: "Special Characters", enabled: isSpecialCharCheck, generator: "specialChar" },
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
    if (selectedOptions.length < 2) {
      setMessage("Please select at least two combinations");
      return;
    }

    let generatedPassword = "";
    let i = 0;
    while (i < passwordLength) {
      const randomOption = selectedOptions[Math.trunc(Math.random() * selectedOptions.length)];
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

  return (
    <section className="text-gray-600 body-font">
      <div className="container max-w-screen-xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Generate Strong and Secure Passwords with Ease
          </h1>
          <p className="mb-8 leading-relaxed">
            Generate strong, secure passwords instantly. Safeguard your accounts with ease. Take control of your online
            security now.
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-blue-200 focus:bg-transparent focus:border-indigo-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={password}
                readOnly
                onClick={copyPassword}
              />
            </div>
            <button
              className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg"
              onClick={handleGeneratePass}
            >
              Generate
            </button>
          </div>
          <p className="text-sm mt-2 text-gray-500 mb-4 w-full">{message}</p>
          <p>{}</p>
          <h4 className="font-semibold my-3">Customize Password</h4>
          <div className="flex gap-2">
            <input
              className="cursor-pointer"
              type="range"
              name="passwordLength"
              min={8}
              max={30}
              id="passwordLength"
              value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
            />
            <input
              className="w-16 text-center p-1 bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-blue-200 focus:bg-transparent focus:border-indigo-700 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
              type="number"
              max={30}
              name="passwordLength"
              id=""
              value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <input
              className="cursor-pointer"
              type="checkbox"
              name="alphabets"
              id="alphabets"
              checked={isAlphabetsCheck}
              onChange={(e) => setIsAlphabetsCheck(e.target.checked)}
            />
            <label htmlFor="alphabets">Alphabets</label>
          </div>
          <div className="flex gap-2">
            <input
              className="cursor-pointer"
              type="checkbox"
              name="numbers"
              id="numbers"
              checked={isNumbersCheck}
              onChange={(e) => setIsNumbersCheck(e.target.checked)}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className="flex gap-2">
            <input
              className="cursor-pointer"
              type="checkbox"
              name="specialChar"
              id="specialChar"
              checked={isSpecialCharCheck}
              onChange={(e) => setIsSpecialCharCheck(e.target.checked)}
            />
            <label htmlFor="specialChar">Special Character</label>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://cdn.pixabay.com/photo/2015/10/30/10/40/key-1013662_1280.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default PasswordGenerator;
