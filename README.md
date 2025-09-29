# React Q&A – Project Documentation

This document contains some common React questions with their explanations in a simple and easy-to-understand way.

---

## 1. What is JSX, and why is it used?

JSX stands for **JavaScript XML**. It is a syntax extension in React that allows us to write HTML-like code inside JavaScript. Instead of using complex `React.createElement()` calls, JSX makes the code cleaner and easier to read.

### Example:

```jsx
const element = <h1>Hello, React!</h1>;
```

Without JSX, the same thing would look like this:

```jsx
const element = React.createElement("h1", null, "Hello, React!");
```

### Why we use JSX?

- It makes React code look more like HTML.
- Easier to understand and debug.
- JSX also gets compiled into JavaScript, so browsers can run it.

---

## 2. What is the difference between State and Props?

Both **State** and **Props** are used to handle data in React, but they are not the same.

- **Props (Properties):**

  - Passed from parent to child components.
  - Read-only (cannot be changed inside the child).
  - Useful for making components reusable.

- **State:**
  - Managed inside the component itself.
  - Can be updated using hooks like `useState`.
  - Useful for data that changes over time (like form input, counters, etc.).

👉 Simple way to remember:  
**Props = external data (given from outside).**  
**State = internal data (managed by the component).**

---

## 3. What is the useState hook, and how does it work?

The **useState** hook is used to add state to functional components. It allows us to declare a state variable and update it when needed.

### Example:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
```

### How it works:

- `useState(0)` → `0` is the initial value.
- It returns an array: `[currentValue, updateFunction]`.
- Whenever we call `setCount`, React re-renders the component with the new value.

---

## 4. How can you share state between components in React?

Sometimes multiple components need to use the same state. There are a few ways to do this:

1. **Lifting state up** → Put the state in a common parent component and pass it down as props to children.
2. **Context API** → If many components need the same data, Context makes it easier without passing props manually at every level.
3. **State management libraries** (like Redux, Zustand, Recoil) → Useful for large projects.

### Example of lifting state up:

```jsx
function Parent() {
  const [name, setName] = useState("React");

  return (
    <div>
      <Child name={name} />
      <AnotherChild changeName={setName} />
    </div>
  );
}
```

---

## 5. How is event handling done in React?

Event handling in React is quite similar to JavaScript but with a few differences:

- Events are written in **camelCase** (e.g., `onClick`, not `onclick`).
- We pass a function instead of a string.

### Example:

```jsx
function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Key points:

- Functions are usually defined inside the component.
- Arrow functions are often used for inline event handling.
- Synthetic events are used in React, which work across all browsers.

---
