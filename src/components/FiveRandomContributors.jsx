import { useContext } from "react";
import contributorsContext from "../contexts/contributors/contributorsContext";
import { Link } from "react-router-dom";

const FiveRandomContributors = () => {
  const { contributors } = useContext(contributorsContext);
  const randomNumber = Math.trunc(Math.random() * (contributors.length - 5));

  return (
    <div className="flex justify-center -space-x-4">
      {contributors.slice(randomNumber, randomNumber + 6).map((contributor) => (
        <img
          key={contributor.id}
          className="w-14 h-14 border-2 border-white rounded-full dark:border-gray-800"
          src={contributor.avatar_url}
          alt={contributor.login}
        />
      ))}
      <Link
        className="flex items-center justify-center w-14 h-14 text-sm font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
        to={`/contributors`}
      >
        {contributors.length < 99 ? contributors.length : +99}
      </Link>
    </div>
  );
};

export default FiveRandomContributors;
