// import Form from './components/Form';
import { useState, useTransition } from 'react';
import Counter from './components/Counter';
import FormWithUseForm from './components/FormWithUseForm';
import Home from './components/Home';
import Posts from './components/Posts';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Tabs from './components/Tabs';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: string) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'posts':
        return <Posts />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {/* <FormWithUseForm /> */}

      {/* useActionState */}
      {/* <Counter /> */}

      {/* useTransition */}
      {/* <div className='tabs'>
        <button
          className='border-2 p-4'
          onClick={() => handleTabChange('home')}
        >
          Home
        </button>
        <button
          className='border-2 p-4'
          onClick={() => handleTabChange('posts')}
        >
          Posts
        </button>
        <button
          className='border-2 p-4'
          onClick={() => handleTabChange('contact')}
        >
          Contact
        </button>
      </div>

      {isPending && <p>Loading...</p>}
      {!isPending && <div className='content'>{renderContent()}</div>} */}

      <Sidebar />
      <Profile />
      <Tabs />
    </div>
  );
};
export default App;
