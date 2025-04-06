import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './ContactForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const ContactForm = ({ onAdd }) => {
  const textId = useId();
  const numberId = useId();
  const initialValues = {
    name: '',
    phone: '',
  };

  const feedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'To Short!')
      .max(50, 'To Long!')
      .required('Fill this field!'),
    phone: Yup.string()
      .min(3, 'To Short!')
      .max(50, 'To Long!')
      .required('Fill this field!'),
  });

  const handleSubmit = (value, actions) => {
    onAdd({
      id: nanoid(),
      name: value.name,
      number: value.phone,
    });
    actions.resetForm();
    return;
  };
  return (
    <>
      <Formik
        validationSchema={feedbackSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label} htmlFor={textId}>
            Name:
          </label>
          <Field type="text" name="name" id={textId} className={s.input} />
          <ErrorMessage name="name" component="span" />

          <label className={s.label} htmlFor={numberId}>
            Number:
          </label>
          <Field type="number" name="phone" id={numberId} className={s.input} />
          <ErrorMessage name="phone" component="span" />

          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
