import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import css from "./EventItem.module.css";

export const EventItem = ({ currentEvent }) => {
  const eventUsers = currentEvent.participants;

  const handleViewClick = () => {
    console.log(eventUsers);
    localStorage.setItem("currentEvent", JSON.stringify(eventUsers));
  };

  return (
    <div className={css.container}>
      <h3>{currentEvent.title}</h3>
      <p>{currentEvent.description}</p>
      <ul className={css.buttonList}>
        <li>
          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </li>
        <li>
          <Link to="/participants">
            <Button onClick={handleViewClick}>View</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
