import clsx from "clsx";
import css from "./Button.module.css";

export const Button = ({
  children,
  type = "button",
  className,
  onClick,
  ...props
}) => {
  return (
    <div>
      <button
        type={type}
        className={clsx(css.button, { [className]: className })}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
