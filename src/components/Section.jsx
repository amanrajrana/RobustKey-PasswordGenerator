import { FaQuoteRight } from "react-icons/fa";

const Section = () => {
  return (
    <section className="text-gray-600 body-font dark:text-gray-400">
      <div className="container px-5 py-20 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <FaQuoteRight size={40} className="mx-auto mb-8"/>
          <p className="leading-relaxed text-lg">
            Why settle for weak and easily guessable passwords when you can
            ensure your online security with our password generator? By using
            our powerful tool, you eliminate the risk of using common phrases or
            personal information as your password. Our generator generates
            complex and unique passwords that are virtually impossible to crack,
            providing an added layer of protection for your valuable accounts.
            Don&lsquo;t compromise on security – trust our password generator to
            create strong and secure passwords tailored to your needs.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-8 mb-6"></span>
          <h2 className="text-gray-900 dark:text-gray-100 font-medium title-font tracking-wider text-sm">
            RobustKey
          </h2>
          <p className="text-gray-500">Create. Protect. Secure. Generate</p>
        </div>
      </div>
    </section>
  );
};

export default Section;
