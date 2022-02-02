# props vs state
| props | state |
| --- | --- |
| get pass to the component | be managed within the component |
| function parameters | variables declared in the funciton body |
| immutable | can be changed |
| props - functional component | useState Hook - functional component |
| this.props - class compoennt | this.state - class component |

# passing methods as props
1. create a function in `App.js`
2. passing the function to the `child component` by `attribute={function}`
