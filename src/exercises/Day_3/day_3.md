# Day 4: Understanding React Props

## Introduction

In today's session, I learnt the concept of React props, a crucial mechanism for passing data between components.

## What is `props` in a React component?

In React, `props` (short for properties) are a way to pass data from a parent component to its child components. They allow the parent component to communicate with its children by passing data as attributes.

Example:
```jsx
// Parent Component
const ParentComponent = () => {
  return <ChildComponent message="Hello from props!" />;
};

// Child Component
const ChildComponent = (props) => {
  return <p>{props.message}</p>;
};
```
## How do you access props in a React component?
Props are accessed within a component through the function parameters. You can destructure them directly within the function signature for cleaner code.

Example:
```const ChildComponent = ({ message }) => {
  return <p>{message}</p>;
};
```
## What data types can we pass as props to components?
React props can accept various data types, including strings, numbers, booleans, functions, and objects. It's crucial to ensure the correct data type is passed to avoid runtime errors.

Example:
```
// Parent Component
const ParentComponent = () => {
  return <ChildComponent count={42} isEnabled={true} />;
};

const ChildComponent = ({ count, isEnabled }) => {
  // Use count and isEnabled
};
```

## What is a `propTypes`?
`propTypes` is a feature in React used for type-checking the props passed to a component. It helps catch bugs early by providing a runtime warning if the expected data types do not match.

Example:
```import PropTypes from 'prop-types';

const ChildComponent = ({ count, isEnabled }) => {
  // Use count and isEnabled
};

ChildComponent.propTypes = {
  count: PropTypes.number.isRequired,
  isEnabled: PropTypes.bool.isRequired,
};
```

## What is a default `propTypes`?
Default `propTypes` allow you to set default values for props if they are not provided. This ensures that your component does not break if certain props are missing.

Example:

```
const ChildComponent = ({ count = 0, isEnabled = false }) => {
  // Use count and isEnabled
};
```

## Conclusion
Understanding and mastering the usage of props is fundamental in React development. It forms the basis for effective communication between components, enhancing the flexibility and reusability of my code.

© 2023, Justine-Njuguna | Date:December 3, 2023 | Time: 22:37 UTC+3