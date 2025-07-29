import AdminInfo from './components/AdminInfo';
import Button from './components/Button';
import ContactForm from './components/ContactForm';
import Counter from './components/Counter';
import CounterWithContext from './components/CounterWithContext';
import CounterWithReducer from './components/CounterWithReducer';
import EventHandling from './components/EventHandling';
import FocusInput from './components/FocusInput';
import Form from './components/Form';
import FetchData from './components/FetchData';
import Todo from './components/Todo';
import User from './components/User';
import UserInfo from './components/UserInfo';
import UserProfile from './components/UserProfile';
import type { AdminInfoList, Info } from './types';
import AdvancedForm from './components/AdvancedForm';

const App = () => {
  // const user: Info = {
  //   id: 1,
  //   name: 'John Doe',
  //   email: 'john@gmail.com',
  // };

  // const admin: AdminInfoList = {
  //   id: 2,
  //   name: 'Jane Smith',
  //   email: 'jane@gmail.com',
  //   role: 'admin',
  //   lastLogin: new Date(),
  // };

  return (
    <div>
      {/* <User name='JayT' age={22} isStudent={true}>
        <p>Hello</p>
      </User> */}

      {/* <Button
        label='Click'
        onClick={() => console.log('Clicked')}
        disabled={false}
      /> */}

      {/* 
      <UserInfo user={user} />
      <AdminInfo admin={admin} /> */}

      {/* <Counter /> */}

      {/* <UserProfile /> */}

      {/* <Todo /> */}

      {/* <Form /> */}

      {/* <FocusInput />
      <ContactForm />
      <EventHandling /> */}

      {/* <CounterWithContext /> */}

      {/* <CounterWithReducer /> */}

      {/* Use Effect */}
      {/* <FetchData /> */}

      {/* React Hook Form */}
      <AdvancedForm />
    </div>
  );
};
export default App;
