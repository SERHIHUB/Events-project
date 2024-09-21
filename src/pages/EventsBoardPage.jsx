import { Link } from "react-router-dom";
import { Section } from "../components/Section/Section";
import { EventsList } from "../components/EventsList/EventsList";

export const EventsBoardPage = () => {
  return (
    // <Section>
    //   <h1>Events</h1>
    //   <Link to="/">
    //     <EventsList />
    //   </Link>
    // </Section>
    <Section>
      <EventsList />
    </Section>
  );
};
