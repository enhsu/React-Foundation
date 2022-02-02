
# Lifecycle

## Reference

- [reference - video](https://youtu.be/DyPkojd1fas)
- [reference - W3School](https://www.w3schools.com/react/react_lifecycle.asp#:~:text=Each%20component%20in%20React%20has,Mounting%2C%20Updating%2C%20and%20Unmounting.)
- [reference - lifecycle diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
![picture - react-lifecycle-diagram](../src/assets/react-lifecycle-diagram.png)

## `Mounting`, `Updating`, `Unmounting` and `Error Boundaries`

| Lifecycle | Mounting | Updating | Unmounting | Error Handling |
| --- | --- | --- | --- | --- |
| calling situation | When an instance of a component is being created and inserted into the DOM | When a component is being re-rendered as a result of changes to either its props or state | When a component is being removed from the DOM | When there is an error during rendering, in a lifecycle method, or in the constructor of any child component |
| calling methods | `constructor` -> static `getDerivedStateFromProps` -> `render` -> `componentDidMount` | static `getDerivedStateFromProps` -> `shouldComponentUpdate` -> `render` -> `getSnapshotBeforeUpdate` -> `componentDidUpdate` | `componentWillUnmount` | static `getDerivedStateFromError` -> `componentDidCatch`

## Mounting
[source code](../src/pages/Lifecycle/Mounting.js)

`constructor` -> static `getDerivedStateFromProps` -> `render` -> `componentDidMount`
1. constructor( props )
    - A special function that will get called whenever a new component is created
    - initializing state
    - Binding the event handlers
    - DO NOT cause side effects. Ex: HTTP requests
    - super(props)
    - Directly overwrite thie.state
2. static getDerivedStateFromProps( props, state )
    - When the state of the component depends on changes in props over time
    - Set the state
    - DO NOT cause side effects. Ex: HTTP requests
3. render()
    - Only required method
    - Read props & state and return JSX
    - DO NOT change state or interact with DOM or make ajax calls
    - Children component lifecycle methods are also executed
4. componentDidMount()
    - Invoked immediately after a component and all its children components have been rendered to the DOM
    - Cause side effects. Ex: interact with the DOM or perform any ajax calls to load data

## Updating
[source code](../src/pages/Lifecycle/Updating.js)

static `getDerivedStateFromProps` -> `shouldComponentUpdate` -> `render` -> `getSnapshotBeforeUpdate` -> `componentDidUpdate`
1. static getDerivedStateFromProps( props, state )
    - Method is called everty time a component is re-rendered
    - Set the state
    - DO NOT cause side effects. Ex: HTTP requests
2. shouldComponentUpdate( nextProps, nextState )
    - Dictates if the component should re-render or not
    - Performance optimization
    - Do not cause side effects. Ex: HTTP requests, Calling the setState
3. render()
    - Only required method
    - Read props & state and return JSX
    - DO NOT change state or interact with DOM or make ajax calls
4. getSnapshotBeforeUpdate( prevProps, prevState )
    - Called right before the changes from the virtual DOM are to be reflected in the DOM
    - Capture some information from the DOM
    - Method will either return null or return a value
    - Retured value will be passed as the third parameter to the next method
5. componentDidUpdate( prevProps, prevState, snapshot )
    - Called after the render is finished in the re-render cycles
    - Caluse side effects

## Unmounting
`componentWillUnmount`
1. componentWillUnmount()
    - Method is invoked immediately before a component is unmounted and destroyed
    - Cancelling any network requests, removing event handlers, cancelling any subscriptions and also invalidating timers
    - DO NOT call the setState method

## Error Boundaries
[reference - react error boundaries](https://reactjs.org/docs/error-boundaries.html)

static `getDerivedStateFromError` -> `componentDidCatch`
1. static getDerivedStateFromError(error)
    - render a fallback UI after an error has been thrown
2. componentDidCatch(error, info)
    - log error information

- When there is an error either during rendering, in a lifecycle method, or in the constructor of any child component
