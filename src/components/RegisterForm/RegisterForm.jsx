import { useForm } from "react-hook-form";
import { Container } from "../Container/Container";
import css from "./RegisterForm.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerUser } from "../../redux/events/operations";

export const RegisterForm = () => {
  const [eventId, setEventId] = useState(() => {
    const currentId = JSON.parse(localStorage.getItem("currentRegister"));
    return currentId;
  });
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { fullName, email, birth, inform } = data;

    const newEmail = email.toLowerCase();
    const credentials = {
      name: fullName,
      email: newEmail,
      birth,
      userFoundOut: inform,
    };
    console.log({ eventId, credentials });
    dispatch(
      registerUser({
        eventId,
        credentials,
      })
    );
    reset();
  };

  return (
    <Container>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={css.label}>
          Full name
          <input
            className={css.input}
            {...register("fullName", { required: true })}
          />
        </label>
        {errors.fullName && <p>Full name is required.</p>}

        <label className={css.label}>
          Email
          <input
            className={css.input}
            {...register("email", { required: true })}
          />
        </label>
        {errors.email && <p>Email is required.</p>}

        <label className={css.label}>
          Date of birth
          <input
            className={css.input}
            type="number"
            {...register("birth", { pattern: /\d+/ })}
          />
        </label>
        {errors.birth && <p>Please enter number for birth.</p>}

        <>
          <h3>Where did you hear about this event?</h3>
          <div className={css.radioWrapper}>
            <label className={css.radioLabel}>
              <input
                type="radio"
                {...register("inform")}
                value="social_media"
              />
              Social media
            </label>
            <label className={css.radioLabel}>
              <input type="radio" {...register("inform")} value="friends" />
              Friends
            </label>
            <label className={css.radioLabel}>
              <input
                type="radio"
                {...register("inform")}
                value="found_myself"
              />
              Found myself
            </label>
          </div>
        </>

        <input className={css.submitBtn} type="submit" value={"Submit"} />
      </form>
    </Container>
  );
};
