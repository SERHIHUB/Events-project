import { Container } from "../Container/Container";
import { EventItem } from "../EventItem/EventItem";
import css from "./EventsList.module.css";

export const EventsList = () => {
  return (
    <Container>
      <h1 className={css.title}>Events</h1>
      <ul className={css.eventsList}>
        <li className={css.eventItem}>
          <EventItem />
        </li>
      </ul>
    </Container>
  );
};
