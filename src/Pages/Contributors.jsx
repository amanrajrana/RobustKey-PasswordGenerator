import { useContext } from "react";
import contributorsContext from "../contexts/contributors/contributorsContext";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Contributors = () => {
  const { contributors } = useContext(contributorsContext);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto p-4 md:p-8">
        <h1 className="text-3xl text-center font-semibold text-blue-800 dark:text-white mb-4">
          Our Contributors
        </h1>

        <article>
          <p className="text-center max-w-lg mx-auto text-lg mb-12">
            <FaQuoteLeft className="inline mr-4" />
            We&lsquo;re proud to have a community of developers who have
            contributed to our project. We&lsquo;re grateful for their
            contributions and want to recognize them for their hard work and
            dedication. We&lsquo;ve listed some of our top contributors below.
            <FaQuoteRight className="inline ml-4" />
          </p>
        </article>

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

        <article className="text-gray-600 body-font dark:text-gray-400">
          <div className="container px-5 py-20 mx-auto">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <FaQuoteLeft size={40} className="mx-auto mb-8" />
              <h2 className="text-2xl font-semibold text-black dark:text-white">
                Thanks to Our Contributors
              </h2>
              <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-4 mb-6"></span>

              <p className="leading-relaxed text-lg">
                We want to say a big thank you to all the people who have helped
                us with our open-source project. You&lsquo;ve made it better and
                brought our community together. We&lsquo;re grateful for your
                support and look forward to working with you more. Thank you for
                being a crucial part of our project&lsquo;s success!
              </p>
              <FaQuoteRight size={40} className="relative mx-auto mt-8" />
              <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-8 mb-6"></span>
              <h2 className="text-gray-900 dark:text-gray-100 font-medium title-font tracking-wider text-sm">
                RobustKey
              </h2>
              <p className="text-gray-500">Create. Protect. Secure. Generate</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Contributors;
