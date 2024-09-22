import { Button } from "../Button/Button";
import { ImArrowLeft } from "react-icons/im";
import { ImArrowRight } from "react-icons/im";
import { nanoid } from "nanoid";
import clsx from "clsx";
import css from "./PaginationComponent.module.css";

export const PaginationComponent = ({
  pagination,
  handlePrevClick,
  handleNextClick,
  handleNumberClick,
}) => {
  const { hasNextPage, hasPreviousPage, page, totalPages } = pagination;

  function addButtons(countPage) {
    const newArray = Array.from({ length: countPage }, (_, i) => i + 1);

    return newArray;
  }

  return (
    <div className={css.paginationWrapper}>
      {hasPreviousPage ? (
        <Button className={css.ative} onClick={handlePrevClick}>
          <ImArrowLeft className={css.arrow} />
        </Button>
      ) : (
        <Button>
          <ImArrowLeft className={css.greyArrow} />
        </Button>
      )}

      <ul className={css.paginationList}>
        {addButtons(totalPages).map((item) => {
          return (
            <li
              className={clsx(
                css.paginationItem,
                item === page && css.currentNumber
              )}
              key={nanoid()}
            >
              <Button
                onClick={() => handleNumberClick(item)}
                className={css.numberAtive}
              >
                {item}
              </Button>
            </li>
          );
        })}
      </ul>
      {hasNextPage ? (
        <Button className={css.ative} onClick={handleNextClick}>
          <ImArrowRight className={css.arrow} />
        </Button>
      ) : (
        <Button>
          <ImArrowRight className={css.greyArrow} />
        </Button>
      )}
    </div>
  );
};
