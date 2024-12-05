import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Deleteblock = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faX}
        className="w-3 text-red-400 hover:cursor-pointer hover:text-red-200"
      />
    </div>
  );
};

export default Deleteblock;
