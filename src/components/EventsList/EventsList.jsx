import { Container } from "../Container/Container";
import { EventItem } from "../EventItem/EventItem";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import css from "./EventsList.module.css";
import { useEffect, useState } from "react";
import { fetchEvents } from "../../redux/events/operations";
import { selectEvents, selectPagination } from "../../redux/events/selectors";
import { PaginationComponent } from "../PaginationComponent/PaginationComponent";

export const EventsList = () => {
  const dispatch = useDispatch();
  const allEvents = useSelector(selectEvents);
  const paginationInfo = useSelector(selectPagination);
  const [page, setPage] = useState(1);

  const perPage = 8;

  const prevClick = () => {
    setPage(page - 1);
  };

  const nextClick = () => {
    setPage(page + 1);
  };

  const handleNumberClick = (itemNumber) => {
    setPage(itemNumber);
  };

  useEffect(() => {
    dispatch(fetchEvents({ page: page, perPage: perPage }));
  }, [dispatch, page]);

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
      <PaginationComponent
        pagination={paginationInfo}
        handlePrevClick={prevClick}
        handleNextClick={nextClick}
        handleNumberClick={handleNumberClick}
      />
    </Container>
  );
};
