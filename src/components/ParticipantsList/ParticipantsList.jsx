import { Container } from "../Container/Container";
import { useState } from "react";
import { nanoid } from "nanoid";
import css from "./ParticipantsList.module.css";

export const ParticipantsList = () => {
  const [eventUsers, setEventUsers] = useState(() => {
    const savedValue = JSON.parse(localStorage.getItem("currentEvent"));
    return savedValue;
  });

  return (
    <Container>
      {eventUsers.length >= 1 ? (
        <ul className={css.usersList}>
          {eventUsers.map((item) => {
            return (
              <li key={nanoid()} className={css.userItem}>
                <h3>{item.name}</h3>
                <p>{item.email}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3 className={css.usersNotFound}>There are no users.</h3>
      )}
    </Container>
  );
};
