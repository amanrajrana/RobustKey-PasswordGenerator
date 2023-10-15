import { useState, useEffect } from "react";
import contributorsContext from "./contributorsContext";
import axios from "axios";
import PropType from "prop-types";

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
      {props.children}
    </contributorsContext.Provider>
  );
};

ContributorsState.propTypes = {
  children: PropType.node.isRequired,
};

export default ContributorsState;
