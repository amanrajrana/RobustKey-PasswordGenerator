import { FaQuoteRight } from "react-icons/fa";
import FiveRandomContributors from "../components/FiveRandomContributors";
import PasswordGenerator from "../components/PasswordGenerator";
import { BiLinkExternal } from "react-icons/bi";

const Home = () => {
  return (
    <div>
      <PasswordGenerator />

      <div className="text-center bg-indigo-700 py-8 text-lg dark:bg-indigo-950">
        <h3 className="text-3xl font-semibold text-white">Our Contributors</h3>
        <p className="text-indigo-200 my-2">
          Thanks to our amazing contributors for making this project shine! 🌟
        </p>
        <div className="my-8">
          <FiveRandomContributors />
        </div>
        <a
          href="https://github.com/amanrajrana/RobustKey-PasswordGenerator"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          Become a contributor <BiLinkExternal className="inline" />
        </a>
      </div>

      <section className="text-gray-600 body-font dark:text-gray-400">
        <div className="container px-5 py-20 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <FaQuoteRight size={40} className="mx-auto mb-8" />
            <p className="leading-relaxed text-lg">
              Why settle for weak and easily guessable passwords when you can
              ensure your online security with our password generator? By using
              our powerful tool, you eliminate the risk of using common phrases
              or personal information as your password. Our generator generates
              complex and unique passwords that are virtually impossible to
              crack, providing an added layer of protection for your valuable
              accounts. Don&lsquo;t compromise on security – trust our password
              generator to create strong and secure passwords tailored to your
              needs.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 dark:text-gray-100 font-medium title-font tracking-wider text-sm">
              RobustKey
            </h2>
            <p className="text-gray-500">Create. Protect. Secure. Generate</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
