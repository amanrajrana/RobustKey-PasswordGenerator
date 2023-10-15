import { useContext } from "react";
import Section from "../components/Section";
import contributorsContext from "../contexts/contributors/contributorsContext";

const Contributors = () => {
  const { contributors } = useContext(contributorsContext);
  const randomNumber = Math.trunc(Math.random() * (contributors.length - 4));

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto p-4 md:p-8">
          <h1 className="text-3xl text-center font-semibold text-blue-800 dark:text-white mb-4">
            Our Contributors
          </h1>

          <div className="flex flex-wrap justify-center gap-4">
            {contributors.map((contributor) => (
              <div
                key={contributor.id}
                className="bg-gradient-to-br from-blue-900 to-blue-700 dark:from-gray-900 dark:to-gray-700 text-white dark:text-gray-300 p-6 rounded-lg shadow-md flex flex-col items-center transform hover:scale-105 transition-transform duration-300 flex-1 basis-60 max-w-xs"
              >
                <img
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  className="w-16 h-16 md:w-32 md:h-32 rounded-full mb-4 transform hover:scale-110 transition-transform duration-300"
                />
                <h2 className="text-xl lg:text-2xl font-semibold">
                  {contributor.login}
                </h2>
                <p className="text-gray-300 dark:text-gray-500 text-center">
                  Contributions: {contributor.contributions}
                </p>
                <div className="mt-6">
                  <a
                    href={contributor.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline dark:text-blue-200 dark:hover:text-blue-400"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-28 -space-x-4 py-8">
            {contributors
              .slice(randomNumber, randomNumber + 5)
              .map((contributor) => (
                <img
                  key={contributor.id}
                  className="w-14 h-14 border-2 border-white rounded-full dark:border-gray-800"
                  src={contributor.avatar_url}
                  alt={contributor.login}
                />
              ))}
            <a
              className="flex items-center justify-center w-14 h-14 text-sm font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
              href="#"
            >
              {contributors.length < 99 ? contributors.length : +99}
            </a>
          </div>
        </div>
      </section>
      <Section />
    </>
  );
};

export default Contributors;
