import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Section from './Section';

const Contributors = () => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/repos/amanrajrana/RobustKey-PasswordGenerator/contributors')
      .then((response) => {
        setContributors(response.data);
      })
      .catch((error) => {
        console.error('Error fetching contributors data:', error);
      });
  }, []);

  return (
    <>
  <Header />
  <div className="bg-white dark:bg-gray-900 p-4">
    <h1 className="text-3xl font-semibold text-blue-800 dark:text-white mb-4">Contributors</h1>
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {contributors.map((contributor) => (
        <div
          key={contributor.id}
          className="bg-gradient-to-br from-blue-900 to-blue-700 dark:from-gray-900 dark:to-gray-700 text-white dark:text-gray-300 p-6 rounded-lg shadow-md flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
        >
          <img
            src={contributor.avatar_url}
            alt={contributor.login}
            className="w-16 h-16 md:w-32 md:h-32 rounded-full mb-4 transform hover:scale-110 transition-transform duration-300"
          />
          <h2 className="text-xl lg:text-2xl font-semibold">{contributor.login}</h2>
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
    <div className="flex justify-center -space-x-4 pt-8">
      {contributors.slice(0, 10).map((contributor) => (
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
  <Section />
</>
  );
};

export default Contributors;
