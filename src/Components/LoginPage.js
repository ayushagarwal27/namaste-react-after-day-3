import { useFormik } from 'formik';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: val => {
      console.log(val);
    },
  });

  return (
    <>
      <h3 style={{ textAlign: 'center', marginTop: '40px' }}>Login Page</h3>
      <form className='form-container' onSubmit={formik.handleSubmit}>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Name'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Your Email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default LoginPage;
