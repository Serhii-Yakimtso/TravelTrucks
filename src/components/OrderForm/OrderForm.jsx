import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import css from './OrderForm.module.css';

export default function OrderForm() {
  const initialValues = {
    username: '',
    email: '',
    bokingDate: '',
    comment: '',
  };
  const handleSubmit = (value, actions) => {
    actions.resetForm();
    toast.success('Success!');
  };

  const validation = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Must be a valid email!')
      .required('Required')
      .matches(
        /^(?!.*\.ru$)(?=.*@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Must be a valid email!'
      ),
    bokingDate: Yup.date().required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={css.form} autoComplete="off">
        <h2 className={css.title}>Book your campervan now</h2>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
        <div className={css.errorContainer}>
          <ErrorMessage
            className={css.errorMessage}
            name="username"
            component="span"
          />

          <Field
            className={css.inputText}
            type="text"
            name="username"
            placeholder="Name*"
          />
        </div>

        <div className={css.errorContainer}>
          <ErrorMessage
            className={css.errorMessage}
            name="email"
            component="span"
          />
          <Field
            className={css.inputText}
            type="text"
            name="email"
            placeholder="Email*"
          />
        </div>

        <div className={css.errorContainer}>
          <ErrorMessage
            className={css.errorMessage}
            name="bokingDate"
            component="span"
          />

          <Field
            className={css.inputText}
            type="text"
            name="bokingDate"
            placeholder="Booking date*"
          />
        </div>

        <Field
          className={css.inputComent}
          as="textarea"
          name="comment"
          placeholder="Comment"
        />
        <button className={css.button} type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
}
