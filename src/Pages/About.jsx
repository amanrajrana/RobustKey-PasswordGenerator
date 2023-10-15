import { FaQuoteRight } from "react-icons/fa";

const About = () => {
  return (
    <section className="text-gray-600 body-font dark:text-gray-400 min-h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <FaQuoteRight size={40} className="mx-auto mb-8"/>
          <p className="leading-relaxed text-lg">
            At Robust Key, we understand the critical importance of safeguarding
            your digital life, and that starts with strong and secure passwords.
            We have one mission to empower you with the tools to ensure your
            online security. In today&lsquo;s digital landscape, the risks of
            using common phrases or personal information as passwords are all
            too real. That&lsquo;s why we&lsquo;ve developed a powerful tool
            that eliminates these risks. <br />
            We go the extra mile to provide you with the strongest possible
            protection for your valuable online accounts. Our generator tailors
            passwords to your specific requirements, ensuring a perfect fit for
            your security needs. Our user-friendly tool ensures that you can
            effortlessly access strong and secure passwords whenever you need
            them.
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

export default About;
