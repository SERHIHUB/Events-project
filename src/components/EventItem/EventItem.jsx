import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import css from "./EventItem.module.css";

export const EventItem = ({ currentEvent }) => {
  const handleViewClick = () => {
    localStorage.setItem(
      "currentEvent",
      JSON.stringify(currentEvent.participants)
    );
  };

  const handleregisterClick = () => {
    localStorage.setItem("currentRegister", JSON.stringify(currentEvent._id));
  };

  return (
    <div className={css.container}>
      <h3>{currentEvent.title}</h3>
      <p>{currentEvent.description}</p>
      <ul className={css.buttonList}>
        <li>
          <Link to="/register">
            <Button className={css.btn} onClick={handleregisterClick}>
              Register
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/participants">
            <Button className={css.btn} onClick={handleViewClick}>
              View
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
