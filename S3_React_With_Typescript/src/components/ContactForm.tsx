import { useState, type ChangeEvent, type FormEvent } from 'react';

type ContactFormState = {
  name: string;
  email: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormState) => ({ ...prevFormState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  return (
    <form action='' onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>
          Name:
          <input
            type='text'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor='email'>
          Email:
          <input
            type='text'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <button type='submit'>Submit</button>
    </form>
  );
};
export default ContactForm;
