import FormButton from './FormButton';

const FormWithUseForm = () => {
  const myAction = async (formData: any) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const newPost = {
      name: formData.get('name'),
      email: formData.get('email'),
    };

    console.log(newPost);
  };

  return (
    <form action={myAction}>
      <div>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          className='border-2'
          id='name'
          name='name'
          required
        />
      </div>

      <div>
        <label htmlFor='email'>Email: </label>
        <input
          type='text'
          className='border-2'
          id='email'
          name='email'
          required
        />
      </div>

      <FormButton />
    </form>
  );
};
export default FormWithUseForm;
