import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import css from "./EventItem.module.css";

export const EventItem = () => {
  return (
    <div className={css.container}>
      <h3>Title</h3>
      <p>description</p>
      <ul className={css.buttonList}>
        <li>
          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </li>
        <li>
          <Link to="/participants">
            <Button>View</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
