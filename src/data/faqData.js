const faqData = [
  {
    id: 1,
    questions: "What is React?",
    answers:
      "React is a JavaScript library for building user interfaces, particularly single-page applications where efficient rendering of components is essential.",
  },
  {
    id: 2,
    questions: "What is JSX?",
    answers:
      "JSX stands for JavaScript XML. It allows you to write HTML-like code within JavaScript, which React uses to describe the UI structure.",
  },
  {
    id: 3,
    questions: "What are components in React?",
    answers:
      "Components are independent, reusable pieces of UI in React. They can be functional or class-based and help break down the interface into smaller parts.",
  },
  {
    id: 4,
    questions: "What is a state in React?",
    answers:
      "State is an object that represents the dynamic parts of a component. It allows components to create and manage their own data that changes over time.",
  },
  {
    id: 5,
    questions: "What are props in React?",
    answers:
      "Props (short for properties) are read-only inputs passed from a parent component to a child component to render dynamic content.",
  },
  {
    id: 6,
    questions: "What is the virtual DOM?",
    answers:
      "The virtual DOM is a lightweight JavaScript representation of the real DOM. React uses it to improve performance by minimizing direct DOM manipulations.",
  },
  {
    id: 7,
    questions: "What is useEffect used for?",
    answers:
      "The useEffect hook lets you perform side effects in functional components, such as fetching data, updating the DOM, or setting up subscriptions.",
  },
  {
    id: 8,
    questions: "What is the difference between state and props?",
    answers:
      "Props are passed to components by parents and are immutable, while state is managed within the component and can change over time.",
  },
  {
    id: 9,
    questions: "What is a React hook?",
    answers:
      "Hooks are functions that let you use state and other React features in functional components. Common hooks include useState, useEffect, and useContext.",
  },
  {
    id: 10,
    questions: "How does React handle events?",
    answers:
      "React handles events using camelCase syntax and passes functions as event handlers. Events are wrapped in a synthetic event system for cross-browser compatibility.",
  },
];

export default faqData;
