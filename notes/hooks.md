# Hooks
`Hooks` are a new addition in React `16.8`. They let you use state and other React features without writing a class.

## Why Hooks?
- Avoid the whole confusion with `this` keyword
- Allow you to reuse stateful logic
- Organize the logic inside a component into reusable isolated units

## Rules of Hooks
- Only call Hooks at the `Top Level`
    
    DO NOT call Hooks inside loops, conditions, or nested functions
- Only call Hooks from `React Functions`

    call them from within React functional components and not just any regular javascript funciton

## Hooks we need to know
- useState
    - [souce code](../src/components/component-foundation/FunctionalComponent.js)
    - update state with previous state
    - useState with: `primitive value`, `object`, and `array`
- useEffect
    - [source code - class component](../src/pages/Lifecycle/ClassVSFunctional/ClassComponent.js)
    - [source code - functional component(useEffect)](../src/pages/Lifecycle/ClassVSFunctional/FunctionalComponent.js)
<table>
<tr>
<th>Lifecycle</th><th>Class Component</th><th>Hooks</th>
</tr>
<tr>
<td>update state after <code>render</code> and <code>state updated</code></td>
<td>

```javascript
componentDidMount() {}
componentDidUpdate( prevProps, prevState, snapshot ) {}
```
        
</td>
<td>

```javascript
useEffect(() => {})
```

</td>
</tr>
<tr>
<td>
Watch for <code>state</code> or <code>props</code> for update
</td>
<td>

```javascript
componentDidUpdate( prevProps, prevState, snapshot ) {
    if (prevState.count !== this.state.count) {
        // update state
    }
}
```

</td>
<td>

```javascript
useEffect(() => {
// update state
}, [count])
```

</td>
</tr>
<tr>
<td>componenDidMount</td>
<td>

```javascript
componentDidMount() {}
```

</td>
<td>

```javascript
useEffect(() => {}, [])
```

</td>
</tr>
<tr>
<td>componentWillUnmount</td>
<td>

```javascript
componentWillUnmount() {}
```

</td>
<td>

```javascript
useEffect(() => {
    return () => {
        // componentWillUnmount
    }
}, [])
```

</td>
</tr>
</table>