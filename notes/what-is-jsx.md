# What is JSX

- Javascript XML (JSX) - Extionsion to the Javascript language syntax
- Write XML-like code for elements and components
- JSX tags have a tag name, attributes, and children
- JSX is not a necessity to write React applications
- JSX makes the React code simpler and elegant
- JSX ultimately transplies to pure Javascript which is undestood by the browsers

```javascript
// code with JAX
import React from 'react'

const Hello = () => {
    return (
        <div className="hello-container">
            <h1>Hello!</h1>
        </div>
    )
}

export default Hello
```

```javascript
// code without JSX
import React from 'react'

const Hello = () => {
    return React.createElement('div', { className: 'hello-container' }, React.createElement('h1', null, 'Hello'))
}

export default Hello
```
[reference - React.createElement](https://reactjs.org/docs/react-api.html#createelement)