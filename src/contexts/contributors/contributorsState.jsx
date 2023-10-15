import { useState, useEffect } from "react";
import contributorsContext from "./contributorsContext";
import axios from "axios";

const ContributorsState = (props) => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.github.com/repos/amanrajrana/RobustKey-PasswordGenerator/contributors"
      )
      .then((response) => {
        setContributors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contributors data:", error);
      });
  }, []);

  return (
    <contributorsContext.Provider value={{ contributors, setContributors }}>
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </contributorsContext.Provider>
  );
};

export default ContributorsState;
