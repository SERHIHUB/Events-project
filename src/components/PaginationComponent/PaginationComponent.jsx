import { Button } from "../Button/Button";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import css from "./PaginationComponent.module.css";

export const PaginationComponent = () => {
  return (
    <div className={css.paginationWrapper}>
      <Button>
        <FaLongArrowAltLeft className={css.arrow} />
      </Button>
      <ul className={css.paginationList}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <Button>
        <FaLongArrowAltRight className={css.arrow} />
      </Button>
    </div>
  );
};
