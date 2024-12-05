import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = () => {
  return (
    <div className="flex justify-start align-center">
      <FontAwesomeIcon icon={faFire} className="text-red-400 w-3" />
      <FontAwesomeIcon icon={faFire} className="text-red-400 w-3" />
      <FontAwesomeIcon icon={faFire} className="text-red-400 w-3" />
      <FontAwesomeIcon icon={faFire} className="text-red-400 w-3" />
      <FontAwesomeIcon icon={faFire} className="text-red-400 w-3" />
    </div>
  );
};

export default PriorityDisplay;
