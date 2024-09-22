import { Container } from "../Container/Container";
import { EventItem } from "../EventItem/EventItem";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import css from "./EventsList.module.css";
import { useEffect } from "react";
import { fetchEvents } from "../../redux/events/operations";
import { selectEvents } from "../../redux/events/selectors";
import { PaginationComponent } from "../PaginationComponent/PaginationComponent";

export const EventsList = () => {
  const dispatch = useDispatch();
  const allEvents = useSelector(selectEvents);
  console.log(allEvents);
  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <Container>
      <h1 className={css.title}>Events</h1>
      <ul className={css.eventsList}>
        {allEvents.map((item) => {
          return (
            <li key={nanoid()} className={css.eventItem}>
              <EventItem currentEvent={item} />
            </li>
          );
        })}
      </ul>
      <PaginationComponent />
    </Container>
  );
};
