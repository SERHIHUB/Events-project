import { useForm } from "react-hook-form";
import { Container } from "../Container/Container";
import css from "./RegisterForm.module.css";
// import Select from "react-select";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { fullName, email, birth } = data;
    console.log(data);
    reset();
  };

  // const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  //   <>
  //     <label>{label}</label>
  //     <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
  //       <option value="20">20</option>
  //       <option value="30">30</option>
  //     </select>
  //   </>
  // ));

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

        <input type="submit" />
      </form>
    </Container>
  );
};
