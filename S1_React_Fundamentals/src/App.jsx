// JSX (Javascript XML): JSX allows us to write HTML in React. JSX makes it easier to write & add HTML in React

import BasicEffect from './components/BasicEffect';
import Counter from './components/Counter';
import CounterEffect from './components/CounterEffect';
import FetchDataEffect from './components/FetchDataEffect';
import Timer from './components/Timer';
import UpdateUser from './components/UpdateUser';
import { UserProvider } from './components/UserContext';
import UserProfile from './components/UserProfile';

/**
 * Props (Properties): are arguments passed into React components.
 * Props allow us to pass data from parent component to a child component.
 * Props are passed to components via HTML attributes.
 */

/**
 * State is a way to store and manage data that can change over time and affects how the component renders. We define state using the useState Hook, which allows you to set and initial value and provides a way to update that state.
 *
 */

/**
 * Portal: Portal is a feature that allows you to render a child component into a DOM node that exists outside the hierarchy of the parent component. This can be useful for scenarios like modals, tooltips or dropdowns, where you want to break out of the usual parent-child structure and render in a different part of the DOM.
 */

/**
 * useEffect(): allows you to perform side effects in your components. Some examples
 * of side effects are: fetching data, directly updatings the DOM etc.
 */

/**
 * Context API: is a feature that allows you to manage and share state across your
 * component tree without having to pass props down manually at every level.
 * It's useful for scenarios where you need to share data or functions across many
 * components especially when these components are deeply nested.
 */

/**
 * useContext Hook: allows u s to access the context values provided by a Context
 * object directly within a functional component.
 *
 * @returns
 */

/**
 * useReducer: is a hook that is similar to useState, but it is designed for more
 * complex state objects or state transitions that involves multiple sub-values.
 * It allows you to manage state in a functional, immutable way.
 *
 * @returns
 */

/**
 * useRef Hook: provides a way to access and interact with DOM elements or to persist values across renders without causing a re-render.
 *
 * @returns
 */

/**
 * Custom Hooks are Javascript fu nctions that start with the prefix "use"
 * (e.g., useFetch, useForm, ...) and can call other hooks within them. They allow
 * you to extract and reuse logic that involves state or side effects, making your
 * components more readable and maintainable.
 *
 * @returns
 */

/**
 * useId Hook: is used to generate unique IDs for components.
 *
 * @returns
 */

const App = () => {
  return (
    <div>
      <Timer />
    </div>
  );
};
export default App;
