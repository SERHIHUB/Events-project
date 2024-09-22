import { Section } from "../components/Section/Section";
import css from "./Pages.module.css";

export const NotFoundPage = () => {
  return (
    <Section>
      <h2 className={css.pageNotFound}>Page not found.</h2>
    </Section>
  );
};
