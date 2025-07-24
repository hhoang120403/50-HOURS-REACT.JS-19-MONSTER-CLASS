import { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newName.trim()) {
      updateUser(newName);
      setNewName('');
    }
  };

  return (
    <div>
      <h2>Update User Name</h2>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          value={newName}
          placeholder='Enter new name'
          onChange={(e) => setNewName(e.target.value)}
        />

        <button type='submit'>Update</button>
      </form>
    </div>
  );
};
export default UpdateUser;
