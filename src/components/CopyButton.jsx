import PropTypes from "prop-types";
import { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { BsCheck2 } from "react-icons/bs";

const CopyButton = ({ content }) => {
  const [isCopiedToClipBoard, setIsCopiedToClipBoard] = useState(false);

  // Function to copy the command to clipboard
  const copyToClipBoard = () => {
    if (isCopiedToClipBoard) return;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(content)
        .then(() => {
          setIsCopiedToClipBoard(true);

          setTimeout(() => {
            setIsCopiedToClipBoard(false);
          }, 2000);
        })
        .catch((error) => {
          alert("Unable to copy text to clipboard:", error);
        });
    } else {
      alert("unable to copy password!");
    }
  };
  return (
    <div
      onClick={copyToClipBoard}
      className="font-bold text-2xl cursor-pointer hover:bg-slate-700 hover:bg-opacity-50 p-2 rounded-md duration-300 relative w-10 h-10"
    >
      <MdOutlineContentCopy
        className={`absolute duration-300 ${
          isCopiedToClipBoard ? "scale-0" : "scale-100 delay-300"
        }`}
      />
      <BsCheck2
        className={`absolute text-green-700 ${
          isCopiedToClipBoard ? "scale-100 duration-300 delay-200" : "scale-0"
        }`}
      />
    </div>
  );
};

CopyButton.propTypes = {
  content: PropTypes.string.isRequired,
};

export default CopyButton;
