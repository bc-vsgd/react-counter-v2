// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <div>
        <FontAwesomeIcon className="header-icon" icon="fa-solid fa-stopwatch" />
        <span>React Counter</span>
      </div>
    </header>
  );
};

export default Header;
